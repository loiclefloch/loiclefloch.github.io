---
title: Newsletter Juillet 2024
date: 2024-08-01 10:45:18
---

## Les news

- [Shadcn charts](https://ui.shadcn.com/charts) Built using Recharts. Copy and paste into your apps. Open Source.
- [Remix - fog of war](https://remix.run/blog/fog-of-war)
- [Expo is now the recommended approach to create new apps.](https://reactnative.dev/blog/2024/06/25/use-a-framework-to-build-react-native-apps)

## Les articles

### A Git story: Not so fun this time

> Discover the history of GIT

<https://blog.brachiosoft.com/en/posts/git/>

_Pourquoi le lire ?_ Git est un incontournable pour les devs, très intéressant d'en comprendre sa genèse.

### Use A Work Journal To Recover Focus Faster And Clarify Your Thoughts

> Developed effective strategies to enhance focus and productivity, even when handling complex tasks and frequent interruptions.

<https://fev.al/posts/work-journal>

_Pourquoi le lire ?_ Une aide à l'organisation, mixe de TIL (today I learned), canard en plastique, post mortem et bullet journal

#### TLDR

Struggling to maintain focus amidst frequent interruptions, the author discovered that writing detailed notes on his tasks helped regain context and improve productivity. By documenting commands, results, and thoughts, he could quickly get back on track after disruptions. This simple practice of note-taking and reviewing transformed his ability to handle complex and poorly documented tasks efficiently.

### Microservices Pattern: Distributed Transactions (SAGA)

> How to use SAGA pattern in a microservices architecture

<https://medium.com/@joudwawad/microservices-pattern-distributed-transactions-saga-92b5e933cea1>

_Pourquoi le lire ?_ J'ai trouvé que c'était une bonne introduction à SAGA

#### TLDR

In microservice architecture, distributed transactions ensure data consistency across multiple services. Traditional approaches use distributed transactions, but the SAGA pattern offers an alternative by defining a sequence of local transactions that update individual services. Each service publishes a message after a transaction, triggering the next step in the SAGA.

SAGAs use compensating transactions to undo changes if a step fails. There are two main coordination strategies for SAGAs: choreography, where participants subscribe to each other's events, and orchestration, where a central orchestrator directs actions. Choreography benefits from simplicity and loose coupling but can be hard to understand and may create cyclic dependencies. Orchestration simplifies dependencies and improves separation of concerns but risks centralizing too much logic.

A key challenge is the lack of isolation, causing anomalies like lost updates and dirty reads. Countermeasures include semantic locks, commutative updates, and application-level isolation. SAGAs ensure atomicity, consistency, and durability (ACD), despite lacking traditional transaction isolation.

## Just use postgres for everything

> Postgres can replace—up to millions of users—many backend technologies, Kafka, RabbitMQ, Mongo and Redis among them.

<https://www.amazingcto.com/postgres-for-everything/>

_Pourquoi le lire ?_ Postgres for the win. Ou comment on peut utiliser Postgres plutôt que d'utiliser plein de technologies différentes.

#### Related links

- [You Don't Need a Dedicated Cache Service - PostgreSQL as a Cache](https://martinheinz.dev/blog/105)

#### TLDR

The idea of "Use Postgres for everything" proposes that PostgreSQL can replace several specialized technologies, offering a unified solution for various backend needs. By leveraging PostgreSQL's extensive features, startups can simplify their tech stack, reduce complexity, and expedite development. This approach suggests that using PostgreSQL can replace systems like Kafka, RabbitMQ, MongoDB, and Redis, making application development, scaling, and operation more straightforward.

### Ten Years and Counting: My Affair with Microservices

> The author celebrates ten years at Allegro, coinciding with a decade of using microservices, detailing the transformative journey of Project Rubicon.

<https://blog.allegro.tech/2024/04/ten-years-microservices.html>

_Pourquoi le lire ?_ Un retour éclairé sur l'utilisation des microservices

#### TLDR

Allegro, a leading e-commerce platform in Central Europe, faced significant development bottlenecks with their monolithic PHP system by 2013. Project Rubicon began as an ambitious overhaul to address these issues by adopting microservices, Agile methodologies, TDD, Java, and cloud deployment. Key milestones included restructuring their architecture, intense hiring, and continuous learning. Transition challenges included database refactoring, cloud migration, and performance tuning. The shift enabled flexibility, team autonomy, and experimenting with various languages and technologies. Investments in infrastructure and tools, like service mesh and monitoring systems, were crucial. The project emphasized quality, learning, and adaptability, ultimately ensuring Allegro's growth and efficiency.

### The biggest-ever global outage: lessons for software engineers

> Cybersecurity vendor CrowdStrike shipped a routine rule definition change to all customers, and chaos followed as 8.5M machines crashed, worldwide. There are plenty of learnings for developers.

<https://newsletter.pragmaticengineer.com/p/the-biggest-ever-global-outage-lessons>

_Pourquoi le lire ?_ On a tous entendu parlé de la pane CrowdStrike. L'occasion d'en tirer quelques leçons

## Les livres

### Head First Software Architecture, By Raju Gandhi, Mark Richards, Neal Ford

> From the authors of Fundamentals of Software Architecture, _Head First Software Architecture_ teaches you how to think architecturally and explores the unique challenges of software architecture.

- [Lien O'Reilly](https://learning.oreilly.com/library/view/head-first-software/9781098134341/)

_Pourquoi le lire_: bien fait, avec beaucoup d'exemples, de visuels et d'exercices pour bien comprendre les notions

**Bon à savoir**: Je peux partager mes highlights, venez dans mes MP !

## TIL

### Javascript - Add a cause when re-throwing

![[Pasted image 20240724092523.png]]

[source: twitter - Seb ThisWeekInReact.com](https://x.com/sebastienlorber/status/1815762246326194685)
