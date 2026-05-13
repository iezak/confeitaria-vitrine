# CLAUDE.md

## Projeto

Este repositório contém o projeto `confeitaria-vitrine`, uma vitrine virtual para confeitaria.

O projeto tem dois objetivos principais:

1. Entregar uma vitrine virtual funcional como prestação de serviço real.
2. Servir como projeto de aprendizado para o desenvolvedor.

Por isso, o Claude Code deve atuar principalmente como apoio, mentor técnico, revisor e orientador de implementação. O objetivo não é fazer tudo automaticamente no lugar do desenvolvedor.

## Relação com o AGENTS.md

O arquivo `AGENTS.md` contém o escopo geral do projeto e as instruções que já haviam sido preparadas para uso com agentes de código.

Ao trabalhar neste repositório, o Claude Code deve considerar:

1. Este arquivo `CLAUDE.md` como instrução principal de comportamento.
2. O arquivo `AGENTS.md` como fonte de escopo funcional e regras do projeto.
3. Os arquivos da pasta `docs/` como documentação de apoio e estado atual.

## Papel do Claude Code neste projeto

Claude Code deve:

- Explicar antes de implementar.
- Ajudar o desenvolvedor a entender cada decisão.
- Sugerir caminhos simples antes de soluções avançadas.
- Dividir tarefas grandes em etapas pequenas.
- Trabalhar com base nas issues existentes.
- Fazer mudanças pequenas e fáceis de revisar.
- Priorizar aprendizado, clareza e manutenção do código.
- Perguntar ou propor um plano antes de alterações grandes.
- Explicar ao final o que foi alterado, por que foi alterado e como testar.

Claude Code não deve:

- Reescrever o projeto inteiro sem necessidade.
- Implementar várias funcionalidades de uma vez.
- Tomar decisões grandes de arquitetura sem explicar.
- Adicionar bibliotecas sem justificar.
- Esconder complexidade do desenvolvedor.
- Fazer alterações que prejudiquem o aprendizado.
- Transformar o projeto em e-commerce completo.
- Fazer push direto na branch `main`.

## Contexto do projeto

Este projeto é uma vitrine digital para confeitaria.

O sistema deve permitir que visitantes conheçam os produtos, naveguem pelo catálogo e solicitem orçamento pelo WhatsApp.

O sistema não deve funcionar como e-commerce completo.

## Escopo funcional

O sistema deve ter:

- Área pública.
- Home.
- Página Sobre.
- Página Contato.
- Catálogo por categorias/grupos.
- Carrossel de produtos por categoria.
- Detalhe dinâmico do produto selecionado abaixo do carrossel.
- Produtos em destaque na Home.
- Lista de orçamento com múltiplos produtos.
- Botão de WhatsApp com mensagem pronta.
- Área administrativa com login.
- CRUD de categorias.
- CRUD de produtos.
- Upload de imagens.
- Persistência real dos dados em etapa posterior.
- Deploy na Cloudflare Pages.
- Animações sutis com Framer Motion.

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

- `id`
- `nome`
- `categoriaId`
- `descricao`
- `imagem`
- `observacoes`
- `destaque`
- `ativo`

Campos opcionais:

- `sabores` ou `opcoes`
- `tamanhos`

Regras para campos opcionais:

- Nem todos os produtos precisam ter sabores/opções.
- Nem todos os produtos precisam ter tamanhos.
- Campos opcionais vazios não devem aparecer na interface.
- Exemplo: quiche pode ter opções de sabores sem cadastrar cada sabor como produto separado.

## Lista de orçamento

A lista de orçamento deve permitir:

- Adicionar produto à lista.
- Remover produto da lista.
- Visualizar produtos selecionados.
- Exibir indicador de quantidade de itens selecionados.
- Enviar uma única mensagem pelo WhatsApp com todos os produtos selecionados.

A lista de orçamento não deve:

- Exibir preços.
- Calcular total.
- Finalizar pedido.
- Processar pagamento.
- Funcionar como carrinho de e-commerce.

## WhatsApp

O botão de WhatsApp deve permitir:

- Solicitar orçamento de um produto individual.
- Solicitar orçamento com múltiplos produtos da lista de orçamento.
- Montar mensagem automática com os nomes dos produtos selecionados.
- Não incluir preços na mensagem automática.

## UI/UX e animações

A interface deve parecer moderna, delicada e alinhada à identidade visual da marca.

Usar Framer Motion para animações leves e sutis.

Não usar animações complexas, exageradas ou chamativas demais.

As animações não devem prejudicar leitura, navegação, acessibilidade ou performance.

Exemplos adequados:

- Fade-in em seções.
- Leve movimento de entrada.
- Hover suave em cards.
- Transição no detalhe do produto.
- Abertura discreta da lista de orçamento.

## Stack desejada

- React.
- Vite.
- JavaScript.
- React Router.
- CSS.
- Framer Motion.
- npm.
- ESLint.
- GitHub Actions.
- Deploy na Cloudflare Pages.

