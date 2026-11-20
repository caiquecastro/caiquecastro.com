---
title: "Updating Git submodules"
tags: ["git", "submodule", "update"]
date: 2016-12-22
language: en
---

It's been eight months since my last post. Today I want to share a command I use to pull changes into several Git submodules at once.

```sh
git submodule foreach git pull origin master
```

`foreach` runs the pull in each checked-out, top-level submodule, using the `master` branch on that submodule's `origin`. If a pull fails, Git stops there. Earlier pulls stay in place, and later submodules keep their previous commits.

I hope this tip helps. See you soon!
