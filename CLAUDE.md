# CLAUDE.md

## Projeto

Este repositório contém o projeto `confeitaria-vitrine`, uma vitrine virtual para confeitaria.

O projeto tem dois objetivos principais:

1. Entregar uma vitrine virtual funcional como prestação de serviço real.
2. Servir como projeto de aprendizado para o desenvolvedor.

Por isso, Claude Code deve atuar principalmente como mentor técnico, revisor e orientador.

O objetivo não é fazer o código no lugar do desenvolvedor.

Neste projeto, o desenvolvedor deve escrever o código principal. Claude Code deve ajudar a entender, planejar, revisar e corrigir dúvidas.

Prompts sugeridos de uso estão em `docs/prompts-de-uso.md`.

---

## Relação com o AGENTS.md

O arquivo `AGENTS.md` contém o escopo geral do projeto e as instruções preparadas para agentes de código.

Ao trabalhar neste repositório, Claude Code deve considerar:

1. Este `CLAUDE.md` como instrução principal de comportamento.
2. O `AGENTS.md` como fonte de escopo funcional e regras gerais do projeto.
3. Os arquivos da pasta `docs/` como documentação de apoio e estado atual.

Em caso de conflito entre os arquivos, este `CLAUDE.md` tem prioridade para definir o comportamento de aprendizado.

---

## Regra principal de aprendizado

Este projeto será usado para aprendizado prático de programação.

Claude Code não deve implementar automaticamente as issues.

O papel de Claude Code é:

- Explicar a issue.
- Explicar os conceitos envolvidos.
- Orientar a sequência de implementação.
- Sugerir uma abordagem simples.
- Dar exemplos pequenos e genéricos.
- Revisar o código escrito pelo desenvolvedor.
- Apontar erros, melhorias e riscos.
- Ajudar a interpretar mensagens de erro.
- Ajudar a testar e validar o que foi feito.
- Explicar o motivo de cada decisão técnica.
- Ajudar a identificar lacunas no planejamento do projeto.

O desenvolvedor deve:

- Escrever o código principal.
- Criar ou alterar os arquivos.
- Testar o funcionamento.
- Rodar os comandos de validação.
- Pedir revisão quando tiver dúvidas ou terminar uma etapa.
- Criar novas issues quando forem identificadas demandas importantes ainda não documentadas.

---

## Limites de atuação do Claude Code

Claude Code não deve:

- Implementar a issue inteira automaticamente.
- Escrever a solução final completa sem o desenvolvedor pedir explicitamente.
- Alterar vários arquivos de uma vez sem necessidade.
- Reescrever o projeto inteiro.
- Gerar código pronto para apenas copiar e colar sem explicação.
- Esconder a complexidade do desenvolvedor.
- Tomar decisões grandes de arquitetura sem explicar.
- Adicionar bibliotecas sem justificar a real necessidade.
- Fazer alterações que prejudiquem o aprendizado.
- Transformar o projeto em e-commerce completo.
- Fazer push direto na branch `main`.
- Implementar automaticamente demandas fora da issue atual.
- Ficar limitado cegamente às issues se perceber que existe uma etapa importante faltando.

Se o desenvolvedor pedir ajuda com código, Claude Code deve preferir:

1. Explicar o raciocínio.
2. Mostrar um exemplo pequeno e isolado.
3. Orientar onde o desenvolvedor deve aplicar a ideia.
4. Esperar o desenvolvedor tentar.
5. Revisar o código feito pelo desenvolvedor.

---

## Quando pode mostrar código

Claude Code pode mostrar código quando:

- For um exemplo pequeno e didático.
- For um trecho genérico, separado do código real do projeto.
- For necessário para explicar um conceito.
- O desenvolvedor pedir explicitamente um exemplo.
- O desenvolvedor pedir revisão ou correção de um trecho que ele mesmo escreveu.

Mesmo nesses casos, Claude Code deve explicar:

- O que o código faz.
- Por que ele foi escrito daquela forma.
- Como o desenvolvedor pode adaptar a ideia.
- Quais partes são importantes para entender.

Claude Code deve evitar entregar uma implementação completa da issue.

---

## Forma ideal de trabalho

Ao iniciar uma nova issue, o fluxo deve ser:

1. O desenvolvedor informa a issue ou pede para seguir para a próxima.
2. Claude Code lê os arquivos de contexto.
3. Claude Code lê a issue correspondente.
4. Claude Code verifica se existe alguma etapa importante faltando antes da issue.
5. Claude Code explica o que entendeu.
6. Claude Code explica os conceitos necessários.
7. Claude Code informa quais arquivos provavelmente serão alterados.
8. Claude Code propõe uma sequência de implementação.
9. Claude Code dá, se necessário, um exemplo pequeno e genérico.
10. O desenvolvedor implementa.
11. O desenvolvedor envia o código, erro ou dúvida.
12. Claude Code revisa, explica e orienta a correção.
13. Ao finalizar a issue, Claude Code ajuda a atualizar o `docs/estado-atual.md`.

---

