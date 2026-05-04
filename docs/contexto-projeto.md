# Contexto do Projeto

## Tipo de projeto
Projeto extensionista de ADS e também prestação de serviço real.

## Ideia central
Desenvolver uma vitrine virtual para uma confeiteira, com foco em apresentar os produtos de forma organizada e encaminhar o cliente para atendimento pelo WhatsApp.

O site não será um e-commerce completo. Ele funcionará como uma vitrine digital: o cliente visualiza os produtos, conhece detalhes e solicita orçamento diretamente pelo WhatsApp.

## Escopo fechado da versão final
- Home
- Sobre
- Contato
- Catálogo por categorias
- Carrossel de produtos por categoria
- Detalhe dinâmico do produto selecionado abaixo do carrossel
- Botão de WhatsApp com mensagem pronta
- Produtos em destaque na Home
- Área admin com login
- CRUD de categorias
- CRUD de produtos
- Upload de imagens
- Persistência real dos dados
- Testes e publicação

## Regra comercial importante
- O site público não deve exibir preço.
- O fluxo comercial será por orçamento via WhatsApp.
- O cliente vê o produto, detalhes e opções disponíveis, mas combina preço, quantidade, data e personalização diretamente no WhatsApp.

## Campos de produto
Campos principais:
- id
- nome
- categoriaId
- descricao
- imagem
- observacoes
- destaque
- ativo

Campos opcionais:
- sabores/opcoes
- tamanhos

Nem todos os produtos precisam ter sabores/opções ou tamanhos. Esses campos devem aparecer no site apenas quando estiverem preenchidos.

Exemplos:
- Um bolo pode ter tamanhos, mas não necessariamente sabores/opções.
- Um salgado, como quiche, pode ter opções de sabores, sem cadastrar cada sabor como produto separado.
- Um produto simples pode não ter tamanhos nem opções.

## Fluxo do cliente
1. Cliente entra no site.
2. Visualiza a página inicial.
3. Vê produtos em destaque na Home.
4. Acessa o catálogo.
5. Navega pelas categorias/grupos.
6. Vê os produtos em carrossel dentro de cada categoria.
7. Clica em um produto.
8. Vê os detalhes completos abaixo do carrossel.
9. Visualiza imagem, descrição, observações e, quando existirem, tamanhos e sabores/opções.
10. Clica em “Pedir pelo WhatsApp” ou “Solicitar orçamento”.
11. É encaminhado ao WhatsApp com mensagem pronta baseada no produto selecionado.

## Fluxo da administradora
1. Faz login.
2. Acessa o painel admin.
3. Cadastra categorias.
4. Cadastra produtos.
5. Define se o produto ficará ativo ou em destaque.
6. Preenche campos opcionais apenas quando fizer sentido.
7. Edita ou remove produtos e categorias.
8. Faz upload de imagens.
9. Atualiza o catálogo sem mexer no código.

## O que NÃO entra no escopo
- Carrinho de compras
- Pagamento online
- Exibição de preços no site público
- Área do cliente
- Acompanhamento de pedido
- Controle de estoque
- Cupom de desconto
- Cálculo de frete
