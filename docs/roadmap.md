# Roadmap de Implementação

Este roadmap organiza o desenvolvimento da vitrine virtual para confeitaria.

## Regras gerais do escopo
- O site público funciona como vitrine, não como e-commerce.
- Não deve aparecer preço no site.
- O fluxo comercial será por orçamento via WhatsApp.
- Campos como sabores/opções e tamanhos são opcionais.
- Campos opcionais vazios não devem aparecer na interface.
- Produtos podem ser marcados como destaque para aparecer na Home.

## Fase 1 - Estrutura e planejamento
- criar projeto React com Vite
- configurar rotas principais
- criar layout base com Header e Footer
- organizar estrutura inicial de pastas
- manter documentação e CI existentes

Issues relacionadas:
- #11 Criar projeto React e estrutura inicial de pastas
- #12 Configurar rotas principais da aplicação
- #14 Criar layout base com Header e Footer

## Fase 2 - Área pública
- criar Home
- criar Sobre
- criar Contato
- ajustar responsividade inicial
- preparar a Home para receber produtos em destaque

Issues relacionadas:
- #15 Criar página Home com hero e destaques iniciais
- #16 Criar página Sobre da confeiteira
- #17 Criar página Contato com WhatsApp e Instagram
- #41 Exibir produtos em destaque na Home

## Fase 3 - Catálogo interativo
- criar dados iniciais de categorias e produtos
- criar ProductCard sem exibição de preço
- criar CategorySection
- criar ProductCarousel
- exibir produtos por categoria
- permitir seleção de produto no carrossel

Issues relacionadas:
- #18 Criar arquivo de dados iniciais de categorias e produtos
- #25 Criar componente ProductCard
- #26 Criar seção de categoria com filtro de produtos
- #27 Criar carrossel horizontal de produtos por categoria

## Fase 4 - Detalhe do produto e WhatsApp
- criar ProductDetails
- exibir imagem, nome, descrição e observações
- exibir sabores/opções somente quando existirem
- exibir tamanhos somente quando existirem
- não exibir preço
- criar botão de WhatsApp com mensagem dinâmica baseada no produto selecionado

Issues relacionadas:
- #28 Criar painel de detalhes do produto selecionado
- #29 Criar botão de WhatsApp com mensagem dinâmica

## Fase 5 - Área administrativa
- criar tela de login
- proteger rotas administrativas
- criar dashboard
- implementar CRUD de categorias
- implementar CRUD de produtos
- permitir marcar produto como destaque
- permitir ativar/inativar produto, se necessário
- permitir cadastrar campos opcionais apenas quando fizer sentido

Issues relacionadas:
- #30 Criar tela de login administrativo
- #31 Implementar rotas protegidas da área administrativa
- #32 Criar listagem e cadastro de categorias no admin
- #33 Implementar edição e remoção de categorias no admin
- #34 Criar listagem e cadastro de produtos no admin
- #35 Implementar edição e remoção de produtos no admin

## Fase 6 - Persistência, imagens e entrega
- implementar upload de imagens
- implementar persistência real de categorias e produtos
- garantir que os dados persistidos não incluam preço público
- executar testes finais do fluxo do cliente e do administrador
- publicar o sistema
- registrar evidências para a faculdade

Issues relacionadas:
- #36 Implementar upload de imagem para produtos
- #37 Implementar persistência real de categorias e produtos
- #38 Executar testes finais do fluxo do cliente e do administrador
- #39 Publicar o sistema e registrar evidências para a faculdade
