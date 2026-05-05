# AGENTS.md

## Projeto
Este repositório contém o projeto `confeitaria-vitrine`, uma vitrine virtual para confeitaria.

## Objetivo do sistema
Criar um sistema web para apresentar produtos de confeitaria de forma organizada e encaminhar o cliente para orçamento pelo WhatsApp.

O sistema não deve funcionar como e-commerce completo. Ele deve funcionar como uma vitrine digital com lista de orçamento.

## Escopo funcional
O sistema deve ter:
- área pública
- Home
- página Sobre
- página Contato
- catálogo por categorias/grupos
- carrossel de produtos por categoria
- detalhe dinâmico do produto selecionado abaixo do carrossel
- produtos em destaque na Home
- lista de orçamento com múltiplos produtos
- botão de WhatsApp com mensagem pronta
- área administrativa com login
- CRUD de categorias
- CRUD de produtos
- upload de imagens
- persistência real dos dados em etapa posterior

## Regras comerciais importantes
- Não exibir preços no site público.
- O fluxo comercial será por orçamento via WhatsApp.
- A lista de orçamento não é carrinho de compras.
- Não implementar pagamento online.
- Não implementar checkout.
- Não implementar cálculo de frete.
- Não implementar área do cliente.
- Não implementar acompanhamento de pedido.
- Não implementar controle de estoque.

## Produtos
Campos principais esperados:
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

Regras para campos opcionais:
- Nem todos os produtos precisam ter sabores/opções.
- Nem todos os produtos precisam ter tamanhos.
- Campos opcionais vazios não devem aparecer na interface.
- Exemplo: quiche pode ter opções de sabores sem cadastrar cada sabor como produto separado.

## Lista de orçamento
A lista de orçamento deve permitir:
- adicionar produto à lista
- remover produto da lista
- visualizar produtos selecionados
- exibir indicador de quantidade de itens selecionados
- enviar uma única mensagem pelo WhatsApp com todos os produtos selecionados

A lista de orçamento não deve:
- exibir preços
- calcular total
- finalizar pedido
- processar pagamento
- funcionar como carrinho de e-commerce

## WhatsApp
O botão de WhatsApp deve permitir:
- solicitar orçamento de um produto individual
- solicitar orçamento com múltiplos produtos da lista de orçamento
- montar mensagem automática com os nomes dos produtos selecionados
- não incluir preços na mensagem automática

## Stack desejada
- React
- Vite
- React Router
- CSS
- possível deploy futuro na Vercel

## Componentes esperados
- Header
- Footer
- ProductCard
- CategorySection
- ProductCarousel
- ProductDetails
- WhatsappButton
- ListaOrcamento ou componente equivalente

## Regras de trabalho
- Não remover arquivos já existentes sem necessidade.
- Não alterar o workflow de CI sem motivo claro.
- Trabalhar por issue.
- Fazer mudanças pequenas e fáceis de revisar.
- Explicar no final o que foi alterado.
- Manter a main protegida e trabalhar em branch de feature.
- Não fazer push direto na main.
- Preferir código claro e simples.
- Antes de implementar, ler `docs/contexto-projeto.md`, `docs/decisoes-tecnicas.md`, `docs/roadmap.md` e `docs/estado-atual.md`.

## Ordem atual de implementação
1. Issue #12 - Configurar rotas principais da aplicação
2. Issue #14 - Criar layout base com Header e Footer
3. Issue #15 - Criar página Home com hero e destaques iniciais
4. Issue #16 - Criar página Sobre da confeiteira
5. Issue #17 - Criar página Contato com WhatsApp e Instagram
6. Issue #18 - Criar arquivo de dados iniciais de categorias e produtos
7. Issue #25 - Criar componente ProductCard
8. Issue #26 - Criar seção de categoria com filtro de produtos
9. Issue #27 - Criar carrossel horizontal de produtos por categoria
10. Issue #28 - Criar painel de detalhes do produto selecionado
11. Issue #43 - Criar lista de orçamento com múltiplos produtos
12. Issue #29 - Criar botão de WhatsApp com mensagem dinâmica
13. Issue #41 - Exibir produtos em destaque na Home

## Issues administrativas futuras
- Issue #30 - Criar tela de login administrativo
- Issue #31 - Implementar rotas protegidas da área administrativa
- Issue #32 - Criar listagem e cadastro de categorias no admin
- Issue #33 - Implementar edição e remoção de categorias no admin
- Issue #34 - Criar listagem e cadastro de produtos no admin
- Issue #35 - Implementar edição e remoção de produtos no admin

## Issues finais futuras
- Issue #36 - Implementar upload de imagem para produtos
- Issue #37 - Implementar persistência real de categorias e produtos
- Issue #38 - Executar testes finais do fluxo do cliente e do administrador
- Issue #39 - Publicar o sistema e registrar evidências para a faculdade
