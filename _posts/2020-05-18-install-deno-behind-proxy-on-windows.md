---
layout: post
title: "Instalando deno com proxy no Windows"
tags: deno, proxy, windows
date: 2020-05-18
language: pt
---

Na última semana foi lançado o novo runtime de javascript e typescript, o Deno.

Para instalar no Windows, execute o seguinte comando:

```
iwr https://deno.land/x/install/install.ps1 -useb | iex
```

Porém se você está em uma rede corporativa com proxy, provavelmente não conseguirá executar esse comando.
Portanto é necessário instruir o comando Invoke-WebRequest para usar as configurações de proxy.

```
iwr -Proxy http://endereco-do-proxy:porta -ProxyUseDefaultCredentials https://deno.land/x/install/install.ps1 -useb | iex
```
