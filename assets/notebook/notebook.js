const filters = document.querySelector(".language-filter");
if (filters) {
  filters.hidden = false;
  filters.addEventListener("click", (event) => {
    const choice = event.target.closest("button[data-filter]");
    if (!choice) return;
    const lang = choice.dataset.filter;
    for (const button of filters.querySelectorAll("button")) {
      button.setAttribute("aria-pressed", String(button === choice));
    }
    let count = 0;
    for (const year of document.querySelectorAll(".archive-year")) {
      let visible = 0;
      for (const post of year.querySelectorAll("[data-lang]")) {
        post.hidden = lang !== "all" && post.dataset.lang !== lang;
        if (!post.hidden) visible++;
      }
      year.hidden = visible === 0;
      count += visible;
    }
    document.querySelector(".count").textContent = count;
  });
}

for (const block of document.querySelectorAll(".prose pre")) {
  const bar = document.createElement("div");
  bar.className = "code-bar";
  const code = block.querySelector("code");
  const language = code?.className.match(/(?:^|\s)language-([\w-]+)/)?.[1];
  const labels = { sh: "Shell", bash: "Bash", javascript: "JavaScript", html: "HTML" };
  bar.textContent = labels[language] || language || "Code";
  block.tabIndex = 0;
  block.before(bar);
  if (!navigator.clipboard) continue;

  const button = document.createElement("button");
  button.type = "button";
  button.textContent = bar.textContent === "Shell" ? "Copy command" : "Copy code";
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(block.textContent.trimEnd());
      button.textContent = "Copied";
    } catch {
      const selection = window.getSelection();
      selection.selectAllChildren(block);
      button.textContent = "Selected";
    }
  });
  bar.append(button);
}

const themeToggle = document.getElementById("theme-toggle");
const darkStyles = document.getElementById("dark-theme");
function darkModeActive() {
  return window.matchMedia(darkStyles.media).matches;
}
function updateThemeLabel() {
  themeToggle.textContent = darkModeActive() ? "Light mode" : "Dark mode";
}
themeToggle.hidden = false;
updateThemeLabel();
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", updateThemeLabel);
themeToggle.addEventListener("click", () => {
  const theme = darkModeActive() ? "light" : "dark";
  darkStyles.media = theme === "dark" ? "all" : "not all";
  try { localStorage.setItem("pref-theme", theme); } catch {}
  updateThemeLabel();
});

const searchIndexURL = document.currentScript.dataset.searchIndex;
if (searchIndexURL && document.modelContext?.registerTool) {
  let indexRequest;
  async function loadPosts() {
    const response = await fetch(searchIndexURL);
    if (!response.ok) throw new Error("The notebook search index could not be loaded.");
    const pages = await response.json();
    return pages.filter((page) => page.section === "blog");
  }

  function searchPosts(posts, terms) {
    const matches = [];
    const hits = (field) => terms.filter((term) => field.includes(term)).length;
    for (const post of posts) {
      const title = [post.title, post.series, post.seriesLinkTitle].join(" ").toLowerCase();
      const tags = post.tags.join(" ").toLowerCase();
      const text = post.content.toLowerCase();
      if (!terms.every((term) => title.includes(term) || tags.includes(term) || text.includes(term))) continue;

      const score = 3 * hits(title) + 2 * hits(tags) + hits(text);
      const passages = post.content.split(/\n+/).map((line) => line.trim()).filter(Boolean);
      let excerpt = "";
      let bestHits = -1;
      for (const passage of passages) {
        const count = hits(passage.toLowerCase());
        if (count > bestHits) {
          excerpt = passage;
          bestHits = count;
        }
      }
      if (excerpt.length > 240) excerpt = excerpt.slice(0, 239).trimEnd() + "…";
      matches.push({ score, result: { title: post.title, excerpt, url: post.permalink } });
    }
    matches.sort((a, b) => b.score - a.score);
    return matches.slice(0, 5).map((match) => match.result);
  }

  document.modelContext.registerTool({
    name: "search_notebook",
    description: "Find posts in Caique de Castro's engineering notebook. Returns up to five matching articles with excerpts and links.",
    inputSchema: {
      type: "object",
      properties: {
        query: {
          type: "string",
          minLength: 1,
          description: "Use a few keywords from the reader's question, such as 'Yarn mount'. All keywords must match.",
        },
      },
      required: ["query"],
      additionalProperties: false,
    },
    annotations: { readOnlyHint: true },
    async execute({ query }) {
      const terms = query.toLowerCase().match(/[\p{L}\p{N}]+/gu);
      if (!terms) return [];
      indexRequest ??= loadPosts().catch((error) => {
        indexRequest = undefined;
        throw error;
      });
      return searchPosts(await indexRequest, terms);
    },
  });
}
