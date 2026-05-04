# Decisões Técnicas

## Front-end
- React com Vite
- Não usar Create React App
- React Router para rotas
- Componentização para Header, Footer, ProductCard, CategorySection, ProductCarousel, ProductDetails e WhatsappButton

## Dados e catálogo
- O catálogo será organizado por categorias.
- Cada categoria exibirá produtos em carrossel.
- Ao clicar em um produto, os detalhes serão exibidos abaixo do carrossel.
- O site público não deve exibir preço.
- O fluxo comercial será por orçamento via WhatsApp.
- Produtos podem ter campos opcionais de sabores/opções e tamanhos.
- Campos opcionais vazios não devem aparecer na interface.
- Produtos podem ser marcados como destaque para aparecer na Home.
- Produtos podem ter status ativo/inativo, se necessário.

## Área administrativa
- A área administrativa terá login.
- Rotas administrativas devem ser protegidas.
- A administradora poderá gerenciar categorias.
- A administradora poderá gerenciar produtos.
- O cadastro de produtos deve permitir imagem, descrição, observações, destaque, status ativo e campos opcionais quando fizer sentido.

## Imagens e persistência
- O sistema deverá permitir upload de imagens de produtos.
- Categorias e produtos deverão ser persistidos em uma etapa posterior.
- A persistência não deve resultar em exibição pública de preço.

## Deploy
- Provável deploy futuro na Vercel.
- A URL final poderá usar domínio próprio se houver necessidade de apresentação profissional.

## Fluxo Git
- main = produção
- usar feature branches
- abrir PR para main
- CI obrigatório
- sem push direto na main

## Organização do projeto
- GitHub Project criado
- milestones criadas
- issues e epics já abertas
- main protegida
- docs devem ser mantidos atualizados quando o escopo mudar
