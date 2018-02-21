---
layout: post
title: "Updating git submodule"
tags: git, submodule, update
date: 2016-12-22
language: en
---

Today, after 8 months of inactivity, I'm writing a new blog post. Today I'm going to share a quick but very useful command snippet.
If you have git project with submodules, from time to time, you may need to update the submodule's repository to the latest commit.

``sh
git submodule foreach git pull origin master
``

It will visit every submodule on your project and update them to the master branch's lastest commit.

I hope this tip is useful for you. See you soon!
