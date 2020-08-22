---
title: Migrating blog to hugo
tags: ["blog", "hugo", "ssg"]
date: 2020-08-21
language: pt
---

Na última semana resolvi migrar meu site pessoal para o [Hugo](https://gohugo.io/).
Há bastante tempo vinha pensando em substituir o [Jekyll](https://jekyllrb.com/).
O processo de migração foi simples pois possuo poucos artigos no blog. Porém se
tivesse mais artigos provavelmente essa migração seria mais trabalhosa.

Para executar localmente foi bem simples pois utilizei Docker.

```sh
docker run --rm -it \                         
  -v $(pwd):/src -p 1313:1313 \
  peaceiris/hugo serve --bind 0.0.0.0
```

O deploy é feito no Netilify e todo o código fonte pode ser encontrado no repositório
do meu perfil no Github.
