# Confeitaria Vitrine

Vitrine virtual para uma confeitaria, criada como projeto em React para apresentar produtos, organizar o catalogo por categorias e facilitar o contato com clientes pelo WhatsApp.

## Objetivo

O sistema deve permitir que visitantes conhecam a confeitaria, naveguem pelos produtos disponiveis e solicitem orcamentos de forma simples. Tambem esta prevista uma area administrativa para gerenciar categorias, produtos e imagens.

## Escopo previsto

- Area publica com Home, Sobre e Contato.
- Catalogo de produtos organizado por categorias.
- Carrossel de produtos em cada categoria.
- Detalhes do produto selecionado exibidos abaixo do carrossel.
- Botao de WhatsApp com mensagem pronta.
- Area administrativa com login.
- Gerenciamento de categorias, produtos e imagens.
- Persistencia real em etapa posterior.

## Tecnologias

- React
- Vite
- JavaScript
- npm
- ESLint
- GitHub Actions

## Estrutura inicial

```txt
src/
  admin/       telas e componentes da area administrativa
  assets/      imagens e recursos visuais
  components/  componentes reutilizaveis
  data/        dados iniciais de categorias e produtos
  hooks/       hooks reutilizaveis
  pages/       paginas publicas
  services/    integracoes e servicos
  utils/       funcoes auxiliares
```

## Como executar

Instale as dependencias:

```bash
npm install
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

Gere a build de producao:

```bash
npm run build
```

Execute a verificacao de lint:

```bash
npm run lint
```

## Planejamento

O planejamento de implementacao esta documentado em `docs/roadmap.md` e nas issues do repositorio. O projeto deve evoluir em etapas, respeitando o escopo definido para a vitrine publica, catalogo interativo, WhatsApp, area administrativa, persistencia e entrega final.

## Status atual

A base React com Vite ja foi criada e a estrutura inicial de pastas existe. As proximas etapas sao configurar as rotas principais, criar o layout base com Header e Footer e preencher os dados iniciais do catalogo.
