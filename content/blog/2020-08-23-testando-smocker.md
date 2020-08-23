---
title: Testando Smocker
tags: ["smocker", "mock", "microserviços", "docker"]
date: 2020-08-23
language: pt
---

No post de hoje irei demonstrar uma ferramenta interessante que descobri
nas minhas leituras diárias de newsletters. Como ele se descreve, é um
servidor de mock HTTP simples e eficiente. O objetivo 

Trata-se do [Smocker](https://smocker.dev/), que você pode conferir o projeto
no Github: [Thiht/smocker](https://github.com/Thiht/smocker).

Seu backend é escrito em Go e seu front-end é feito com React com Typescript.

Para instalá-lo no meu computador, eu utilizei Docker

```sh
docker run -d \
    --restart=always \
    -p 8080:8080 \
    -p 8081:8081 \
    --name smocker \
    thiht/smocker
```

Ele abre duas portas com o host, a 8080 que é a porta do servidor em si, e que
você usará nos seus testes e a 8081 que é a UI.

![Smocker UI](/images/smocker-screenshot.png)
