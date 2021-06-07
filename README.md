## All Animes Vk

O site <b>All Animes Vk</b> é um site de animes com dados de mais de 20 mil animes e um sistema de busca de animes. O site foi todo feito em Next js e styled-components.



## Requisitos... :computer:

-Node js e um editor de código ou IDE para executar o projeto e modificá-lo


## Começando ☕

Primeiramente baixe o projeto e execute-o usando:

```bash
npm run dev
# or
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navetador para ver os resultados.

Você pode começar a modificar o projeto por onde quiser, um bom começo é modificar o: `pages/index.js`


## Por dentro do projeto :open_file_folder:

Vamos conhecer um pouco sobre a organização de pastas do projeto e seus arquivos...


## Pasta "assets"

É a pasta responsável pelos arquivos estáticos, dentro dessa pasta a pasta "images" que contém todas as imagens do site.

## Pasta "pages"

Como o próprio nome sugere, essa pasta é a responsável por agrupar todas as páginas do site.


## Pasta "components"

A pasta responsável pelos componentes do site, cada componente possui sua pasta com o arquivo .js e o "style.js" responsável pelo estilo do componente.


## Pasta "patterns"

Dentro dessa pasta fica arquivos reutilizáveis, esses arquivos são elementos HTML com um estilo já pré definido e outras coisas são adaptáveis através do uso de props. Para entender melhor como esses arquivos funcionam basta dar uma olhada em como cada um deles foi programado.

## pasta "styles"

Pasta responsável por conter o css global do site.

## pasta "genres"

É a pasta responsável por conter páginas com os gêneros dos animes.

## pasta "search_anime"

É a pasta responsável por conter a página de pesquisa de animes.

## pasta "dropdown_data"

É a pasta responsável por um arquivo dropdown que é reutilizado em várias partes do site, porém cada pasta contém suas diferenças adaptadas para a página que esse componente é incluso. O código é o mesmo o que vai mudando é o estilo do componente.