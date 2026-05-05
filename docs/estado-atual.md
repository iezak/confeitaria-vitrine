# Estado Atual

Este arquivo registra o estágio atual do projeto para facilitar o handoff com o Codex.
Use este conteúdo como referência do que já existe, do que já foi concluído e da ordem recomendada dos próximos passos.

## O que já existe
- README.md
- docs/roadmap.md
- docs/contexto-projeto.md
- docs/decisoes-tecnicas.md
- docs/estado-atual.md
- .github/workflows/ci.yml
- GitHub Project organizado
- milestones criadas
- branch `main` protegida

## Escopo atual resumido
- Site-vitrine para confeitaria.
- Não será e-commerce completo.
- Não haverá exibição de preços no site público.
- O fluxo comercial será por orçamento via WhatsApp.
- Produtos serão organizados por categorias/grupos.
- Cada categoria terá carrossel de produtos.
- Ao clicar em um produto, o detalhe aparece abaixo do carrossel.
- Produtos podem ter campos opcionais de sabores/opções e tamanhos.
- Campos opcionais vazios não devem aparecer na tela.
- Produtos podem ser marcados como destaque para aparecer na Home.
- O visitante poderá montar uma lista de orçamento com múltiplos produtos.
- A lista de orçamento não é carrinho de compras: não tem preço, pagamento, checkout ou frete.
- A lista de orçamento serve para enviar uma única mensagem pelo WhatsApp com os produtos selecionados.
- Área administrativa permitirá gerenciar categorias, produtos e imagens.

## O que já foi concluído
- #11 Criar projeto React e estrutura inicial de pastas

## Próximas issues prioritárias
Ordem recomendada imediata:
1. #12 Configurar rotas principais da aplicação
2. #14 Criar layout base com Header e Footer
3. #15 Criar página Home com hero e destaques iniciais
4. #16 Criar página Sobre da confeiteira
5. #17 Criar página Contato com WhatsApp e Instagram
6. #18 Criar arquivo de dados iniciais de categorias e produtos

## Próxima sequência após a #18
Depois de concluir a #18, seguir esta ordem:
1. #25 Criar componente ProductCard
2. #26 Criar seção de categoria com filtro de produtos
3. #27 Criar carrossel horizontal de produtos por categoria
4. #28 Criar painel de detalhes do produto selecionado
5. #43 Criar lista de orçamento com múltiplos produtos
6. #29 Criar botão de WhatsApp com mensagem dinâmica
7. #41 Exibir produtos em destaque na Home

## Próxima sequência da área administrativa
Depois do catálogo interativo:
1. #30 Criar tela de login administrativo
2. #31 Implementar rotas protegidas da área administrativa
3. #32 Criar listagem e cadastro de categorias no admin
4. #33 Implementar edição e remoção de categorias no admin
5. #34 Criar listagem e cadastro de produtos no admin
6. #35 Implementar edição e remoção de produtos no admin

## Próxima sequência de persistência e entrega
Etapa final do projeto:
1. #36 Implementar upload de imagem para produtos
2. #37 Implementar persistência real de categorias e produtos
3. #38 Executar testes finais do fluxo do cliente e do administrador
4. #39 Publicar o sistema e registrar evidências para a faculdade

## Próximo passo esperado agora
- Começar pela issue #12
- Antes de implementar, validar rapidamente o entendimento do contexto atual do projeto
