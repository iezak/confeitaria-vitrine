# Prompts de uso com Claude Code

Este arquivo contém prompts sugeridos para usar durante o desenvolvimento do projeto `confeitaria-vitrine`.

O objetivo é manter o `CLAUDE.md` focado em regras de comportamento e deixar aqui os exemplos de prompts que o desenvolvedor pode copiar, adaptar e usar.

---

## Prompt inicial recomendado

Use este prompt ao abrir o Claude Code pela primeira vez no projeto:

```txt
Leia o CLAUDE.md, o AGENTS.md e os arquivos em docs/.

Não edite nada e não implemente nada ainda.

Me explique o estado atual do projeto, qual issue devo começar e qual seria o plano para implementar a próxima etapa de forma que eu consiga aprender junto.

Também verifique se existe alguma etapa importante que ainda não possui issue.

Lembre-se: eu quero escrever o código principal. Você deve atuar como mentor, explicando, orientando e revisando.
```

---

## Prompt para uma issue específica

Use este prompt quando quiser trabalhar em uma issue específica:

```txt
Vamos trabalhar na issue #12.

Não implemente nada no projeto.

Antes de qualquer alteração, leia a issue e os documentos do projeto, depois me explique:

1. O que precisa ser feito.
2. Se existe alguma etapa importante faltando antes dessa issue.
3. Quais arquivos provavelmente serão alterados.
4. Quais conceitos eu preciso entender para acompanhar.
5. Qual será o plano de implementação.
6. Qual pequena parte eu posso tentar fazer primeiro.
7. Se necessário, me dê um exemplo genérico, mas não a solução final.

Se existir alguma demanda importante sem issue, não implemente nada. Apenas me explique e sugira uma nova issue.

Depois eu vou tentar implementar e te mando o código para revisão.
```

Troque `#12` pelo número da issue que você quer trabalhar.

---

## Prompt para próxima issue

Use este prompt quando quiser continuar pela ordem natural do projeto:

```txt
Vamos para a próxima issue.

Não implemente nada ainda.

Leia o contexto do projeto, veja qual é a próxima issue recomendada e me explique:

1. Qual é a issue.
2. O que ela pede.
3. Por que ela vem agora na ordem do projeto.
4. Se existe alguma etapa importante que deveria ser feita antes, mesmo que eu tenha esquecido de criar uma issue para ela.
5. Quais arquivos eu provavelmente vou precisar alterar.
6. Quais conceitos preciso entender.
7. Qual seria a sequência para eu implementar sozinho.
8. Qual primeira parte você recomenda que eu tente fazer.

Se existir alguma demanda sem issue, não implemente nada. Apenas me explique e sugira uma nova issue.

Se precisar mostrar código, use apenas exemplos pequenos e genéricos.
```

---

## Prompt para revisão de código

Use este prompt depois que você implementar uma parte:

```txt
Implementei esta parte.

Revise meu código como mentor.

Quero que você:
1. Aponte erros reais.
2. Explique o motivo dos erros.
3. Sugira melhorias simples.
4. Evite reescrever tudo.
5. Não entregue uma solução completa se não for necessário.
6. Me ajude a entender o que preciso corrigir.
7. Verifique se apareceu alguma demanda importante que deveria virar uma nova issue.
8. Se a issue estiver finalizada, me ajude a atualizar o docs/estado-atual.md.
```

---

## Prompt para erro no terminal

Use este prompt quando aparecer erro no terminal:

```txt
Apareceu este erro no terminal.

Me explique:
1. O que esse erro significa.
2. Qual é a causa mais provável.
3. Como posso investigar.
4. Qual parte do código devo revisar primeiro.
5. Como corrigir sem simplesmente copiar uma solução pronta.

Erro:

Cole o erro aqui.
```

---

## Prompt para finalizar uma issue

Use este prompt quando você acreditar que terminou uma issue:

```txt
Acredito que finalizei esta issue.

Revise se ela pode ser considerada concluída.

Verifique:
1. Se o objetivo da issue foi atendido.
2. Se faltou algum teste manual.
3. Se preciso rodar ou repetir `npm run build`.
4. Se preciso rodar ou repetir `npm run lint`.
5. Se o código está simples e coerente com o projeto.
6. Se surgiu alguma demanda importante que deveria virar nova issue.
7. Se o docs/estado-atual.md precisa ser atualizado.
8. Qual deve ser a próxima issue recomendada.

Não faça alterações automaticamente. Me oriente no que eu devo ajustar.
```

---

## Prompt para criar uma nova issue

Use este prompt quando Claude Code identificar algo importante que não está em nenhuma issue:

```txt
Foi identificada uma demanda importante que ainda não possui issue.

Não implemente nada ainda.

Me ajude a transformar isso em uma issue simples, com:
1. Título.
2. Objetivo.
3. Motivo da issue.
4. Critérios de aceite.
5. Arquivos que provavelmente serão afetados.
6. Ordem recomendada em relação às issues existentes.
```

---

## Prompt para entender um conceito

Use este prompt quando aparecer um conceito novo:

```txt
Me explique esse conceito de forma simples, pensando que estou aprendendo programação.

Quero entender:
1. Para que serve.
2. Onde aparece neste projeto.
3. Um exemplo pequeno e genérico.
4. O erro mais comum de iniciante.
5. Como eu sei que usei corretamente.

Conceito:

Escreva o conceito aqui.
```

---

## Prompt para pedir exemplo sem solução final

Use este prompt quando quiser um exemplo, mas sem receber a resposta pronta da issue:

```txt
Me dê um exemplo pequeno e genérico desse conceito.

Não use o código real do projeto.

Quero apenas entender a ideia para depois aplicar sozinho.
```

---

## Prompt para atualizar o estado atual

Use este prompt depois que a issue estiver validada:

```txt
A issue foi finalizada e validada.

Me ajude a escrever a atualização do docs/estado-atual.md com:

1. Issue concluída.
2. O que foi feito.
3. Arquivos principais alterados.
4. Validações executadas.
5. Teste manual realizado.
6. Demandas não previstas identificadas.
7. Observações importantes.
8. Próxima issue recomendada.

Não edite automaticamente. Apenas me passe o trecho sugerido.
```