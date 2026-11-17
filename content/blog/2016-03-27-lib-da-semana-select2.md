---
title: "Lib da Semana - Select2"
date: 2016-03-27
tags: [javascript, library, jquery, select2]
language: pt-BR
---

Essa semana começarei uma série de artigos apresentando bibliotecas e frameworks
javascript e css.

Nessa semana abordaremos sobre o [Select2](https://select2.github.io/). Como a
própria biblioteca javascript se define: Select2 é uma alternativa JQuery para
os &lt;select&gt; do HTML.

Permite você customizar os select boxes com suporte para busca, tokenização,
dados remotos, scroll infinito entre outras características.

Para usar o Select2, carregue o jQuery antes do JavaScript do plugin. Os arquivos
CSS e JavaScript do Select2 podem ser incluídos das seguintes formas:

* Download local (manualmente) (não recomendado):
[Baixando pelo Github](https://github.com/select2/select2/releases), que no
momento em que escrevo está na versão 4.0.1 lançada em Novembro de 2015.
[Baixar 4.0.1](https://github.com/select2/select2/archive/4.0.1.tar.gz). Após
extrair o conteúdo da pasta, inclua os arquivos dist/css/select2.min.css e
dist/js/select2.min.js (ou dist/js/select2.full.min.js para a versão completa
contendo módulos adicionais) na sua página html.

  Exemplo:

```html
<link href="path/to/select2.min.css" rel="stylesheet" />
<script src="path/to/select2.min.js"></script>
```

* Utilizando CDN: A biblioteca é disponibilizada nas CDN
[cdnjs](https://cdnjs.com/libraries/select2) e
[jsDeliver](https://www.jsdelivr.com/projects/select2). Inclua os links no seu
HTML.

Exemplo:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/css/select2.min.css" rel="stylesheet" />
<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.1/js/select2.min.js"></script>
```

* Via NPM:

Select2 também é disponibilizada como um pacote [NPM](https://www.npmjs.com/).
Para baixar Select2 como dependência NPM:

```bash
npm install select2 --save
```

  A biblioteca será baixada para a sua pasta node_modules/select2.

* Via Bower:

Para baixar via [bower](http://bower.io):

```bash
bower install select2 --save
```


## Utilização

Após incluir os respectivos arquivos css e js, você já pode começar a usar a
biblioteca.

```javascript
//inicie com as opções padrões
$('.select2').select2();
```

Assim, em todo elemento que for aplicada essa classe, terá o efeito do plugin.

```html
<select class="select2"></select>
```

Assim como em diversas outras bibliotecas, também é possivel personalizar, passando
assim um objecto de configuração para o inicializador do plugin.

```javascript
$('.select2').select2({
  placeholder: 'Escolha seu país de nascimento'
});
```

No exemplo acima, definimos um placeholder (Aquele texto que dá uma dica ao usuário
da página de como preencher aquele campo) para o componente.

É possível também definir outras opções, assim como tags, permitindo a inserção de
vários valores no campo.

```javascript
$('#languages').select2({
  placeholder: 'Escolha suas linguagens favoritas',
  tags: true
});
```

```html
<select id="languages" multiple></select>
```

A opção allowClear permite com que o usuário a opção que ele selecionou ou já veio
previamente selecionada.

```javascript
$('.select2').select2({
  placeholder: 'Escolha seu país de nascimento',
  allowClear: true
});
```

A biblioteca também carrega para o componente se for definida alguma opção no código
HTML:

```html
<select class="select2">
  <option value="php" selected>PHP</option>
  <option value="c">C</option>
  <option value="java">Java</option>
</select>
```

Select2 é uma biblioteca bastante completa e repleta de funcionalidades. Para conhecer
outras opções disponíveis, consulte a [documentação](https://select2.github.io) em inglês.

Abaixo um fiddle disponível se você quiser experimentar a biblioteca.

<script async src="https://jsfiddle.net/gq327ed4/2/embed/"></script>

Espero ter disciplina para continuar postando dicas. Até a próxima.
