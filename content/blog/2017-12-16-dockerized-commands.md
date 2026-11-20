---
title: "Dockerized commands"
tags: ["docker", "virtualization"]
date: 2017-12-16
language: en
displayTitle: "Dockerized *commands.*"
series: Dockerized commands
seriesLinkTitle: Running npm in Docker
---

As Docker has grown in popularity, more developers have started running applications in containers. I found that approach handy for command-line tools, too.

After reformatting my computer, I needed to install my project's dependencies. I hadn't reinstalled Node.js or npm yet, so I ran `npm install` in Docker.

```sh
docker run --rm -w /opt/ -v $(pwd):/opt/ node npm install
```

The `-v` flag mounts my current directory at `/opt/` inside the container, and `-w` sets that directory as the working directory. Docker starts the container from the `node` image and runs `npm install` there. The `--rm` flag removes the container when the command finishes.

I hope this tip helps. If you try it, let me know how it goes.
