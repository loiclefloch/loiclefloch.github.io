---
title: Newsletter • Novembre 2024
date: 2024-11-26 12:45:00
category: newsletter
permalink: /newsletter/november-2024/
description: "Ce mois-ci : IA, productivity, bluesky, timezone, history"
tags:
---


## News

### Obsidian web clipper

>Highlight and capture web pages in your favorite browser. Save anything and everything with just one click.

https://obsidian.md/clipper

*Mon avis -* Un bon pas en avant pour Obsidian vers le modèle de read-it-later. Surtout avec la fermeture d'Omnivore qui laisse un vide.

*Voir aussi -* [Simple Read-later overview in Obsidian](https://geff.re/20241113073951/)

### State of JS survey

>"The JavaScript world could use a bit of classification.
>Since 2016, this survey has collected data from over 20,000 developers each year to identify current and upcoming trends.
>Together, let's find out which libraries developers want to learn next, which have the best retention ratings, and much more."

https://survey.devographics.com/fr-FR/survey/state-of-js/2024

### React router v7

>React Router v7 brings everything from Remix back to React Router. They encourage all Remix v2 users to upgrade to React Router v7.

https://remix.run/blog/react-router-v7

### Nativewind 4.1

> Version 4 of NativeWind, particularly NativeWind 4.1, is officially ready for production.

https://www.nativewind.dev/blog/announcement-nativewind-v4-1

### Expo 52

>Big release for Expo, with the new react-native architecture and many improvements

https://expo.dev/changelog/2024/11-12-sdk-52

Résumé vidéo : https://www.youtube.com/watch?v=quZv3uKSEfY

## By Octo

### Cup of dev - De RH à PO, l'histoire d'Elsa

> Interview d'Elsa et comment elle à fait sa reconversion

https://linktr.ee/CupOfDev

### Face à face avec les webs fonts

> Pour renforcer l'identité visuelle de votre site, vous devez proposer une typographie adaptée. Cela est rendue possible par la personnalisation des fonts.

https://blog.octo.com/face-a-face-avec-les-webs-fonts

### Quelles promesses pour l'IA ?

>Un résumé critique du billet de Dario Amodei, CEO d'[Anthropic](https://www.anthropic.com/) : [Machines of Loving Grace — How AI Could Transform the World for the Better](https://darioamodei.com/machines-of-loving-grace).

https://blog.octo.com/quelles-promesses-pour-l'ia


### Dans les rouages de Cline (ex Claude-dev): un Agent pour assister à coder

>Cet article explore le concept des agents alimentés par des modèles de langage (LLMs), en mettant en lumière leur fonctionnement, leurs limites et leur potentiel, à travers l’exemple de Cline, un assistant de développement intégré à VSCode. Il détaille les étapes clés de son exécution, son utilisation des outils, et son adaptabilité face aux erreurs. Un focus est également mis sur les améliorations possibles et son efficacité économique.

https://blog.octo.com/dans-les-rouages-de-cline-(ex-claude-dev)-un-agent-pour-assister-a-coder-1

*Pourquoi le lire ? -* Démystifie les concepts d'agents et de LLMs, essentiels pour comprendre les outils IA actuels. Découvrez comment intégrer efficacement un agent comme Cline dans votre flux de travail. Il expose également le fonctionnement détaillé de Cline illustre les possibilités et limites des agents autonomes. Un incontournable pour ceux qui veulent aller au-delà de la simple utilisation des IA génératives !

#### TLDR;
1. **GenAI et agents : concepts clés**  
   Les agents, comme Cline, sont des programmes autonomes intégrant des LLMs (modèles de langage) pour accomplir des tâches en utilisant des outils spécifiques.
2. **Cline, l’agent développeur**  
   Cline, un agent pour Visual Studio Code, aide les développeurs à écrire, modifier du code et exécuter des commandes de manière itérative et structurée.
3. **LLMs et outils**  
   Les LLMs raisonnent sur des données fournies, tandis que les outils (comme des APIs) permettent des actions déterministes adaptées aux besoins.
4. **Limites et gestion des erreurs**  
   Cline gère les erreurs en apprenant itérativement mais limite les échecs à trois pour éviter les boucles coûteuses et inefficaces.
5. **Un potentiel à développer**  
   Bien que prometteur, Cline est encore loin de son plein potentiel et gagnerait à intégrer davantage d’outils et de flexibilité.

### Modéliser avec du code

> De l'importance de la modélisation métier en programmation, illustrée par un extrait du livre _Domain-Driven Design_. L'auteur critique la tendance à se concentrer sur des concepts initiaux naïfs au lieu de se concentrer sur des éléments plus pertinents pour le business. Il souligne que la compréhension du modèle évolue avec le temps et les itérations, rendant crucial le travail avec des experts du domaine pour affiner la modélisation et répondre aux véritables enjeux du problème.

https://sroccaserra.fr/pages/2024-11-05_modeliser_avec_du_code.html

*Pourquoi le lire ? -* Comprendre comment une approche réfléchie et itérative de la modélisation peut aboutir à des solutions logicielles plus adaptées aux besoins réels du métier, tout en évitant de succomber à la simplicité trompeuse d'une première conception.


## Articles

### The president's doctor: Why your projects take forever

>It explores the inefficiency caused by prioritizing worker productivity over task flow. Using the analogy of a busy doctor versus the president's doctor, it highlights how waiting delays work. Emphasizing work-unit efficiency through methods like Kanban can reduce bottlenecks and boost output. Key strategies include limiting multitasking, breaking tasks into smaller units, and unblocking work quickly. By shifting focus to completing high-priority tasks, teams can deliver value faster and avoid unnecessary delays.

https://thoughtbot.com/blog/the-presidents-doctor

*Pourquoi le lire ? -* Cet article propose une nouvelle perspective sur la productivité, en utilisant des analogies pertinentes pour expliquer comment donner la priorité à l’efficacité du travail plutôt qu’à l’efficacité des travailleurs peut générer de meilleurs résultats. Il contient des conseils pratiques sur la gestion des flux de travail, l’évitement des goulots d’étranglement et l’augmentation du rendement. Si vous avez déjà eu l’impression que les progrès stagnent malgré des efforts constants, cet article est à lire absolument.

#### TLDR;
- Being busy doesn’t mean work gets done efficiently; waiting often eats up more time than active work.
- The article compares worker efficiency (e.g., doctors maximizing their schedules) with work-unit efficiency (prioritizing tasks like a president's doctor).
- Kanban systems and pull-based workflows can help minimize waiting by focusing on one task at a time.
- Waiting takes many forms, from blocked tasks to multitasking, and can cripple progress if not addressed.
- Radical focus, small work units, and rapid unblocking are key to maximizing productivity and delivering value faster.


### Building Bluesky: a Distributed Social Network (Real-World Engineering Challenges)

>Bluesky is built by around 10 engineers, and has amassed 5 million users since publicly launching in February this year. A deep dive into novel design decisions, moving off AWS, and more.

https://newsletter.pragmaticengineer.com/p/bluesky
https://bsky.app/profile/samuel.bsky.team/post/3l7z3o5kl3s2v

*Pourquoi le lire ? -* Bluesky connaît une montée fulgurante avec plus de 2,5 millions de nouvelles inscriptions dans la semaine qui a suivi l'élection américaine, et une fuite de Twitter qui s'accélère. Très intéressant de comprendre les choix techniques et comment une petite équipe à put mettre en place une plateforme supportant des millions d'utilisateurs.

### Australia/Lord_Howe is the weirdest timezone

>"Timezones are weird. But only finitely so. Here's the exact conceptual model you should have of them."

https://ssoready.com/blog/engineering/truths-programmers-timezones/

*Pourquoi le lire ? -* Démystifie les fuseaux horaires : il décompose les subtilités de l'UTC, des secondes intercalaires et des règles de fuseau horaire excentriques avec humour. Découvrez comment vos appareils gèrent ces complexités et pourquoi certains comportements horaires étranges existent.

#### TLDR;
1. **UTC and Timezones:** Coordinated Universal Time (UTC) is a modern adaptation of GMT, providing a global reference for timekeeping.
2. **Leap Seconds:** Earth’s slowing rotation causes leap seconds to sync real and computer time, but most people can ignore them thanks to tech like leap smearing.
3. **Timezone Databases:** Systems use IANA’s tzdb, containing rules and offsets for regions like Nepal (+5:45) and Greenland (-1-hour DST transitions).
4. **Complex Rules:** DST transitions vary globally; some use lunar calendars (Morocco/Gaza), and others have unique offsets like Antarctica’s 2-hour jump.
5. **Quirky Locales:** From Lord Howe’s 30-minute DST to Ball’s Pyramid stickbugs, oddities abound in timezone logic and natural wonders.


## Vidéos

### La valeur qui a changé le jeu vidéo

>La racine carrée inverse rapide est un algorithme connu grâce à son implémentation dans le code source de _Quake III Arena_ (1999). Il repose sur une combinaison de manipulations bitwise, d'approximation mathématique et d'itération.

https://www.youtube.com/watch?v=HA3bDe-thbE

*Pourquoi la regarder ? -* Vous comprendez enfin pourquoi 0.1+0.2 donne 0.30000000000000004. Permet de mieux comprendre le fonctionnement d'un ordinateur et d'en apprendre plus sur l'histoire du jeu vidéo et des techniques d'optimisation.

### Dominik Dorfmeister - React Query API Design – Lessons Learned, React Advanced 2024

>"React Query is a popular library for maintaining asynchronous state - most often state returned from data fetching. It has grown so much in popularity over the last couple of years that it is now used in almost 20% of all React applications. To some extent, this is attributed to it's ease of use and great developer experience. In this talk, React Query maintainer Dominik will walk us through some of the API design choices that were made in React Query to get to that DX. You'll hear stories about things that went well, but also about tradeoffs and mistakes that were made, and what lessons we can all learn from those."

https://www.youtube.com/watch?v=QB-S6UU5YEU

*Pourquoi la regarder ? -* Un retour d'expérience sur la difficulté du design API d'une librairie open-source, avec en exemple React Query, une librairie React incontournable.

### Silicon Fucking Valley

>En six volets, une incursion ludique et riche en anecdotes dans le cœur battant des nouvelles technologies, la Silicon Valley. Luc Julia, cocréateur du système de commande vocale Siri, y réside depuis plus de 30 ans. De l’université de Stanford aux GAFAM, il rencontre les acteurs de cet immense engrenage, et révèle les dessous, pas toujours glorieux, de celui-ci.

https://www.arte.tv/fr/videos/RC-025898/silicon-fucking-valley

## TIL

### Lift if statement refactoring

>when you see a nested condition that would be a good candidate to switch over at the top-level

https://www.linkedin.com/posts/sroccaserra_lift-if-statement-refactoring-activity-7265745263942668288-uPds/

### bcrypt hash function ignores input above a certain length

> bcrypt has a maximum length input length of 72 bytes [for most implementations](https://security.stackexchange.com/questions/39849/does-bcrypt-have-a-maximum-password-length), so you should enforce a maximum password length of 72 bytes

source: https://x.com/bcrypt/status/1852575080989257893?s=12

### Migrating apps from old mac to new

>When migrating apps from old mac to a new, the installed apps could be for  installed for the intel version. Re-install them for the ARM version

https://x.com/wesbos/status/1852518399966142789?s=12

### Java spring - Les annotations sur les méthodes appelées en interne ne fonctionnent pas.

>Spring utilise des proxy pour gérer les annotations, ils encapsulent les beans dans ce proxy pour pouvoir gérer les entrées / sorties. En interne, il ne passe pas par le proxy.

https://www.linkedin.com/feed/update/urn:li:activity:7263090867920424960/

### timezone-mock

> I am using timezone-mock to force the UTC timezone on my node application when running in local

```typescript
if (process.env.NODE_ENV === "development") {  
  void import("timezone-mock").then(({ register }) => register("UTC"))  
}
```

### Amazon Leadership Principles - Bias for Action

>"Speed matters in business. Many decisions and actions are reversible and do not need extensive study. We value calculated risk taking."

[Amazon leadership principles](https://www.amazon.jobs/content/en/our-workplace/leadership-principles)


## Books

### La vérité sur ce qui nous motive, Daniel Pink

>Qu'est-ce qui nous motive vraiment? Quand sommes-nous les plus performants et épanouis?  
>Depuis le XIXe siècle, le taylorisme et l'organisation «scientifique» du travail ont fait du principe punition/récompense le paradigme de la motivation. Daniel Pink explique pourquoi ce modèle est dépassé. Le secret de la performance, c'est le besoin profondément humain d'apprendre, de créer et de s'améliorer sans cesse.  
>Au travers d'exemples concrets empruntés au monde de l'entreprise, il décrypte les trois éléments clés de la motivation : l'autonomie, l'envie d'être bon dans ce que l'on fait et le besoin de donner un sens à sa vie. La carotte et le bâton, c'est fini!

*Pourquoi le lire ? -* On y retrouve la règles des 20% de Google, le flow, et tout ce que la psychologie peut nous en dire.


## Les projets Open source

### Sidekick

>Bare metal to production ready in mins; imagine fly.io on your VPS

https://github.com/MightyMoud/sidekick

### Maybe: The OS for your personal finances

>This startup built a personal finance + wealth management app but shut down mid-2023. They are now reviving the product as a fully open-source project.

https://github.com/maybe-finance/maybe

## En vrac

### robots.txt pour exclure les robots IA

https://github.com/ai-robots-txt/ai.robots.txt/blob/main/robots.txt

### Migration vers react-native de Shopify

https://threadreaderapp.com/thread/1853619638141071573.html

### It's Not Easy Being Green: On the Energy Efficiency of Programming Languages

https://arxiv.org/abs/2410.05460

### data-engineer-handbook

https://github.com/DataExpert-io/data-engineer-handbook

### Learn dmarc

https://www.learndmarc.com/


## Future

### Cup of dev - Numérique responsable
*2 décembre*

https://linktr.ee/CupOfDev

### Api days Paris
*3-5 décembre*

https://www.apidays.global/paris/
