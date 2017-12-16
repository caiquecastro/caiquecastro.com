---
layout: post
title: "Dockerized commands"
tags: docker, virtualization
date: 2017-12-16
---

Today I will share a quick tip to improve your workflow. In the last years,
the docker has gained so much popularity. As a trend, some people tend to
run the applications in docker containers instead of on the host machine.

After formatting my computer, I hadn't installed all the tools I use on my
development workflow and I needed to install the npm dependencies of my
project. I hadn't installed the node and npm yet, so I decided to run
`npm install` with docker

```
docker run --rm -w /opt/ -v $(pwd):/opt/ node npm install
```

The command above starts a container with a node image, the --rm flag means
that the container should be removed after it finishes running, with the -w
flag I set the working directory inside the container, and with -v, I set the
volume between the host and the container and with the `npm install` I run
the command inside the running container.

I hope this tip is usefull for you. If you like it, leave a comment here.
