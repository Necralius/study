# Apostila Professor Educação Infantil

Mini apostila online para estudos do concurso de Professor Educação Infantil da Prefeitura de Campina Grande/PB, banca IDECAN.

## Stack

- Astro
- Starlight
- TypeScript
- Markdown/MDX
- CSS customizado simples
- Sem backend e sem banco de dados

## Como rodar

```sh
npm install
npm run dev
```

O Astro exibirá a URL local no terminal, normalmente `http://localhost:4321`.

## Como editar conteúdo

Os materiais ficam em `src/content/docs`.

- Cada arquivo `.md` ou `.mdx` vira uma página.
- O título da página fica no frontmatter, em `title`.
- Use TODOs claros enquanto o conteúdo ainda não for validado.
- Não inclua conteúdo jurídico, pedagógico ou histórico sem fonte conferida.

Exemplo:

```md
---
title: Interpretação textual
description: Placeholder para resumo e questões.
---

## Objetivo

TODO: Inserir resumo validado.
```

## Navegação

A sidebar é configurada em `astro.config.mjs`. Ao criar uma nova página, adicione o link correspondente na sidebar para manter a navegação organizada.

## Deploy na Vercel

O arquivo `vercel.json` já configura:

- framework Astro;
- build com `npm run build`;
- saída em `dist`.

Na Vercel, importe o repositório e mantenha as configurações detectadas pelo projeto.
