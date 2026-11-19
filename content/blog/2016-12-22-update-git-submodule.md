---
title: "Updating Git submodules"
tags: ["git", "submodule", "update"]
date: 2016-12-22
language: en
---

It's been eight months since my last post. Today I want to share a command I use in Git projects with submodules. Sometimes I need to pull the latest changes into all of them at once.

```sh
git submodule foreach git pull origin master
```

This visits each submodule in the project and pulls the latest changes from its remote `master` branch.

I hope this tip helps. See you soon!
