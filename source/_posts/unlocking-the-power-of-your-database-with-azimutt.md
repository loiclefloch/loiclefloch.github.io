---
title: Unlocking the Power of your Database with Azimutt
date: 2025-06-08 19:20:00
category: Tools
permalink: /unlocking-the-power-of-your-database-with-azimutt/
description: Discover Azimutt, the tool for efficient database design, exploration, and documentation. Learn how it can help you better understand and manage your databases.
image: /images/unlocking-the-power-of-your-database-with-azimutt/azimutt-overview.webp
tags:
---

## Introduction

If you’ve ever felt overwhelmed trying to understand or manage a complex database, you’re not alone. As businesses grow and data flows multiply, navigating sprawling schemas can feel like like trying to navigate a labyrinth without a map.
But in today’s data-driven world, understanding and managing databases efficiently is more critical than ever.

**Azimutt** is a modern solution for database design and exploration that empowers you to take control of your data structures.
Whether you're a developer, data architect, or analyst, Azimutt offers powerful tools to enhance your workflow, by helping you better understand and design your databases.

Key features include:
- **Seamless Exploration**: Navigate even the most complex databases, visualize relationships and dependencies.
- **Powerful Documentation**: Turn existing databases into a resource of well-organized knowledge.
- **Schema Creation**: Start from scratch and design databases with ease.

At its core, Azimutt is designed to make your database management feel simple.

![Azimutt overview](/images/unlocking-the-power-of-your-database-with-azimutt/azimutt-overview.webp)

## Getting Started with Azimutt Explorer

The **Azimutt Explorer** lets you effortlessly explore and design your databases. It connects to various database sources and visualize relationships between multiple schemas.
Supported sources include both direct database connections and schema files in different formats.

### Supported Databases and Schemas

Azimutt supports a wide range of SQL and NoSQL databases, including:

- PostgreSQL
- MySQL
- MariaDB
- SQL Server
- Oracle
- BigQuery
- MongoDB
- Couchbase
- Snowflake

For schema files, supported formats include:

- SQL
- Prisma
- AML
- JSON

You can add multiple sources, link them, and visualize their relationships. Learn more in [the Azimutt sources documentation](https://azimutt.app/docs/sources).
If you prefer to start fresh, you can create an empty database and design its schema using the [AML DSL](https://azimutt.app/aml), a language by Azimutt to define your database schema that we [cover bellow](#Database-design).

### Data Security

Your database credentials are **secure by design**. By default, Azimutt encrypts and stores your credentials locally in your browser, ensuring only you can access them.

For added flexibility, users can opt for:
- **In-memory storage**: Ideal for sensitive production environments; credentials are erased after the session ends.
- **Project storage**: Best for less sensitive environments like local development.

To protect your privacy, **Azimutt servers never connect to your databases directly.** Since browsers can't directly connect to databases, Azimutt provides a lightweight **Gateway** component that runs on your local machine. It's easy to launch with a single Node.js command:

```bash
npx azimutt@latest gateway
```

Learn more about how Azimutt safeguards your data in the [data privacy documentation](https://azimutt.app/docs/data-privacy).

### Open Source
All Azimutt components are open source and available on GitHub: [Azimutt GitHub Repository](https://github.com/azimuttapp/azimutt).

Azimutt is **open source**, fostering transparency and innovation. The entire project is available on [GitHub](https://github.com/azimuttapp/azimutt), welcoming contributions and collaboration from the developer community.

## Organize Your Schemas with Layouts

Large databases often have numerous tables, making it challenging to navigate and understand their structure.
Azimutt’s **Layouts** provide a focused approach to database visualization.

### What Are Layouts?

Layouts allow you to focus on specific aspects of your database, such as a particular domain, feature, or business area. Instead of visualizing every table in a single, overwhelming diagram, you can choose which tables, attributes, and documentation to display, ensuring you see only the most relevant information.

For example:

- Focus on **users** for user management systems.
- Highlight **products and carts** in an e-commerce database.

By organising tables, attributes, and documentation into separated views, Layouts make it easy to focus on specific aspects of your schema.

[Learn more about Layouts](https://azimutt.app/docs/layouts).

### Key Layout Features

![An example of Layout for the Gospeak database](/images/unlocking-the-power-of-your-database-with-azimutt/gospeak-database-example.webp)

#### Entities
Entities are the core components of a database. You can display selected entities, their rows, and the relationships between them.
You can [add relations between tables of different databases](https://azimutt.app/docs/follow-relations).

#### Groups
Groups visually connect tables that belong to the same context or concept. You can name them and they appear as a colored background behind the entities, making relationships clear at a glance.

For example, in the screenshot above, the "Partners" group is highlighted in purple.

### Database documentation


On Azimutt there are two types of [documentations](https://azimutt.app/docs/documentation).
The first one is "Schema documentation". You can add comments, notes and tags on any table.

![Schema documentation](/images/unlocking-the-power-of-your-database-with-azimutt/schema-documentation.png)

The second one is "Layout documentation". This documentation is displayed on the Layout using Markdown elements.
You can explain the Layout purpose, use-cases, examples, etc.

![Layout documentation](/images/unlocking-the-power-of-your-database-with-azimutt/layout-documentation.png)


### Database design

Azimutt created its own schema language: [AML](https://azimutt.app/aml) (Azimutt Markup Language)
You can use it do design your databases schemas:

```aml
users
  id uuid pk
  name varchar
  email varchar unique
  role user_role(admin, guest)=guest

posts
  id uuid pk
  title varchar
  content text | in markdown
  created_at timestamp=`now()`
  created_by uuid -> users(id) # inline relation
```

Take a look at a [real world example](https://azimutt.app/docs/aml#full-example).

You can even use the [VS Code extension](https://marketplace.visualstudio.com/items?itemName=azimutt.vscode-aml) that brings syntax highlighting and other developments utilities.

### Database analysis

[Azimutt analyzer](https://azimutt.app/blog/improve-your-database-design-with-azimutt-analyzer) provides tools to analyse your schemas and make recommendations on how you could improve them.

Current [checks](https://azimutt.app/use-cases/analyze) includes:

- Missing primary keys
- Missing foreign keys
- Inconsistent types
- Big tables with too many columns


## Conclusion

Azimutt bridges the gap between complexity and clarity in database management.

Azimutt’s combination of **exploration**, **documentation** and **analysis** features make it an essential tool for database management and design for  teams of any size.
From startups to enterprises, Azimutt will help you work smarter, and faster.
Whether you’re documenting existing schemas or building new ones, Azimutt streamlines the process while keeping your data secure.

## Try it !

To experience the difference Azimutt can make in your database workflows, visit [Azimutt’s website](https://azimutt.app).

Azimutt provides different databases [as examples](https://azimutt.app/gallery), I recommend using the [e-commerce demo](https://azimutt.app/45f571a6-d9b8-4752-8a13-93ac0d2b7984/c00d0c45-8db2-46b7-9b51-eba661640c3c?token=9a59ccbb-7a58-4c88-9dfc-692de6177be9) (77 tables over 9 databases) to play with.
