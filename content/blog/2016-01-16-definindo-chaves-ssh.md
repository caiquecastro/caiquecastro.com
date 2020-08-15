---
title: "Definindo chaves SSH"
tags: ["ssh", "servidor", "remoto"]
date: 2016-01-16
language: pt-BR
---

Quando desejamos conectar a um servidor remoto, como por exemplo um droplet da
Digital Ocean, o meio mais comum e seguro é através de ssh. Exemplo:

{% highlight bash %}
  ssh user@123.45.67.89
{% endhighlight %}

Inicialmente quando executamos esse comando, será solicitada a senha do usuario
para acesso ao servidor. Porém para quem realiza tarefas em servidores remotos
diversas vezes no dia, ter que digitar a senha do servidor toda vez acaba
afetando sua produtividade.

Para solucionar esse problema, é possível que se inclua a sua chave ssh pública
na lista de chaves autorizadas do servidor remoto.

{% highlight bash %}
  cat ~/.ssh/id_rsa.pub | ssh user@123.45.67.89 "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
{% endhighlight %}

Explicando o comando acima:

1. Obtém o conteúdo da sua chave ssh pública: ``cat ~/.ssh/id_rsa.pub``
2. Conecta ao servidor remoto atravé do usuário selecionado:
``ssh user@123.45.67.89``
3. Executa o seguinte comando no servidor conectado:
    1. Cria o caminho de pasta (se não existir) para armazenar as chaves SSH:
    ``mkdir -p ~/.ssh``
    2. Acresenta o conteúdo obtido ao arquivo de chaves autorizadas:
    ``cat >> ~/.ssh/authorized_keys``

E pronto: nas suas próximas conexões a 123.45.67.89 com o usuário "user" não
será solicitada a senha. E você estará conectado ao servidor remoto de uma
maneira ainda mais segura.
