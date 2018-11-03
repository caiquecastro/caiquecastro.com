---
layout: post
title: "Building multi stage docker image for node app"
tags: docker, node
date: 2018-11-03
language: en
---

Today I'm going to share a very helpful tip to build smaller docker images.

Whenever I can, I look to build small docker images to run my containers.

When building a node application, for the most cases you can use the alpine version.

The default version is 10x larger than the alpine version.

```
node                             11                  4e4c445311e6        21 hours ago        894MB
node                             11-alpine           4b3c025f5508        21 hours ago        71.3MB
```

But the default version contains python, that is required to build some dependencies.
So I use the default version as the builder and the alpine version to run 

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

As the result, I got a very small image:

```
docker-node-multistage           latest              560ab0e87e5c        20 minutes ago      74.2MB
```

If this tip was usefull for you or you liked it, please leave a comment here.
If you found a mistake on the article, please leave a message too.
