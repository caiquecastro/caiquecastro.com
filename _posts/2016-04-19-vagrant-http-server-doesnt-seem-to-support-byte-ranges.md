---
layout: post
title: "Vagrant Error - Http server doesn\'t seem to support byte ranges"
tags: vagrant, error, box, failed upgrade
date: 2016-04-19
language: en
---

Hey guys, I'm back to share with you a solution for an error that occured to me
today. I was upgrading one of my vagrant boxes but the computer shut down before
the download it is finished. When I turned the computer on again and tried to
resume the vagrant box download, I started getting the following error:

![Vagrant error - don't support byte ranges](/images/vagrant-error-byte-ranges.jpg)

After a quick search on StackOverflow, I got a solution: To remove the failed box
download from the temporary folder on vagrant.

``sh
cd ~/.vagrant.d/tmp
rm -rf *
``

I hope this can be useful for someone. I would like to apologize if I made any
mistake in English.