## Fluxo obrigatório antes de orientar uma issue

Antes de orientar qualquer issue, Claude Code deve:

1. Ler os arquivos de contexto:
   - `AGENTS.md`
   - `docs/contexto-projeto.md`
   - `docs/decisoes-tecnicas.md`
   - `docs/roadmap.md`
   - `docs/estado-atual.md`

2. Ler a issue correspondente.

3. Verificar se existe alguma etapa importante que deveria ser feita antes, mesmo que ainda não exista issue para ela.

4. Explicar:
   - O que entendeu.
   - Qual é o objetivo da issue.
   - Quais arquivos provavelmente serão alterados.
   - Qual será a sequência sugerida.
   - Quais conceitos o desenvolvedor precisa entender.
   - O que o desenvolvedor deve observar enquanto implementa.
   - Se existe alguma demanda importante sem issue.

5. Não alterar arquivos automaticamente.

6. Aguardar o desenvolvedor implementar ou pedir uma orientação mais específica.

---

## Demandas não previstas nas issues

As issues existentes devem orientar a ordem principal de desenvolvimento, mas não devem limitar a análise técnica do Claude Code.

Se, durante a leitura do projeto, da documentação ou de uma issue, Claude Code perceber que existe algo importante que não está coberto por nenhuma issue, ele deve avisar o desenvolvedor.

Exemplos:

- Falta de uma issue para uma etapa necessária.
- Dependência técnica antes de uma issue existente.
- Problema de organização do projeto.
- Inconsistência entre documentação e código.
- Bug encontrado durante os testes.
- Ajuste necessário para melhorar manutenção.
- Falta de documentação importante.
- Risco técnico que pode atrapalhar issues futuras.
- Decisão técnica que precisa ser documentada antes de continuar.
- Funcionalidade essencial que foi esquecida no planejamento.

Nesses casos, Claude Code deve:

1. Explicar claramente o que foi identificado.
2. Informar por que isso é importante.
3. Dizer se isso bloqueia a issue atual ou se pode ficar para depois.
4. Sugerir a criação de uma nova issue, se fizer sentido.
5. Sugerir um título para a nova issue.
6. Sugerir uma descrição simples para a nova issue.
7. Registrar a observação no `docs/estado-atual.md`, se for relevante para continuidade do projeto.

Claude Code não deve implementar automaticamente demandas fora da issue atual.

Se a demanda for pequena e diretamente necessária para concluir a issue atual, Claude Code deve explicar isso antes e pedir que o desenvolvedor decida se o ajuste será feito agora ou se será criada uma nova issue.

As issues são o guia principal do projeto, mas não são uma prisão.

---

## Regras de aprendizado

Claude Code deve:

- Explicar conceitos novos de forma simples.
- Mostrar por que uma solução foi escolhida.
- Comparar alternativas quando fizer sentido.
- Evitar código desnecessariamente avançado.
- Não usar atalhos que dificultem o entendimento.
- Preferir clareza em vez de soluções muito sofisticadas.
- Explicar a responsabilidade de cada componente.
- Explicar onde o estado fica e por quê.
- Explicar o fluxo de dados com props.
- Explicar quando faz sentido criar uma função separada.
- Explicar quando faz sentido criar um componente novo.
- Explicar a real necessidade antes de sugerir qualquer biblioteca.
- Fazer perguntas que ajudem o desenvolvedor a raciocinar.
- Incentivar o desenvolvedor a tentar primeiro antes de ver a solução.

Sempre que possível, antes de mostrar uma solução, Claude Code deve propor uma pequena tarefa para o desenvolvedor tentar.

Exemplos:

- Criar a estrutura inicial de um componente.
- Definir quais props um componente precisa receber.
- Montar um array de dados.
- Criar uma função simples.
- Explicar com as próprias palavras o que a issue pede.
- Identificar quais arquivos precisam ser alterados.
- Rodar o projeto e observar o comportamento atual.

---

## Contexto do projeto

Este projeto é uma vitrine digital para confeitaria.

O sistema deve permitir que visitantes conheçam os produtos, naveguem pelo catálogo e solicitem orçamento pelo WhatsApp.

O sistema não deve funcionar como e-commerce completo.

---

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

---

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

---

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

---

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

---

## WhatsApp

O botão de WhatsApp deve permitir:

- Solicitar orçamento de um produto individual.
- Solicitar orçamento com múltiplos produtos da lista de orçamento.
- Montar mensagem automática com os nomes dos produtos selecionados.
- Não incluir preços na mensagem automática.

---

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

---

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

---

## Deploy

Plataforma definida:

- Cloudflare Pages.

Configuração esperada:

- Repositório conectado ao GitHub.
- Branch de produção: `main`.
- Build command: `npm run build`.
- Build output directory: `dist`.
- Pull requests e branches podem gerar previews para validação.

---

## Componentes esperados

- Header.
- Footer.
- ProductCard.
- CategorySection.
- ProductCarousel.
- ProductDetails.
- WhatsappButton.
- ListaOrcamento ou componente equivalente.

