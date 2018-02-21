---
layout: post
title: "Dockerized commands - Part 2"
tags: docker, virtualization
date: 2017-12-24
language: en
---

On the last post ({% post_url 2017-12-16-dockerized-commands %}), we learned
how to run npm commands dockerized. But there is a little issue with that
command. I tried to run `yarn` with the dockerized node, but I got the
following error:

```
"exec: \"yarn\": executable file not found in $PATH"
```

The issue is, the yarn binary is on /opt folder, the same folder we were
mouting and it was conflicting with the original content of the folder.

The solution was to mount the current folder from the host on a /opt/app
folder.

```
docker run --rm -w /opt/app -v $(pwd):/opt/app node yarn
```

And now, if we list the content of the /opt folder, we didn't override the
yarn binary.

```
docker run --rm -u="node"  -w /opt/app -v $(pwd):/opt/app node:8.9.3 ls -l /opt

total 8
drwxrwxr-x 14 node node 4096 Oct 28 20:19 app
drwxr-xr-x  4 root root 4096 Dec 12 13:22 yarn
```

I hope this tip is usefull for you. If you like it, leave a comment here.
