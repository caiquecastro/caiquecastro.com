---
title: "Dockerized commands, part 2"
tags: ["docker", "virtualization"]
date: 2017-12-24
language: en
series: Dockerized commands
seriesLinkTitle: Fixing the Yarn mount
---

In the [previous post](/blog/2017-12-16-dockerized-commands/), we learned how to run npm commands in Docker. There was a small issue with that command. When I tried to run `yarn` in the Node.js container, I got the following error.

```
"exec: \"yarn\": executable file not found in $PATH"
```

The Yarn binary was under `/opt`, the same directory where we mounted the project. The mount hid the original contents of that directory.

The solution was to mount the current directory from the host at `/opt/app`.

```
docker run --rm -w /opt/app -v $(pwd):/opt/app node yarn
```

> **Compatibility note.** The untagged `node` image bundled Yarn 1 when I wrote this in 2017. Starting with Node.js 26, the official images omit Yarn 1. To run the example today, use `node:24`, which still includes it. [Node.js image documentation](https://github.com/nodejs/docker-node#yarn-v1-classic-bundling)
>
> ```sh
> docker run --rm -w /opt/app -v "$PWD:/opt/app" node:24 yarn
> ```

Now, if we list the contents of `/opt`, we can see that the Yarn directory is still there.

```
docker run --rm -u="node"  -w /opt/app -v $(pwd):/opt/app node:8.9.3 ls -l /opt

total 8
drwxrwxr-x 14 node node 4096 Oct 28 20:19 app
drwxr-xr-x  4 root root 4096 Dec 12 13:22 yarn
```

I hope you found this tip useful. If you liked it, leave a comment here.
