---
title: "Building a multi-stage Docker image for a Node.js app"
tags: ["docker", "node"]
date: 2018-11-03
language: en
---

I try to keep my Docker images small. For many Node.js apps, the Alpine image works well. When I compared the two Node.js 11 images, the default image was more than ten times as large as the Alpine image.

```
node                             11                  4e4c445311e6        21 hours ago        894MB
node                             11-alpine           4b3c025f5508        21 hours ago        71.3MB
```

The default image includes Python, which some dependencies need at build time. I used the default image to install the dependencies and the Alpine image to run the app.

Use this example for apps with pure JavaScript dependencies. The default image uses glibc, and Alpine uses musl. A native addon compiled in the default image can fail to load on Alpine. If your app uses native addons, build them in a matching Alpine stage with Python, Make, and a C++ compiler.

```
FROM node:11 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:11-alpine

WORKDIR /app

COPY --from=builder /app ./

COPY . ./

CMD [ "node", "index.js" ]
```

My final image was 74.2 MB, only a little larger than the Alpine base image.

```
docker-node-multistage           latest              560ab0e87e5c        20 minutes ago      74.2MB
```

If this tip helped you or you spotted a mistake in the article, please leave a comment.
