---
title: "Moving my blog to Hugo"
tags: ["blog", "hugo", "ssg"]
date: 2020-08-21
language: en
---

I'd been thinking about replacing [Jekyll](https://jekyllrb.com/) for a while. Last week, I moved my personal site to [Hugo](https://gohugo.io/). I had only a few posts to move, which made the migration straightforward. A larger archive would probably have taken more work.

I used Docker to run the site locally.

```sh
docker run --rm -it \
  -v $(pwd):/src -p 1313:1313 \
  peaceiris/hugo serve --bind 0.0.0.0
```

I deploy the site with [Netlify](https://www.netlify.com/). The full source code is in the site's repository on my GitHub profile.