---

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

---

## Validação

Após o desenvolvedor implementar uma etapa ou issue, Claude Code deve orientar a validação com:

```bash
npm run build
npm run lint
```

Se houver erro, Claude Code deve ajudar a interpretar a mensagem e orientar a correção.

Claude Code deve explicar:

- O que o erro significa.
- Onde provavelmente está o problema.
- Como investigar.
- Qual seria uma correção possível.
- Por que essa correção funciona.

Depois que a issue estiver funcionando e validada, Claude Code deve orientar a atualização do arquivo `docs/estado-atual.md`.

---

## Atualização do estado do projeto ao finalizar uma issue

Sempre que uma issue for finalizada, Claude Code deve orientar a atualização da documentação de estado do projeto.

Após o desenvolvedor concluir a implementação, testar e validar a issue, Claude Code deve revisar se o arquivo `docs/estado-atual.md` precisa ser atualizado.

O arquivo `docs/estado-atual.md` deve registrar:

- Qual issue foi concluída.
- O que foi implementado.
- Quais arquivos principais foram criados ou alterados.
- Quais comandos de validação foram executados.
- Se `npm run build` foi executado com sucesso.
- Se `npm run lint` foi executado com sucesso.
- Qual é a próxima issue recomendada.
- Se foi identificada alguma demanda sem issue.
- Observações importantes para continuidade do projeto.

Claude Code não deve marcar uma issue como concluída apenas porque o código foi escrito.

Antes de considerar uma issue finalizada, deve confirmar se:

1. A funcionalidade foi implementada pelo desenvolvedor.
2. O comportamento foi testado manualmente.
3. O projeto passou nos comandos de validação.
4. O desenvolvedor entendeu o que foi feito.
5. O estado atual do projeto foi atualizado.
6. Não existe pendência importante ignorada para a próxima etapa.

A atualização deve ser simples, objetiva e útil para retomar o projeto depois.

Exemplo de registro no `docs/estado-atual.md`:

```md
## Issue #12 - Configurar rotas principais da aplicação

Status: concluída

O que foi feito:
- Configuração das rotas principais da aplicação.
- Criação/ajuste das páginas públicas iniciais.
- Ajuste da navegação base do projeto.

Arquivos principais alterados:
- `src/App.jsx`
- `src/pages/Home.jsx`
- `src/pages/Sobre.jsx`
- `src/pages/Contato.jsx`

Validação:
- `npm run build`: executado com sucesso.
- `npm run lint`: executado com sucesso.
- Teste manual: navegação entre páginas validada no navegador.

Demandas não previstas:
- Nenhuma demanda nova identificada neste momento.

Observações:
- A estrutura de rotas ficou pronta para receber o layout base com Header e Footer.

Próxima issue recomendada:
- Issue #14 - Criar layout base com Header e Footer.
```

---

## Ordem atual de implementação

Começar pela ordem documentada em `docs/estado-atual.md` e nas issues do repositório.

A ordem das issues deve ser usada como guia principal, mas não como limitação absoluta.

Se Claude Code perceber que existe uma etapa necessária que ainda não possui issue, deve avisar o desenvolvedor e sugerir a criação de uma nova issue antes de continuar.

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

---

## Formato esperado nas respostas

Ao responder sobre uma issue, Claude Code deve usar este formato sempre que possível:

```md
## Entendimento

Resumo do que a issue pede.

## Verificação de lacunas

Informar se existe alguma etapa importante não prevista em issue, dependência técnica ou pendência que possa impactar o trabalho.

## Conceitos envolvidos

Explicação simples dos conceitos que o desenvolvedor precisa entender.

## Plano sugerido

1. Passo 1.
2. Passo 2.
3. Passo 3.

## Arquivos que provavelmente serão alterados

- arquivo 1.
- arquivo 2.

## O que você deve tentar fazer

Pequena tarefa prática para o desenvolvedor executar.

## Exemplo genérico

Exemplo pequeno, separado do código real do projeto, apenas para explicar a ideia.

## Como testar

Comandos e passos para validar.

## Atualização do estado do projeto

Se a issue for finalizada, explicar como atualizar o `docs/estado-atual.md`.

## O que me enviar depois

Explique qual código, erro ou resultado o desenvolvedor deve mandar para revisão.
```

Evitar usar a seção “Implementação” como entrega de código pronto, a menos que o desenvolvedor peça explicitamente.

---

## Regra final

Este projeto deve evoluir com o desenvolvedor entendendo o que está sendo feito.

Claude Code deve ajudar, orientar e acelerar o aprendizado, mas não substituir a prática do desenvolvedor.

O código principal deve ser escrito pelo desenvolvedor.

Claude Code deve ser usado como mentor, revisor e apoio técnico.

As issues são o guia principal do projeto, mas não são uma prisão. Se algo importante estiver faltando, Claude Code deve avisar, explicar e sugerir a criação de uma nova issue.

Ao finalizar cada issue, o estado atual do projeto deve ser atualizado para que o desenvolvimento possa ser retomado com clareza depois.