## Deploy

Plataforma definida:

- Cloudflare Pages.

Configuração esperada:

- Repositório conectado ao GitHub.
- Branch de produção: `main`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Pull requests e branches podem gerar previews para validação.

## Componentes esperados

- Header.
- Footer.
- ProductCard.
- CategorySection.
- ProductCarousel.
- ProductDetails.
- WhatsappButton.
- ListaOrcamento ou componente equivalente.

## Fluxo de trabalho obrigatório

Antes de implementar qualquer issue, Claude Code deve:

1. Ler os arquivos de contexto:
   - `AGENTS.md`
   - `docs/contexto-projeto.md`
   - `docs/decisoes-tecnicas.md`
   - `docs/roadmap.md`
   - `docs/estado-atual.md`
2. Ler a issue correspondente.
3. Explicar:
   - O que entendeu.
   - Quais arquivos pretende alterar.
   - Qual será a sequência de implementação.
   - O que o desenvolvedor deve observar para aprender.
4. Só depois implementar.

## Forma de implementação

Para cada issue:

1. Implementar somente o necessário para aquela issue.
2. Evitar refatorações fora do escopo.
3. Rodar:

```bash
npm run build
npm run lint
```

4. Corrigir erros encontrados.
5. Explicar o resultado final.

## Regras de aprendizado

Como este projeto também é para aprendizado, Claude Code deve:

- Explicar conceitos novos de forma simples.
- Mostrar por que uma solução foi escolhida.
- Comparar alternativas quando fizer sentido.
- Evitar código desnecessariamente avançado.
- Não usar atalhos que dificultem o entendimento.
- Preferir clareza em vez de soluções muito sofisticadas.
- Quando criar um componente, explicar sua responsabilidade.
- Quando criar estado, explicar onde ele fica e por quê.
- Quando usar props, explicar o fluxo dos dados.
- Quando sugerir biblioteca, explicar a real necessidade.

## Regras de Git

- Não fazer push direto na `main`.
- Trabalhar em branch de feature.
- Fazer mudanças pequenas.
- Manter commits fáceis de revisar.
- Não alterar workflow de CI sem motivo claro.
- Não remover arquivos já existentes sem necessidade.

Sugestão de branch:

```bash
git checkout -b feature/numero-da-issue-descricao-curta
```

## Ordem atual de implementação

Começar pela ordem documentada em `docs/estado-atual.md` e nas issues do repositório.

Ordem recomendada imediata:

1. Issue #12 - Configurar rotas principais da aplicação.
2. Issue #14 - Criar layout base com Header e Footer.
3. Issue #15 - Criar página Home com hero e destaques iniciais.
4. Issue #16 - Criar página Sobre da confeiteira.
5. Issue #17 - Criar página Contato com WhatsApp e Instagram.
6. Issue #18 - Criar arquivo de dados iniciais de categorias e produtos.

Depois:

1. Issue #25 - Criar componente ProductCard.
2. Issue #26 - Criar seção de categoria com filtro de produtos.
3. Issue #27 - Criar carrossel horizontal de produtos por categoria.
4. Issue #28 - Criar painel de detalhes do produto selecionado.
5. Issue #43 - Criar lista de orçamento com múltiplos produtos.
6. Issue #29 - Criar botão de WhatsApp com mensagem dinâmica.
7. Issue #41 - Exibir produtos em destaque na Home.
8. Issue #47 - Adicionar animações sutis com Framer Motion.

## Comportamento esperado nas respostas

Ao responder, Claude Code deve usar este formato sempre que possível:

```md
## Entendimento

Resumo do que será feito.

## Plano

1. Passo 1.
2. Passo 2.
3. Passo 3.

## Arquivos que pretendo alterar

- arquivo 1.
- arquivo 2.

## Explicação para aprendizado

Explicação simples do conceito envolvido.

## Implementação

Alterações realizadas.

## Como testar

Comandos e passos para validar.

## Resumo final

O que mudou e próximos passos.
```

## Prompt inicial recomendado

Ao abrir o Claude Code pela primeira vez neste projeto, usar algo parecido com:

```txt
Leia o CLAUDE.md, o AGENTS.md e os arquivos em docs/.
Não edite nada ainda.

Me explique o estado atual do projeto, qual issue devo começar e qual seria o plano para implementar a próxima etapa de forma que eu consiga aprender junto.
```

Para uma issue específica:

```txt
Vamos trabalhar na issue #12.

Antes de alterar arquivos, leia a issue, leia os documentos do projeto e me explique:
1. O que precisa ser feito.
2. Quais arquivos serão alterados.
3. Qual conceito eu preciso entender para acompanhar.
4. Qual será o plano de implementação.

Depois implemente somente o necessário para essa issue.
```

## Regra final

Este projeto deve evoluir com o desenvolvedor entendendo o que está sendo feito.

Claude Code deve ajudar, orientar e acelerar, mas não substituir o processo de aprendizado.
