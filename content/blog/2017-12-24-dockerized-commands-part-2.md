---
title: "Dockerized commands, part 2"
tags: ["docker", "virtualization"]
date: 2017-12-24
language: en
series: Dockerized commands
seriesLinkTitle: Fixing the Yarn mount
---

In the [previous post](/blog/2017-12-16-dockerized-commands/), I showed how to run npm commands in a Docker container. When I tried to run `yarn` the same way, I got this error.

```
"exec: \"yarn\": executable file not found in $PATH"
```

The `node:8.9.3` image I used for this example bundled Yarn under `/opt`. Mounting my project directory at `/opt` hid the files that were already there, including the Yarn executable.

I fixed the problem by mounting my project at `/opt/app`.

```
docker run --rm -w /opt/app -v "$PWD:/opt/app" node:8.9.3 yarn
```

Listing the contents of `/opt` now shows my project and the Yarn installation side by side.

```
docker run --rm -u node -w /opt/app -v "$PWD:/opt/app" node:8.9.3 ls -l /opt

total 8
drwxrwxr-x 14 node node 4096 Oct 28 20:19 app
drwxr-xr-x  4 root root 4096 Dec 12 13:22 yarn
```

I hope this tip helps. If you try it, let me know how it goes.
