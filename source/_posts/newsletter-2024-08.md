---
title: Newsletter • Août 2024
date: 2024-09-01 08:45:00
permalink: /newsletter/august-2024/
category: newsletter
description: "Ce mois-ci : Architecture, Postgres, React, Creativity Inc."
tags:
---

## Les articles

### Overengineering in Onion/Hexagonal Architectures – Victor Rentea

> This article critiques the over-application of complex software architectures highlighting how adhering too rigidly to these patterns can lead to overengineering. It offers pragmatic simplifications to avoid unnecessary complexity while preserving essential design principles

https://victorrentea.ro/blog/overengineering-in-onion-hexagonal-architectures/

#### TLDR;

Over-reliance on complex architectures like Clean, Onion, and Hexagonal can lead to unnecessary overengineering. The article argues for simplifying these architectures by avoiding redundant interfaces unless multiple implementations exist or dependency inversion is needed. It suggests relaxing strict layer hierarchies to reduce boilerplate code, merging simple REST controllers with application services to avoid unnecessary middle layers, and being mindful of over-mocking in tests. Additionally, it advises against separating application and REST DTOs unless multiple channels require it, and recommends integrating domain models directly with persistence layers, provided the team is well-versed in ORM. Finally, it highlights the importance of tailoring architectural decisions to the specific complexity of the project rather than adhering rigidly to theoretical patterns.

*Pourquoi le lire ? -* Apprendre à éviter les pièges du over-engineering. Il est intéressant de vouloir simplifier les modèles d'architecture. L'article apporte des conseils pratiques, pragmatiques appliqués au monde réel. Les conseils m'ont paru censés, même si je ne suis pas vraiment d'accord avec la partie sur les DTOs.

*Pour approfondir -* [En vidéo - Feature Slicing and Modular Monolith.](https://www.youtube.com/watch?v=H7HWOlANX78)

### Postgres as a search engine

>Build a retrieval system with semantic, full-text, and fuzzy search in Postgres.

https://anyblockers.com/posts/postgres-as-a-search-engine

*Pourquoi le lire ? -* Dans la [newsletter de Juillet]](/newsletter/july-2024), l'article "Just use Postgres for everything" était plutôt high level. On rentre ici un peu plus dans le détail d'une possibilité de Postgres : la recherche

### Implementing react from scratch

> Build a basic version of React from scratch to understand how React internals behaves. Focus is on replicating React's core features, such as the render model, consistent output, essential hooks (like useState and useEffect), and precise DOM updates. The goal is to offer insight into the motivations behind React's interface design by understanding how the internals could be implemented.

https://www.rob.directory/blog/react-from-scratch

*Pourquoi le lire ? -* Un deep-dive dans le "pourquoi" des choix de conception de React.

## Les livres

### Creativity, Inc.: Overcoming the Unseen Forces That Stand in the Way of True Inspiration

> From a co-founder of Pixar Animation Studios comes an incisive book about creativity in business and leadership.
> Creativity, Inc. is a manual for anyone who strives for originality and the first-ever, all-access trip into the nerve center of Pixar Animation—into the meetings, postmortems, and “Braintrust” sessions where some of the most successful films in history are made. It is, at heart, a book about creativity—but it is also, as Pixar co-founder and president Ed Catmull writes, “an expression of the ideas that I believe make the best in us possible.”

*Pourquoi le lire ? -* Une de mes lectures préférées, je le relis régulièrement, et cet été n'as pas fait exception. Non seulement on y découvre Pixar mais également comment la créativité y est managée. Un must-read pour moi.

*Et sinon*
- [Un TLDR](https://medium.com/@aidanhornsby/creativity-inc-632fbfcbaad9)
- [Un TLDR plus en longeur](https://rahulvigneshsekar.medium.com/creativity-inc-book-notes-1-1f90289806ab)

### Système 1 / Système 2 : Les deux vitesses de la pensée (Thinking, Fast and Slow)

> Traduction du best seller Thinking, Fast and Slow
> La thèse centrale du livre est la dichotomie entre deux modes de pensée : le système 1 (rapide, instinctif et émotionnel) et le système 2 (plus lent, plus réfléchi et plus logique). Le livre définit les biais cognitifs associés à chacun de ces modes de pensée

[L'article wikipedia](https://www.wikiwand.com/fr/articles/Thinking,_Fast_and_Slow) résume bien les idées du livre.
*Tip -* [Wikiwand addon pour une meilleure UI Wikipedia](https://chromewebstore.google.com/detail/wikiwand-knowledge-with-c/emffkefkbkpkgpdeeooapgaicgmcbolj)

*Pourquoi le lire ? -* Il permet de mieux comprendre le fonctionnement de notre pensée et les biais cognitifs qui en découlent.

#### TLDR;
Le système 1 est le système de raisonnement utilisé par défaut, car il est le moins coûteux en énergie. C'est également lui qui est à l'origine de la créativité, grâce aux multiples associations intuitives qu'il effectue. C'est par exemple grâce à lui que les individus sont capables de reconnaître la colère de manière immédiate sur le visage d'une personne.

Le système 2 lui intervient dans la résolution de problèmes complexes, grâce à son approche plutôt analytique. Il est toutefois plus lent que le système 1 et intervient lorsque le système 1 est confronté à un problème nouveau auquel il ne sait pas répondre.


## TIL

### Vs code configuration - ouvrir vscode en full screen

```json
{
  "window.newWindowDimensions": "maximized"
}
```

Source: https://x.com/JohnPhamous/status/1824132705728205096

### Vs code configuration - une couleur par project

Il arrive qu'on ai beaucoup de fenêtres vs code ouvertes en même temps. J'ai redécouvert cette technique qui permet de configurer vs code par projet, en changeant par exemple la couleur du header.

- Cmd + Maj + P - "workspace settings json"
- Ajouter la configuration:

```json
{
  "workbench.colorCustomizations": { 
    "titleBar.activeBackground": "#ec4899" 
  }
}
```

Source: https://x.com/akaasten/status/1826521727368589512

### PostgreSQL Materialized Views

Allow us to construct a data view from a costly query that is computed only upon its creation and then only when and if we issue an explicit command to refresh it.

- you need to manually refresh them, it's your responsibility
- they take space on the disk, in the same way regular tables do

Source: https://x.com/BinaryIgor/status/1824483624244351437


### ts-arch

> It's a library for checking architecture conventions in TypeScript&JavaScript projects using any test framework. You check dependencies between files, folders and slices, check for cyclic dependencies and more. It's similar to ArchUnit but for TS/JS projects.

En Java nous avons les modules maven qui peuvent être indépendant et configurés pour n'accéder qu'à certains autres modules. En node, ca n'existe pas. Je cherchais une solution de ce type en node depuis un moment me permettant de valider que l'on respecte les différentes conventions et dépendances entre les différents modules.

Source: L'article "Micro-frontend : un exemple d'implémentation" décris plus haut

