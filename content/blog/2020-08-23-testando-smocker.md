---
title: "Trying out Smocker"
tags: ["smocker", "mock", "microservices", "docker"]
date: 2020-08-23
language: en
---

I came across [Smocker](https://smocker.dev/) in one of the newsletters I read each day. It's a lightweight HTTP mock server with a backend written in Go and a web interface built with React and TypeScript. You can find the source on [GitHub](https://github.com/Thiht/smocker).

I used Docker to run Smocker on my machine.

```sh
docker run -d \
    --restart=always \
    -p 8080:8080 \
    -p 8081:8081 \
    --name smocker \
    thiht/smocker
```

The container exposes two ports on the host. Point your tests at port `8080` to reach the mock server. To open the web interface shown below, use port `8081` in your browser.

![Smocker web interface](/images/smocker-screenshot.png)
