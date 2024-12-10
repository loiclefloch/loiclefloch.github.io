---
title: API Days Paris 2024 Talks Insights
date: 2024-12-06 13:45:00
category: Talks
permalink: /api-days/2024/talks/
description: "Api Days 2024 API design and architecture talks insights, best practices. Discover tips on building scalable, flexible, and user-friendly APIs"
image: /images/api-days-2024/api-days-logo.png
tags:
---

> I attended the second day of API Days Paris 2024, held at La Défense on December 3–5.
> You can find below my detailed notes on the talks I participated to with insights, key takeaways, and actionable advice!

![Api Days Logo](/images/api-days-2024/api-days-logo.png)


> [!IMPORTANT]
> Learn more about it on [My Experience at API Days Paris 2024](/api-days/2024/) with Highlights, Key topics and Books.



## Table Of Content

* [The state of Api Management](#The-state-of-Api-Management)
* [Build abstractions, not illusions](#Build-abstractions-not-illusions)
* [Mastering API Architecture](#Mastering-API-Architecture)
* [Simplify design and development with an API Design Reference Kit](#Simplify-design-and-development-with-an-API-Design-Reference-Kit)
* [GraphQL Why bother? We have REST](#GraphQL-Why-bother-We-have-REST)
* [Creating APIs that Data Scientists Will Love](#Creating-APIs-that-Data-Scientists-Will-Love)
* [Five Essential Design Assets for successful APIs](#Five-Essential-Design-Assets-for-successful-APIs)
* [How canvas crafts high quality public APIs that drive impact](#How-canvas-crafts-high-quality-public-APIs-that-drive-impact)
* [Modularizing your API with Domain Storytelling](#Modularizing-your-API-with-Domain-Storytelling)
* [Breaking APIs: How to Cook Up the perfect Design](#Breaking-APIs-How-to-Cook-Up-the-perfect-Design)


## The state of Api Management
*Mark O'Neil*

### Key Trends in API Management
Mark O’Neil opened the day by addressing the latest trends shaping the API management landscape:

- **Unbundled API Management:** Organizations are moving towards a "best-of-breed" approach, opting for specialized tools from multiple vendors instead of monolithic solutions.
- **Commoditization of API Gateways:** API gateways are becoming a standard component, with many organizations using multiple gateways tailored to different needs.
- **AI Driving API Consumption:** The rise of AI initiatives, including large language models, has significantly increased API usage, along with a heightened focus on security and data protection.

### Why Some Vendors Don’t Offer API Gateways
Companies like **Postman** and **SmartBear** have chosen not to provide API gateways. Why? The market is already saturated with gateway solutions, and most organizations already have one in place. Instead, these vendors align with the unbundled trend, focusing on complementary features.

Modern API management often follows a **"bring your own gateway"** model, allowing organizations to integrate their existing infrastructure while leveraging new management tools.

![Magic Quadrant for API Management - Gartner](/images/api-days-2024/Magic-Quadrant-for-API-Management-Gartner.webp)

Source: [Magic Quadrant for API Management - Gartner](https://konghq.com/resources/reports/gartner-magic-quadrant-full-lifecycle-api-management)

### The AI-API Connection

Mark emphasized the inseparable link between AI and APIs, stating:

>[!QUOTE]
>You muse manage APIs your organisation consume, not only those you provide

AI tools, especially those leveraging large language models, rely heavily on APIs for training data, integration, and delivery. [According to Gartner](https://www.gartner.com/en/newsroom/press-releases/2024-03-20-gartner-predicts-more-than-30-percent-of-the-increase-in-demand-for-apis-will-come-from-ai-and-tools-using-llms-by-2026), over **30% of the increased demand for APIs** by 2026 will stem from AI and related technologies.


### API Trends on the Horizon

Mark also highlighted some emerging API trends:
- **GraphQL Adoption:** Interest in GraphQL remains high, with many organizations planning to adopt it. A notable example is [Shopify going all in](https://www.shopify.com/partners/blog/all-in-on-graphql)
- **"Plan to Use" Metrics:** GraphQL, along with other technologies, consistently scores high in surveys tracking planned adoption rates.

### Hype cycle for APIs

![Gartner's 2024 API Hype Cycle](/images/api-days-2024/Gartners-2024-API-Hype-Cycle.png)

- **Service Mesh**: While its adoption has plateaued, its usage remains a critical component in many API architectures. However, it seems to have settled into the background, no longer the focus of cutting-edge innovation.
- **API Marketplace**: Positioned firmly on the **“Plateau of Productivity”**, API marketplaces have matured into reliable and widely adopted solutions, enabling seamless API discovery and monetization.

### Generative AI and APIs: Two Key Roles Emerging
Generative AI is reshaping the API landscape in two distinct ways:
1. **For Creating APIs**: Leveraging AI for API definition, documentation, and automated test generation simplifies the development process and improves accuracy.
2. **For Consuming APIs**: Generative AI agents, such as coding assistants and security-focused AI gateways, are revolutionizing how APIs are utilized.

AI gateways, which support these innovations, are now in the **"Innovation Trigger"** phase of the Gartner Hype Cycle. This indicates rapid development and increasing adoption, with significant growth expected in the months and years ahead.

### AI Gateways: Not Just Rebranded API Gateways
AI gateways represent more than just a reimagining of traditional API gateways. They introduce specialized features to address the unique needs of AI-driven systems:
- **Prompt Routing**: Optimizing how prompts are handled and directed.
- **Cost Analysis and FinOps**: Managing the financial impact of generative AI, particularly in scenarios with heavy API usage.
- **Prompt Security**: Addressing vulnerabilities like prompt injection, jailbreak attempts, and hallucinations to ensure the integrity of AI applications.

### Future Implications: APIs Over Web UI

According to the **Gartner Hype Cycle for APIs (2024)**, **Generative AI technologies are set to become major consumers of APIs**. This shift will force organizations to rethink their priorities. Instead of focusing on traditional web interfaces, businesses will need to prioritize robust, scalable, and secure APIs to support:

- **GenAI-generated applications**
- **AI-driven agents**

As these technologies continue to dominate, APIs will take center stage as the primary interaction layer for both applications and users. Staying ahead of this trend is crucial for any organization invested in the future of digital services.

### Takeaways

Mark O’Neil's talk reinforced a few critical points for any organization navigating the API ecosystem:
1. **Modularity is Key:** The shift toward unbundled API management tools highlights the importance of flexibility. Organizations are no longer confined to a single vendor but can instead mix and match tools to best suit their needs.
2. **Manage What You Consume:** Effective API management extends beyond the APIs you provide to include the ones your organization depends on, particularly with the surge in API consumption driven by AI.
3. **GraphQL’s Growing Momentum:** With its focus on efficiency and developer experience, GraphQL is becoming a go-to choice for many organizations, signaling a broader industry move towards optimized API consumption.
4. **AI as a Catalyst:** The demand for APIs will continue to grow as AI technologies advance, making APIs an even more integral part of business and technology strategies.

### My Thoughts
This session underscored just how far the API landscape has come since I attended my first API Days ten years ago. From commoditized gateways to the rising importance of modularity and AI integration, it’s clear the ecosystem is both maturing and diversifying.

If you're working with APIs—whether as a developer, architect, or product owner—keeping these trends in mind will help you stay ahead in this rapidly evolving field.

---

## Build abstractions, not illusions
Gregor Hohpe, Author of [Platform Strategy](https://architectelevator.com/book/platformstrategy/)

### Key Ideas from the Talk

Gregor Hohpe opened with an insightful observation:
>[!QUOTE]
>We advance technology not towards its limit but to our own

This sentiment shaped his exploration of platform design, focusing on balancing innovation and structure through meaningful abstractions.

### Economics of Scale vs. Speed

When designing platforms, we often assume we can anticipate every use case. Gregor warned against this mindset:
- Predicting all use cases is unrealistic and stifles innovation.
- Platforms thrive when they encourage diversity and flexibility rather than rigid standardization.

A platform should act as a **foundation**, enabling users to build diverse and innovative solutions on top of it. As more diversity emerges at the top, it drives diversity and improvement at the base.

>[!QUOTE]
>If users haven't build something surprising you do not have a platform

Instead of delivering fully formed solutions, platforms should aim to *"Make it easier for users to make things themselves".*

### Standards and Their Role in Platforms

Standards often get a bad reputation within organizations for adding friction. However, Gregor stressed their importance, using the **[Great Baltimore Fire of 1904](https://www.wikiwand.com/en/articles/Great_Baltimore_Fire)** as a metaphor. Firefighters from different cities couldn’t connect their hoses to Baltimore hydrants because there were no standardized fittings. This lack of interoperability exacerbated the disaster.

Platforms need **standards** to facilitate innovation, particularly as we move toward **unbundled API management** (see the earlier section on API trends). These standards should focus on enabling flexibility and diversity rather than imposing constraints.

### The Power and Challenge of Abstractions

Gregor emphasized that **abstractions are difficult to create but essential for building effective platforms**:

- **Naming Matters**: Names should reflect purpose, not ingredients (e.g., "accelerator" instead of "gas pedal").
- **Essential vs. Nonessential Details**: A good abstraction hides unnecessary complexity but does not omit critical details.
- **Avoid Dangerous Illusions**: Oversimplified abstractions can lead to misunderstandings and misuse.

>[!QUOTE]
>API Design is UX Design for developers

The goal of abstractions—and APIs—is to offer an intuitive, explicit interface that empowers developers without hiding critical complexities.

### Anti-Patterns to Avoid
Gregor cautioned against "wrapping the base", a practice he referred to as the [**"The Grim Wrapper"**](https://www.linkedin.com/posts/ghohpe_grimwrapper-platformstrategy-activity-7197116570773381120-yChq). anti-pattern. Over-abstraction can lead to brittle systems and stifle flexibility.

### Recommended Reading and talks
- [97 Things Every Programmer Should Know](https://github.com/97-things/97-things-every-programmer-should-know)
- [AWS re:Invent 2023 - Do modern cloud applications lock you in? (ARC307)](https://www.youtube.com/watch?v=jykSBmnAM2I)

---

## Mastering API Architecture
*James Gough*

### About the Book

James Gough’s talk built on key ideas from his book, [_Mastering API Architecture_](https://www.oreilly.com/library/view/mastering-api-architecture/9781492090625/). Having read this book recently, I highly recommend it for anyone interested in API design and architecture.

### The State of API Management Today

Modern APIs often operate behind an **API Management (APM)** layer and an **API Gateway**. While these layers bring valuable features, they also introduce challenges:

![Modern Apis uses an APM > API Gateway > Apis](/images/api-days-2024/modern-apis-schema-dark.png "Modern Apis schema")

#### Challenges of APM and Gateways:
- **Increased Complexity**: Managing multiple API gateways and configurations is a common issue in large organizations.
- **Latency Overhead**: Additional processing layers can slow down API responses.
- **Single Point of Failure**: Misconfigurations or outages in the APM can bring down critical services.
- **Cost**: Implementing and maintaining APM systems can be expensive.
- **Learning Curve**: Many developers struggle with the intricate settings, leading to misconfigurations.

But they comes with some useful builtins.

**Advantages of Built-ins**:
- **Caching**: Reduces server load and speeds up API responses.
- **Rate Limiting**: Protects systems from abuse and helps manage scalability.

### The Complexity of API Environments

Today’s API environments are:
- **Highly Distributed**: APIs span across multiple systems and regions.
- **Challenging for Architects and Developers**: Balancing performance, scalability, and security is increasingly difficult.
- **Prone to Technical Debt**: Complex systems can quickly spiral into unmanageable states if not carefully designed.

### Platforms and Infrastructure as Code (IaC)
James advocated for leveraging **platforms** built on Infrastructure as Code to address these challenges. Such platforms offer:
- **Developer Onboarding**: Streamlined documentation, self-service tools, and feedback mechanisms.
- **Automation**: CI/CD pipelines to speed up and standardize deployment.
- **Reliability**: Built-in mechanisms to ensure consistent performance.
- **Security**: Robust tools to enforce best practices and compliance.
- **Customization**: Flexibility to adapt to unique organizational needs.
- **Shared Ownership**: Encouraging collaboration between teams to reduce silos.

### Introducing the Common Architecture Language Model (CALM)
One tool James highlighted is the **Common Architecture Language Model (CALM)**, an open-source specification developed by the **Architecture as Code (AasC)** community under **[FINOS](https://finos.org/)**. FINOS focuses on creating open-source solutions for financial services.

**CALM Features**:
- **Standardized Architecture**: A unified framework for defining API architectures.
- **Automation**: Support for automated processes to reduce manual overhead.
- **Core Models**: Predefined structures to simplify common use cases.
- **CLI Tools**: Command-line utilities for quick and efficient architecture management.
- **Patterns**: Best practices for tackling common challenges in API design.

For more information on working with CALM, check out its [documentation and CLI tools](https://calm.finos.org/working-with-calm/using-the-cli).

### Key Takeaways
James Gough’s talk provided a balanced perspective on the pros and cons of API management systems while offering practical solutions to navigate their complexities. Platforms driven by IaC and tools like CALM can help organizations achieve scalable, reliable, and secure API architectures without falling into the trap of technical debt.

For developers, architects, and decision-makers looking to refine their API strategies, this talk—and the accompanying book—are invaluable resources.

---

## Simplify design and development with an API Design Reference Kit
*Arnaud Lauret*

Arnaud Lauret, widely recognized as the **API Handyman**, shared insights from his upcoming **second edition** of _[The Design of Web APIs](https://www.oreilly.com/library/view/the-design-of/9781617295102/)_. His talk tackled common challenges in API design and how an API Design Reference Kit can streamline the process.

### Challenges in API Design

Designing APIs often stumbles over two major friction points:
1. **Define vs. Design**
   - APIs may end up being **non-user-friendly** or **non-interoperable** due to unclear definitions.
   - Teams waste time debating recurring issues, like whether endpoints should be `/cat` or `/cats`.
2. **Design vs. Development**

   - Sometimes, APIs are designed without considering implementation feasibility.
   - This gap can lead to confusion about behavior, security, or the lack of actionable information for developers.

### How an API Design Reference Kit Helps

An **API Design Reference Kit** bridges these gaps, offering clarity and structure through the following elements:

1. **API Capabilities**:
   - Use natural, ubiquitous language to define operations based on use cases.
   - Examples: Describe user journeys, inputs, expected outputs, and success/failure conditions in a structured format. A simple table schema might include:
      - User
      - Use Case
      - Steps
      - Input
      - Success Outcome
      - Failure Outcome
     - API Operation
_This creates a bridge between high-level descriptions and API specifications._

2. **Interface Contracts**:
   - Use standard formats to define API behavior and structure, such as:
      - **OpenAPI Specifications**
      - **Operation Flows**
      - **API Guidelines**
      - **API Mocks**
      - **Postman Collections**
3. **Implementation Details**:
   - Provide essential information for developers:
      - Implementation considerations
      - Security requirements
      - Expected behavior

### Guidelines and Recipes

To avoid inconsistencies, define reusable guidelines for your API, covering:
- **Features**: Pagination, search, filtering.
- **HTTP**: Methods, headers, statuses.
- **Errors**: Formatting, failure behaviors.
- **Data**: Naming conventions, resource paths, typical data models.

A solid API Reference Kit includes:
- **Documentation**: Comprehensive and accessible, with OpenAPI schemas.
- **Code Examples**: Copy-paste-friendly snippets for developers.
- **API Linters**: Tools like [Spectral](https://stoplight.io/open-source/spectral) to enforce style guides and ensure consistency.

### API Reference Kit: Documentation or More?

For **private APIs**, the Design Reference Kit often doubles as the primary documentation. However, for **public or partner-facing APIs**, you’ll need additional resources to cater to broader audiences.

>[!QUOTE]
>Adapt to context, focus on outcomes

### Key Takeaway
An API Design Reference Kit is more than documentation; it’s a strategic tool to align teams, improve efficiency, and create APIs that deliver real value. Whether you’re building private APIs or public-facing ones, investing time in this structure upfront pays dividends throughout the API lifecycle.

---

## GraphQL Why bother? We have REST
*Peter Milne*

Peter Milne's session explored the strengths of GraphQL and why teams might consider it over REST, particularly when addressing common challenges in API design.

### The Challenge with REST
REST, while popular, often falls into two categories:

1. **Bad REST is EASY**
   - **No Consistency**: Ad-hoc implementations without a unified structure.
   - **Too Many Endpoints**: Over-segmentation leads to complex and bloated APIs.
   - **No Separation of Concerns**: Mixing responsibilities in a single endpoint creates maintenance nightmares.
2. **Good REST is HARD**
   - **Consistency**: Requires strict adherence to naming conventions, structure, and style guides.
   - **Contracts**: Often needs tools like OpenAPI for clear, enforceable specifications.
   - **Events**: Introducing Webhooks or other mechanisms to handle real-time updates.
   - **Multiple Operations**: Supporting bulk operations without over-complicating APIs.

### Why Choose GraphQL?

GraphQL provides solutions to many of REST’s pain points, offering a more streamlined approach for modern development needs:

1. **Simplified UI Development**:
   - **Unified Communication**: A single query language ("dialect") for all client-server interactions.
   - **One Endpoint**: Reduces complexity by consolidating API access points into a single, flexible gateway.
2. **Clean Separation of Concerns**:
   - GraphQL enforces a clear distinction between the client (requester) and the server (provider), ensuring focused responsibilities.

### Key Takeaway
While REST remains a robust option, it can be challenging to implement well. GraphQL offers a modern alternative, excelling in scenarios where flexibility, consistency, and UI simplification are priorities. It’s not about replacing REST outright but recognizing when GraphQL might be the better fit for your architecture.
We also saw on the [API Trends](#API-Trends-on-the-Horizon) that GraphQL plan to adoption is raising.

---

## Creating APIs that Data Scientists Will Love
*Rayan Day*

Rayan Day's talk focused on how to design APIs that cater specifically to the needs of **data scientists** and **AI practitioners**. He shared insights from his upcoming book, _[Hands-On APIs for AI and Data Science](https://www.oreilly.com/library/view/hands-on-apis-for/9781098164409/)_, set for release in March 2025.

### What Data Scientists Expect from APIs

Data scientists, much like developers, form opinions about an API in mere seconds. To ensure your API makes a strong first impression and retains their attention, consider the following:
1. **Provide Easy-to-Use SDKs**:
   - Data scientists often work with **Python**, so having a well-documented and easy-to-integrate SDK in Python is essential.
2. **Offer Beautiful Documentation**:
   - Well-structured and user-friendly documentation goes a long way in making the API more accessible and reducing the learning curve.

### Make Their Life Easier

To truly appeal to data scientists and enhance their workflow, consider implementing the following features in your API:

1. **Standard External IDs**:
   - Include identifiers that, while not essential for your specific use case, can help data scientists integrate your data with external datasets, enabling efficient **JOINs**.
2. **Enforce Data Type Definitions**:
   - Clearly define data types using standards like **OpenAPI** to avoid ambiguity and ensure compatibility with other systems.
3. **Allow Bulk Downloads**:
   - Many data scientists need to download large datasets at once. Make it easy to retrieve data in bulk to save time and reduce the need for multiple requests.
4. **Support Queries by Last Changed Date**:
   - Enable users to query data based on the **last modified date**, which simplifies the process of updating datasets without needing to download everything again.

### Key Takeaway
Designing APIs for data scientists requires a focus on ease of use, data integration, and flexibility. By implementing user-friendly SDKs, clear documentation, and features like bulk downloads and date-based queries, you’ll create an API that fits seamlessly into their data pipelines and workflows.

---

## Five Essential Design Assets for successful APIs
*Mike Amudsen*

Mike Amudsen's talk covered the five key design assets that are essential for building successful APIs. Drawing from his books, _[Design and Build Great Web APIs](https://learning.oreilly.com/library/view/design-and-build/9781680508123/)_ and _[RESTful Web API Patterns and Practices Cookbook](https://www.oreilly.com/library/view/restful-web-api/9781098106737/)_, he highlighted the importance of thoughtful design throughout the API development process.

>A resource asset is any resource created or used in design process.

### 1. API Story

>[!QUOTE]
>Every great design begins with an even better story - *Lorinda Mamo, Designer / Creative Director*

A great API begins with a compelling story. Stories provide a shared understanding and are far more engaging than raw data. When designing your API, start with a clear narrative that defines:

- **Purpose**: Why does this API exist?
- **Action**: What should it enable users to do?
- **Data**: What data is being exchanged?
- **Roles**: Who will use it, and what are their responsibilities?
- **Rules**: What constraints or guidelines must be followed?

Good API stories are accessible, relatable, and easy to communicate.****

### 2. Api vocabulary
Just as **ubiquitous language** is crucial in **Domain-Driven Design (DDD)**, a consistent and shared vocabulary is essential for API design. A strong API vocabulary ensures that everyone involved in the design and implementation process is on the same page. This vocabulary helps avoid ambiguity and fosters clear communication.

### 3. Api Diagram

>[!QUOTE]
>We are visual creatures

APIs are about connections, and a well-designed API makes those interconnections visible. Visualizing the structure and flow of your API can help clarify relationships between resources, making it easier for developers to understand how the system works at a glance. Diagrams are essential for communicating complex interactions and ensuring clarity in API design.

### 4. Api description

Good APIs should answer the **why**, not just the **what**.  
To explain the purpose behind each resource, action, and endpoint, you can use structured formats like [**ALPS** (Application-Level Profile Semantics)]((https://niemand.com.ar/2021/01/08/exploiting-application-level-profile-semantics-apls-from-spring-data-rest/) or tools like [**Smithy**](https://smithy.io/2.0/index.html]) and **[TypeSpec](https://typespec.io/)**. A table format can also help, describing:

- Resource
- Action
- Endpoint
- Input
- Output

The focus should be on the reasoning behind design decisions, offering clarity on how and why things are built the way they are.

### 5. Api definition
Good APIs are **explicit**. Whether you’re working with **OpenAPI**, **AsyncAPI**, **GraphQL**, or **Protobuf**, it’s important to clearly define your API in a machine-readable format. This can include:

- Code
- Diagrams
- Documentation

The goal is to create an API definition that is detailed, precise, and easy to consume.

>[!QUOTE]
>Design is thinking made visible - *Saul Bass*

### Key Takeaway
Mike’s talk emphasized that successful API design goes beyond just writing code. It’s about creating a shared understanding, clearly defining concepts, and communicating effectively through story, vocabulary, visuals, descriptions, and definitions. These assets form the foundation for creating APIs that are not only functional but also maintainable and scalable in the long run.

---

## How canvas crafts high quality public APIs that drive impact
*Ofir Zeevi*

Ofir Zeevi shared valuable insights on how Canvas, a company renowned for its effective APIs, designs public APIs that not only meet user needs but also drive long-term impact. His approach highlights the importance of building with a thoughtful process and a strong focus on extensibility and iterative validation.

### Start With Why

The first step in any API design process is to define the **why**. Understand the problem you are solving and the value your API will provide. Without a clear purpose, it’s easy to get lost in the technical details and miss the bigger picture.

### Internal First: Build Private APIs Before Public

Ofir emphasized the importance of starting with **private APIs** within the organization before releasing them to the public. The internal-first approach allows you to:

- **Leverage domain knowledge**: Take advantage of the expertise available within your team.
- **Optimize for different needs**: Tailor the API to various internal requirements before exposing it to external users.
- **Have freedom to evolve**: You have more flexibility to iterate and improve the API when it’s used internally first.
- **Validate and differentiate**: Test your API’s assumptions and functionality internally to ensure it’s addressing real needs.

### Validate with MVPs

Ofir also recommended using **MVPs (Minimum Viable Products)** as a key strategy for API validation. This iterative process starts with an **internal alpha phase**, followed by a **beta phase** with early adopters, and then a **general release**. This allows you to gather feedback at each stage and ensure the API evolves in line with user needs.

### Design for Extensibility

When building public APIs, it’s essential to think about **extensibility** from the start. This means designing your API in a way that allows it to grow and adapt over time. A rigid design can limit the API’s future potential, while an extensible one ensures that it remains relevant and adaptable to changing requirements.

### Consider a Public API Specialty Team

To ensure the success of public API initiatives, Ofir recommends creating a **Public API Specialty Team**. This team can:

- **Spread expertise** across multiple teams, ensuring consistency and best practices.
- Provide **design support and reviews** throughout the API development process, ensuring high quality at each phase.
- Offer **decision-making support** during critical design and implementation stages.
- Ensure a **continuous improvement** mindset, refining processes and adapting to new challenges as the API evolves.

### Specialty Team Process

The specialty team at Canvas has established a process that includes:

- **Weekly office hours** for ongoing support and consultations.
- **Design reviews** during different phases of the API’s lifecycle to ensure alignment with business goals and technical standards.

### Key Takeaways

Ofir’s approach to crafting high-quality public APIs is built on a foundation of careful planning, internal validation, and a focus on continuous improvement. By starting with private APIs, designing for extensibility, and incorporating specialized expertise throughout the process, organizations can create APIs that not only meet current needs but also drive lasting impact.

---

## Modularizing your API with Domain Storytelling
*Henning Schwentner*

Henning Schwentner introduced the concept of **Domain Storytelling**, a technique designed to bridge the gap between developers and business stakeholders, addressing the issue of poor communication that often leads to project failure. This session showcased how Domain Storytelling can be applied to modularize APIs, making them more aligned with the business domain.

### The Problem: Miscommunication Between Developers and Business

Misunderstandings between development teams and business stakeholders can be detrimental to any project. Poor communication often leads to unclear requirements, incorrect assumptions, and ultimately, project failure. The key to overcoming this challenge, according to Henning, is ensuring that both developers and domain experts are on the same page.

### Domain Storytelling: A Remedy for Misunderstanding

Domain Storytelling is a collaborative technique that transforms domain knowledge into effective software. By engaging domain experts in storytelling sessions, development teams can:

- **Understand the domain** of a software system better.
- **Identify microservices boundaries** and structure the system in a way that reflects the actual business processes.
- **Discuss requirements** clearly and effectively.

The process involves domain experts sharing their stories about their tasks, which are then recorded using an easy-to-understand, pictographic language. This approach makes it clear whether the development team understands the domain experts’ stories correctly. After just a few stories, teams can begin to discuss the people, processes, and events in the domain, creating a shared understanding that forms the foundation for API design.

### Practical Demonstration

The talk featured a **live demonstration** where Henning invited the audience to act as interview partners. This interactive session allowed attendees to experience firsthand how Domain Storytelling works in practice, with domain experts narrating their stories while the team captured them using visual representations.

### Key Takeaways

- **Collaborative Storytelling**: Domain Storytelling ensures that developers and business stakeholders have a shared understanding of the domain, leading to better software design.
- **Effective Communication**: By using visual languages and storytelling, misunderstandings can be minimized, and the real needs of the business are captured accurately.
- **Modularization and Microservices**: Domain Storytelling helps identify natural boundaries for microservices by clearly understanding the domain’s tasks and events.

For those interested in seeing how Domain Storytelling works in a live setting, check out Henning's [**NDC conference talk**](https://www.youtube.com/watch?v=g3XwgrLpxDY).

---

## Breaking APIs: How to Cook Up the perfect Design
*Marco Pierobon*

In his talk, Marco Pierobon shared valuable insights into designing APIs that are both functional and sustainable, while balancing flexibility and scalability. He highlighted the critical design principles that help craft APIs that are effective, user-friendly, and easy to maintain.

### **Key Design Principles**

1. **Everything is a Trade-off**
   - Good API design requires critical thinking and making conscious trade-offs. Document these decisions in an **ADR** (Architectural Decision Record) to keep track of the rationale behind each design choice.
   - **Avoid over-engineering**: Begin with simplicity and iterate on the design as needs evolve.
2. **Design for Flexibility**
   - Plan for **versioning** and **deprecation policies** from the start to avoid breaking changes down the line.
   - Ensure **loose coupling** by avoiding tightly bound dependencies between components, and consider using **hypermedia** to improve flexibility.
3. **Reusability**
   - APIs should be **modular**, allowing for reusable components like **pagination** and **filtering** across different endpoints.
4. **Good Naming Practices**
   - Clear, consistent naming helps both developers and users understand the API's purpose.
   - Use **kebab-case** for endpoints and **camelCase** for JSON attributes to maintain consistency.
5. **Data Management & Resource Modeling**
   - Avoid creating **deep hierarchies** in resource models to keep the structure simple and comprehensible.
   - Use **DTOs** (Data Transfer Objects) to decouple domain models from API contracts, ensuring better evolution and security.
6. **Avoid Leaking APIs**
   - Keep **domain models** separate from API contracts to prevent unwanted exposure of internal logic and data.
   - This approach enhances **security**, ensures **consistency**, and allows for **code evolution** without breaking existing clients.
7. **Data and Resource Organization**
   - Clearly define **full** and **partial updates** to help users understand how to interact with resources.
   - Track **changes** with versioning or revisions to maintain the integrity of data over time.
8. **Soft Deletion**
   - Implement **soft deletion** when needed to avoid permanent data loss.
   - Regularly **monitor performance** and implement **archival strategies** for old data.
9. **API Optimization**
   - Use strategies like **bulk retrieval** and **bulk write** for efficient data handling.
   - Implement **compression**, use **aggregated endpoints**, and explore **websockets** for real-time updates.
   - Optimize **database queries** to improve performance.
10. **Pagination and Filtering**
   - Ensure that your API handles large datasets efficiently by implementing **pagination** and **filtering**.
11. **Batch Operations**
   - Ensure **atomicity** and **consistency** of batch operations, preserve **order**, and handle errors appropriately.
   - Use **optimistic locking** to prevent conflicts in concurrent operations.
12. **Error Handling and Retries**
   - Use **idempotency** for retry mechanisms and **exponential backoff** to avoid overwhelming the system.
   - Provide **meaningful error messages** to guide users in troubleshooting.
13. **Handling Breaking Changes**
   - Be aware of the impact of **breaking changes** and use **contract testing** to prevent issues during updates.
14. **Long-Running Operations (LROs)**
   - Treat long-running operations as **resources**, decouple execution from the initial request, and provide mechanisms for **progress tracking** and **callbacks**.
15. **User-Friendliness**
   - Ensure **clear documentation**, consistent error messages, and provide useful examples and tutorials to improve user experience.
16. **Platform Engineering**
   - Implement **API governance** and standards, and distinguish between APIs for **internal** and **external** users.
   - Create **developer portals** for easy access to API resources and documentation. Adopt an **API-first** approach to design.
17. **Align APIs with Business Goals**
   - Identify **business problems** your API can solve, align API functionality with **business objectives**, and engage **stakeholders** throughout the process.
   - Define **metrics** and **KPIs** to measure the success of the API.

### Key Takeaways
Marco’s approach to API design emphasizes that good APIs are not only technically sound but also user-centric, flexible, and aligned with business objectives. His design principles are a great guide for building high-quality, sustainable APIs that stand the test of time.
