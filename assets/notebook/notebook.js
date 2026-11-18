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
