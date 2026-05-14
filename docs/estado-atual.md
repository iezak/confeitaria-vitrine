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
- AGENTS.md
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
- O deploy será feito na Cloudflare Pages.

## Deploy definido
- Plataforma: Cloudflare Pages
- Repositório conectado ao GitHub
- Branch de produção: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Pull requests e branches poderão gerar previews para validação antes do merge.

## O que já foi concluído
- #11 Criar projeto React e estrutura inicial de pastas
- #12 Configurar rotas principais da aplicação
- #14 Criar layout base com Header e Footer

---

## Issue #12 - Configurar rotas principais da aplicação

Status: concluída

O que foi feito:
- Instalação do `react-router-dom`.
- Configuração do `BrowserRouter` no `main.jsx`.
- Criação das páginas iniciais: `Home.jsx`, `Sobre.jsx`, `Contato.jsx`, `Catalogo.jsx`.
- Configuração das rotas no `App.jsx` com `Routes` e `Route`.

Arquivos principais alterados:
- `src/main.jsx`
- `src/App.jsx`
- `src/pages/Home.jsx`
- `src/pages/Sobre.jsx`
- `src/pages/Contato.jsx`
- `src/pages/Catalogo.jsx`
- `package.json`

Validação:
- `npm run build`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- Teste manual: navegação entre as 4 rotas validada no navegador.

Demandas não previstas:
- Nenhuma demanda nova identificada neste momento.

Observações:
- Estrutura de rotas pronta para receber o layout base com Header e Footer.

---

## Issue #14 - Criar layout base com Header e Footer

Status: concluída

O que foi feito:
- Criação do `Header.jsx` com nome da confeitaria, links de navegação e links para WhatsApp e Instagram.
- Criação do `Footer.jsx` com nome, navegação, contato e créditos do desenvolvedor.
- Criação do `Layout.jsx` com `Header`, `Outlet` e `Footer`.
- Atualização do `App.jsx` para usar o `Layout` como rota pai com rotas aninhadas.

Arquivos principais criados ou alterados:
- `src/components/Header/Header.jsx`
- `src/components/Footer/Footer.jsx`
- `src/components/Layout/Layout.jsx`
- `src/App.jsx`

Validação:
- `npm run build`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- Teste manual: Header e Footer aparecem em todas as páginas; navegação entre rotas funciona sem recarregar a página.

Demandas não previstas:
- Nenhuma demanda nova identificada neste momento.

Observações:
- Header e Footer estão com conteúdo real (nome Luxo Doce, WhatsApp e Instagram da confeitaria).
- Visual, cores e estilos serão ajustados em issues futuras.
- Imagens/ícones do Header serão adicionados quando disponíveis.

---

---

## Issue #15 - Criar página Home com hero e destaques iniciais

Status: concluída

O que foi feito:
- Seção Hero com tagline, título, subtítulo, descrição e dois botões (Ver produtos e Fazer orçamento).
- Seção de diferenciais com 4 blocos (Feito com carinho, Ingredientes selecionados, Personalizado, Encantamento).
- Seção de destaques reservada com placeholder para a issue #41.

Arquivos principais alterados:
- `src/pages/Home.jsx`

Validação:
- `npm run build`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- Teste manual: página renderiza corretamente com Header e Footer.

Demandas não previstas:
- Nenhuma demanda nova identificada neste momento.

Observações:
- Imagens do Hero e ícones dos diferenciais serão adicionados depois.
- Produtos em destaque serão exibidos na seção reservada na issue #41.

---

## Próximas issues prioritárias
Ordem recomendada imediata:
1. #16 Criar página Sobre da confeiteira
2. #16 Criar página Sobre da confeiteira
3. #17 Criar página Contato com WhatsApp e Instagram
4. #18 Criar arquivo de dados iniciais de categorias e produtos

## Próxima sequência após a #18
Depois de concluir a #18, seguir esta ordem:
1. #25 Criar componente ProductCard
2. #26 Criar seção de categoria com filtro de produtos
3. #27 Criar carrossel horizontal de produtos por categoria
4. #28 Criar painel de detalhes do produto selecionado
5. #43 Criar lista de orçamento com múltiplos produtos
6. #29 Criar botão de WhatsApp com mensagem dinâmica
7. #41 Exibir produtos em destaque na Home
8. #47 Adicionar animações sutis com Framer Motion

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
- Issue #15 - Criar página Home com hero e destaques iniciais.
