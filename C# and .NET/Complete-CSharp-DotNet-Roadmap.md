# Complete C# and .NET Learning Roadmap

> A progressive, trackable roadmap from programming fundamentals to building,
> testing, securing, deploying, and operating production .NET applications.

## Learning Flow

```text
Development Setup
↓
C# Fundamentals
↓
Object-Oriented Programming and the Type System
↓
Collections, Generics, LINQ, and Error Handling
↓
Files, Serialization, and Data Access
↓
Async Programming, Concurrency, and Runtime Fundamentals
↓
Testing and Software Design
↓
ASP.NET Core and Web APIs
↓
EF Core, Security, and Application Architecture
↓
Observability, Performance, Deployment, and Cloud
↓
Specialization and Capstone Projects
```

## How to Use This Roadmap

1. Follow the phases in order; later phases assume earlier skills.
2. For each topic, read or watch one focused lesson, write a small example, and
   explain the concept in your own words.
3. Build the phase project before marking a phase complete. Keep the code in
   source control and write down bugs, design decisions, and lessons learned.
4. Use the checklist as a progress tracker. Topics marked **Optional /
   Specialization** are paths to explore after the common foundation.
5. Learn by building rather than trying to memorize every API. Use official
   documentation to look up framework behavior and version-specific details.

### Recommended Baseline

- Use the latest supported **.NET LTS SDK** available to you; .NET 10 LTS is a
  suitable baseline where available. Keep the SDK and target framework explicit
  in each project.
- Use a current version of Visual Studio, VS Code with C# Dev Kit, or another
  C#-capable IDE.
- Use Git from the beginning. Learn both the IDE workflow and `dotnet` CLI.
- Primary learning path: modern C# and .NET, ASP.NET Core, SQL, and EF Core.

---

# Part I — C# Language Foundations

## Phase 0 — Setup and First Program

- [ ] Install a supported .NET SDK and verify `dotnet --info`
- [ ] Understand the difference between the .NET SDK, runtime, and target
  framework
- [ ] Create, build, run, and clean a console project with `dotnet new`,
  `dotnet build`, `dotnet run`, and `dotnet clean`
- [ ] Understand project files (`.csproj`), source files, namespaces, and
  `Program.cs` top-level statements
- [ ] Create and use a solution with `dotnet new sln` and `dotnet sln`
- [ ] Use IDE debugging: breakpoints, step over / into / out, watch, locals,
  call stack, and exception settings
- [ ] Use Git basics: status, diff, add, commit, branch, and ignore generated
  files
- [ ] Read compiler errors and warnings; distinguish build-time diagnostics
  from runtime exceptions

**Build:** A small console application that prompts for input, validates it,
and prints a useful result.

## Phase 1 — Programming Fundamentals in C#

### Syntax and Values

- [ ] Statements, expressions, blocks, comments, and formatting conventions
- [ ] Identifiers, keywords, naming conventions, and namespaces
- [ ] Variables, constants (`const`), and read-only values (`readonly`)
- [ ] Type inference with `var` and when explicit types improve clarity
- [ ] Value types and reference types; values, references, and assignment
- [ ] Numeric types, ranges, precision, integer division, and overflow
- [ ] `bool`, `char`, `string`, `decimal`, `DateTime`, `DateTimeOffset`,
  `TimeSpan`, and `Guid`
- [ ] Literals, interpolation, verbatim strings, raw string literals, and
  formatting
- [ ] Implicit and explicit conversions, casts, parsing, `TryParse`, and
  culture-sensitive parsing/formatting
- [ ] `checked` and `unchecked` arithmetic
- [ ] Nullable value types and null basics

### Operators and Control Flow

- [ ] Arithmetic, comparison, logical, assignment, conditional, null, and
  bitwise operators
- [ ] Operator precedence and use of parentheses for clarity
- [ ] `if`, `else`, `switch`, switch expressions, and pattern matching basics
- [ ] `for`, `foreach`, `while`, and `do` loops
- [ ] `break`, `continue`, and early returns
- [ ] Arrays: declaration, initialization, indexing, iteration, and
  multidimensional arrays
- [ ] Basic string operations and string immutability
- [ ] Console input/output and simple input validation

### Methods

- [ ] Declaring, calling, and returning from methods
- [ ] Parameters, return values, overloads, optional parameters, and named
  arguments
- [ ] Pass-by-value semantics and `ref`, `out`, and `in`
- [ ] Local variables, scope, lifetime, and definite assignment
- [ ] Expression-bodied members and local functions
- [ ] Recursion: base case, recursive case, and stack limits
- [ ] XML documentation comments and readable method design

**Build:** A command-line unit converter or number-guessing game with
input-validation methods.

## Phase 2 — Object-Oriented Programming and C# Type System

### Classes and Encapsulation

- [ ] Define classes, objects, fields, properties, and methods
- [ ] Constructors, constructor chaining, and object initializers
- [ ] Access modifiers: `public`, `private`, `protected`, `internal`,
  `protected internal`, and `private protected`
- [ ] Encapsulation and invariant-preserving validation
- [ ] Static members, static classes, and static constructors
- [ ] `this`, `base`, and constructor/member initialization order
- [ ] Object identity, equality, `Equals`, `GetHashCode`, and `ToString`

### Inheritance and Polymorphism

- [ ] Inheritance and the `is-a` relationship
- [ ] `virtual`, `override`, `abstract`, `sealed`, and method hiding with
  `new`
- [ ] Abstract classes and when inheritance is appropriate
- [ ] Interfaces, implementation, explicit interface implementation, and
  default interface members
- [ ] Polymorphism and programming against abstractions
- [ ] Prefer composition when it models the relationship more clearly

### Structs, Records, and Enums

- [ ] Enums, underlying values, flags, and safe enum parsing
- [ ] Structs and `readonly struct`; value semantics and copying
- [ ] Records, record classes, record structs, and value-based equality
- [ ] `init` accessors and `required` members
- [ ] Tuples, named tuple elements, and deconstruction
- [ ] Choose among class, struct, record, and tuple based on identity,
  mutability, and expected usage

### Modern Type-System Features

- [ ] Generic types and methods; type parameters and constraints
- [ ] Generic constraints: `where`, `class`, `struct`, `notnull`, `new()`,
  and interface/base-type constraints
- [ ] Covariance and contravariance (`out` / `in`) at a conceptual level
- [ ] Nullable reference types: annotations, warnings, flow analysis, and
  null-forgiving operator
- [ ] Null-conditional, null-coalescing, and null-coalescing assignment
- [ ] `is`, `as`, type patterns, property patterns, relational patterns, and
  list patterns
- [ ] Extension methods and extension blocks where supported by the chosen
  language version
- [ ] Partial types and partial methods
- [ ] Attributes and attribute targets
- [ ] `nameof`, `typeof`, `default`, and `using` declarations/directives

**Build:** A small domain model (for example, library loans or inventory)
with validation, interfaces, records, and unit-testable behavior.

## Phase 3 — Collections, Generics, LINQ, and Errors

### Collections

- [ ] Arrays versus dynamically sized collections
- [ ] `List<T>`, `Dictionary<TKey,TValue>`, `HashSet<T>`, and
  `Queue<T>` / `Stack<T>`
- [ ] `IEnumerable<T>`, `ICollection<T>`, `IList<T>`, and read-only
  collection interfaces
- [ ] Collection equality and comparer concepts
- [ ] `SortedDictionary`, `SortedSet`, `LinkedList`, and immutable
  collections: appropriate use cases
- [ ] `Span<T>`, `ReadOnlySpan<T>`, and memory-oriented APIs at a
  fundamentals level
- [ ] Iterators with `yield return` and deferred execution

### Delegates, Events, and LINQ

- [ ] Delegates, `Action`, `Func`, and `Predicate`
- [ ] Lambdas, closures, captured variables, and expression-bodied lambdas
- [ ] Events, event publishers/subscribers, and unsubscribe/lifetime concerns
- [ ] LINQ query syntax and method syntax
- [ ] Filtering, projection, ordering, grouping, joins, aggregation, and
  set operations
- [ ] `IEnumerable<T>` versus `IQueryable<T>` and where a query executes
- [ ] Deferred versus immediate execution; multiple enumeration pitfalls
- [ ] `Any`, `All`, `First`, `Single`, `FirstOrDefault`, and their failure
  semantics
- [ ] Avoid accidental N+1 queries and client-side evaluation when using
  provider-backed queries

### Errors and Resource Safety

- [ ] Exception types, throwing, catching, and propagation
- [ ] `try`, `catch`, `finally`, exception filters, and inner exceptions
- [ ] Throw specific exceptions; preserve stack traces with `throw;`
- [ ] Do not use exceptions as ordinary control flow
- [ ] `IDisposable`, `using` statements/declarations, and deterministic cleanup
- [ ] `IAsyncDisposable` and `await using`
- [ ] `using` directives versus `using` resource declarations
- [ ] Cancellation with `CancellationToken` as a normal API design concern

**Build:** A searchable in-memory catalog with filters, sorting, grouping,
and clear validation/error behavior.

## Phase 4 — Files, Data Formats, and Configuration

- [ ] File and directory operations with `System.IO`
- [ ] Streams, readers/writers, buffering, and asynchronous file operations
- [ ] Paths with `Path` APIs rather than hand-built separators
- [ ] JSON serialization/deserialization with `System.Text.Json`
- [ ] JSON options, naming policies, converters, enums, and versioning concerns
- [ ] CSV and other text formats; escaping and culture considerations
- [ ] Configuration from command-line arguments, environment variables, and
  JSON files
- [ ] Secrets do not belong in source control or ordinary configuration files
- [ ] Time zones, UTC storage, `DateTimeOffset`, and invariant formatting
- [ ] Basic regular expressions and safe input-size limits

**Build:** A command-line tracker that reads/writes validated JSON data and
handles missing, malformed, and inaccessible files explicitly.

---

# Part II — .NET Platform and Professional Development

## Phase 5 — .NET Platform, CLI, and Packages

- [ ] CLR, managed execution, IL, JIT compilation, and garbage collection
- [ ] SDK-style projects, target frameworks, runtime identifiers, and
  framework-dependent versus self-contained publishing
- [ ] `dotnet` CLI: new, restore, build, test, run, publish, format, tool,
  and workload commands
- [ ] NuGet packages, package references, semantic versioning, and dependency
  updates
- [ ] Solutions, project references, multi-project applications, and project
  boundaries
- [ ] MSBuild basics: properties, items, targets, and build configurations
- [ ] `Directory.Build.props` / `Directory.Build.targets` and shared settings
- [ ] `global.json`, package lock files, and repeatable builds
- [ ] Debug and Release configurations; symbols and optimization
- [ ] Analyzers, code style, nullable warnings, and treating warnings
  appropriately
- [ ] Logging with `Microsoft.Extensions.Logging`
- [ ] Dependency injection, service lifetimes, and the .NET Generic Host
- [ ] Options pattern, validation, and configuration binding

**Build:** A multi-project solution with a reusable class library, console
host, configuration, logging, and DI.

## Phase 6 — Testing, Debugging, and Quality

- [ ] Unit, integration, and end-to-end testing: purpose and trade-offs
- [ ] Choose and use a test framework (xUnit, NUnit, or MSTest)
- [ ] Arrange-Act-Assert and meaningful assertions
- [ ] Test boundaries, invalid inputs, exceptions, and asynchronous code
- [ ] Test doubles: stubs, fakes, mocks, and when not to mock
- [ ] Dependency injection seams and testable design
- [ ] Integration tests with `WebApplicationFactory` for ASP.NET Core
- [ ] Test databases and disposable infrastructure (for example, containers)
- [ ] Code coverage: use as a diagnostic, not as a quality target by itself
- [ ] Debugger, structured logs, and reproducible minimal examples
- [ ] Static analysis, formatting, analyzers, and CI test execution

**Build:** Add focused tests to the earlier domain project and run them in a
CI workflow.

## Phase 7 — Async Programming, Concurrency, and Runtime

### Asynchronous Code

- [ ] I/O-bound versus CPU-bound work
- [ ] `Task`, `Task<T>`, and `async` / `await`
- [ ] Async call chains; return `Task` rather than `async void` except event
  handlers
- [ ] Avoid `.Result` and `.Wait()` in asynchronous application code
- [ ] Sequential versus concurrent awaits; `Task.WhenAll` and `Task.WhenAny`
- [ ] Cancellation tokens, timeouts, and cancellation propagation
- [ ] Exception behavior in tasks and async methods
- [ ] Async streams with `IAsyncEnumerable<T>`
- [ ] ConfigureAwait: understand context behavior and apply where appropriate
- [ ] Avoid unbounded task creation and fire-and-forget work without managed
  lifetime/error handling

### Concurrency and Parallelism

- [ ] Threads, thread pool, tasks, concurrency, and parallelism
- [ ] Race conditions, atomicity, visibility, and thread safety
- [ ] Locks, `Monitor`, `lock`, `SemaphoreSlim`, and deadlock avoidance
- [ ] Concurrent collections and immutable data patterns
- [ ] `Interlocked`, `volatile` semantics, and when to prefer higher-level
  synchronization
- [ ] `Parallel` and PLINQ for suitable CPU-bound workloads
- [ ] Channels and producer-consumer patterns
- [ ] Backpressure, bounded queues, and graceful shutdown

### Runtime and Memory

- [ ] Stack versus managed heap; object lifetime and reachability
- [ ] Generational GC and large object heap at a practical level
- [ ] Allocation pressure, boxing/unboxing, and value-type trade-offs
- [ ] Finalizers versus deterministic disposal
- [ ] `IDisposable` ownership patterns and avoiding resource leaks
- [ ] Diagnose memory and CPU issues with profiler / diagnostic tooling
- [ ] BenchmarkDotNet basics; benchmark only after defining a real question

**Build:** An asynchronous file or network processing tool with cancellation,
bounded concurrency, and tests for failure and shutdown.

## Phase 8 — Networking and HTTP Fundamentals

- [ ] HTTP request/response model, methods, status codes, headers, and bodies
- [ ] HTTPS, TLS, certificates, and why certificate validation should remain
  enabled
- [ ] DNS, TCP, ports, sockets, proxies, and connection lifecycle basics
- [ ] JSON APIs, content negotiation, compression, and caching headers
- [ ] `HttpClient` and `IHttpClientFactory`; connection reuse and resilience
- [ ] Timeouts, retries, exponential backoff, circuit breaking, and idempotency
- [ ] Respect cancellation and avoid retrying non-idempotent operations blindly
- [ ] WebSockets and server-sent events at a conceptual level

**Build:** A resilient API client using typed options, `IHttpClientFactory`,
timeouts, cancellation, and structured logging.

---

# Part III — Building .NET Applications

## Phase 9 — ASP.NET Core Fundamentals

- [ ] ASP.NET Core hosting model, `WebApplication`, and application startup
- [ ] Middleware pipeline, ordering, short-circuiting, and exception handling
- [ ] Routing, route constraints, endpoint metadata, and route groups
- [ ] Minimal APIs and controller-based APIs; choose based on project needs
- [ ] Model binding, input validation, filters, and validation responses
- [ ] Dependency injection in requests and scoped service lifetimes
- [ ] Configuration, environment-specific settings, and options validation
- [ ] Logging, structured logging, correlation IDs, and request logging
- [ ] Static files, content types, and file upload/download limits
- [ ] OpenAPI documents and interactive API documentation
- [ ] Health checks, readiness, liveness, and graceful shutdown

## Phase 10 — API Design and Web Features

- [ ] Resource-oriented REST design and appropriate HTTP methods/status codes
- [ ] DTOs and separation between transport contracts and domain entities
- [ ] API versioning strategy and backward compatibility
- [ ] Pagination, filtering, sorting, and bounded result sizes
- [ ] Consistent error responses using Problem Details
- [ ] Idempotency and safe handling of duplicate requests
- [ ] CORS: origins, methods, headers, credentials, and least privilege
- [ ] Rate limiting and request-size limits
- [ ] File streaming and large-payload handling
- [ ] SignalR hubs and real-time communication
- [ ] gRPC services, contracts, and streaming (**Optional / Specialization**)
- [ ] GraphQL with .NET (**Optional / Specialization**)

**Build:** A documented, versioned Web API with validation, pagination,
Problem Details, health checks, and integration tests.

## Phase 11 — Databases, SQL, and Entity Framework Core

### Relational Database Foundations

- [ ] Tables, rows, columns, primary keys, foreign keys, and constraints
- [ ] SQL: SELECT, INSERT, UPDATE, DELETE, filtering, joins, grouping, and
  aggregation
- [ ] Normalization, relationships, and choosing data types
- [ ] Indexes, query plans, and basic query optimization
- [ ] Transactions, ACID, isolation levels, and concurrency conflicts
- [ ] Parameterized queries and SQL injection prevention
- [ ] Connection strings and secure credential handling

### EF Core

- [ ] `DbContext`, `DbSet<T>`, entities, and change tracking
- [ ] Model configuration with conventions, attributes, and Fluent API
- [ ] Relationships: one-to-one, one-to-many, many-to-many
- [ ] Migrations, schema evolution, and safe deployment of migrations
- [ ] LINQ translation, `IQueryable<T>`, projections, and server-side queries
- [ ] Loading related data: eager, explicit, and lazy loading trade-offs
- [ ] Tracking versus `AsNoTracking`
- [ ] Optimistic concurrency and concurrency tokens
- [ ] Transactions and execution strategies
- [ ] Raw SQL only when justified; parameterize all values
- [ ] Repository pattern: understand when it adds value and when `DbContext`
  already provides the needed abstraction
- [ ] Integration testing with a relational provider close to production

### Other Persistence Options

- [ ] ADO.NET and `DbConnection` fundamentals
- [ ] Dapper or another micro-ORM (**Optional / Specialization**)
- [ ] NoSQL/document/key-value databases and data modeling
  (**Optional / Specialization**)

**Build:** Persist the Web API's domain data in a relational database with
migrations, constraints, tests, and a documented schema.

## Phase 12 — Security and Identity

- [ ] Authentication versus authorization
- [ ] Identity, users, roles, claims, and policies
- [ ] ASP.NET Core Identity fundamentals
- [ ] Cookie authentication for browser applications
- [ ] Bearer tokens, OAuth 2.0, and OpenID Connect concepts
- [ ] JWT validation: issuer, audience, signature, expiry, and key rotation
- [ ] Authorization policies, resource-based authorization, and least
  privilege
- [ ] Password hashing: use established identity libraries; never invent a
  password-storage scheme
- [ ] Secrets management, environment configuration, and managed identities
- [ ] Input validation, output encoding, and injection prevention
- [ ] CSRF, XSS, SSRF, open redirects, and security headers
- [ ] HTTPS, secure cookies, CORS configuration, and rate limiting
- [ ] Dependency vulnerability scanning and patching
- [ ] Audit logging without exposing passwords, tokens, or sensitive data
- [ ] Threat modeling and security review before production

**Build:** Add authenticated users and policy-based authorization to the API;
verify anonymous, unauthorized, and authorized requests.

## Phase 13 — Architecture and Design

- [ ] Separation of concerns, cohesion, coupling, and dependency direction
- [ ] SOLID principles, DRY, KISS, and YAGNI with pragmatic application
- [ ] Layered architecture and dependency inversion
- [ ] Clean / hexagonal architecture concepts and ports/adapters
- [ ] Domain modeling, entities, value objects, and domain invariants
- [ ] Application services, domain services, and infrastructure boundaries
- [ ] Dependency injection and composition root
- [ ] DTO mapping and explicit boundaries
- [ ] Repository and unit-of-work patterns; avoid adding abstractions without
  a use case
- [ ] Common patterns: factory, strategy, decorator, adapter, observer,
  mediator, and outbox
- [ ] Monolith versus modular monolith versus microservices
- [ ] Domain-driven design fundamentals (**Optional / Advanced**)
- [ ] CQRS and event sourcing trade-offs (**Optional / Advanced**)
- [ ] Distributed transactions, sagas, and eventual consistency
  (**Optional / Advanced**)

**Build:** Refactor the API into clear domain/application/infrastructure
boundaries without adding unnecessary layers.

## Phase 14 — Background Work and Messaging

- [ ] Hosted services and `BackgroundService`
- [ ] Scope creation and dependency lifetimes inside background jobs
- [ ] Queues, producers, consumers, acknowledgements, and delivery semantics
- [ ] Retry policies, poison messages, dead-letter queues, and idempotent
  consumers
- [ ] Scheduling and recurring jobs
- [ ] Transactional outbox and inbox patterns
- [ ] Broker options such as Azure Service Bus, RabbitMQ, or Kafka
  (**Optional / Specialization**)
- [ ] Graceful shutdown, draining work, and visibility into job health

**Build:** Add a background worker that processes a bounded queue and records
retry/dead-letter outcomes.

---

# Part IV — Production Readiness and Specialization

## Phase 15 — Observability, Reliability, and Performance

- [ ] Structured logs with useful contextual properties
- [ ] Metrics, traces, and logs: what each signal answers
- [ ] OpenTelemetry instrumentation and trace context propagation
- [ ] Distributed tracing across HTTP and database calls
- [ ] Dashboards, alerts, service-level indicators, and objectives
- [ ] Health checks and dependency health reporting
- [ ] Resilience policies: timeout, retry, circuit breaker, and bulkhead
- [ ] Avoid retry storms; define budgets, jitter, and safe retry conditions
- [ ] Caching: in-memory versus distributed; expiration and invalidation
- [ ] Performance profiling before optimization
- [ ] Database and API latency analysis; load and stress testing
- [ ] Memory, allocation, CPU, throughput, and tail latency
- [ ] BenchmarkDotNet for isolated performance comparisons
- [ ] Capacity planning, graceful degradation, and overload protection

## Phase 16 — Deployment, Containers, and CI/CD

- [ ] Publish framework-dependent and self-contained applications
- [ ] Environment configuration and production-safe defaults
- [ ] Linux hosting basics and process/signal behavior
- [ ] Docker images, multi-stage builds, layers, and non-root execution
- [ ] Container health checks, ports, environment variables, and secrets
- [ ] CI pipeline: restore, build, format/analyze, test, and publish
- [ ] CD pipeline and environment promotion
- [ ] Database migration strategy during deployment
- [ ] Versioning, rollback, blue/green, and rolling deployment concepts
- [ ] Artifact provenance and dependency/security scanning
- [ ] Cloud deployment to Azure, AWS, or another provider
  (**Optional / Specialization**)
- [ ] Kubernetes and orchestration fundamentals
  (**Optional / Specialization**)
- [ ] Infrastructure as code and managed services
  (**Optional / Specialization**)

**Build:** Containerize the API and database dependencies for local
development, then deploy through a repeatable CI/CD pipeline.

## Phase 17 — Advanced C# and .NET Topics

- [ ] Reflection and runtime type inspection
- [ ] Attributes and attribute-driven frameworks
- [ ] Expression trees and dynamic query construction
- [ ] Source generators and analyzers
- [ ] Dynamic typing and when it is not appropriate
- [ ] Unsafe code, pointers, and fixed memory (**Advanced; only when needed**)
- [ ] P/Invoke and native interop (**Advanced / Specialization**)
- [ ] `Span<T>`, `Memory<T>`, pipelines, and high-performance APIs
- [ ] Assembly loading, load contexts, and plugin models
- [ ] Localization, globalization, resource files, and culture-aware behavior
- [ ] Trimming, Native AOT, and compatibility constraints
- [ ] ReadyToRun and startup/performance trade-offs
- [ ] .NET runtime diagnostics tools and dump analysis

## Phase 18 — Choose a Specialization

Complete the common foundation first, then select one or more paths.

### Web and Cloud Backend (Primary Recommended Path)

- [ ] Advanced ASP.NET Core, API gateways, caching, and scale-out
- [ ] Identity provider integration and production authorization
- [ ] Messaging, distributed workflows, and cloud-native patterns
- [ ] Cloud observability, secrets, managed identity, and deployment

### Desktop Applications

- [ ] WPF or Windows Forms fundamentals
- [ ] MVVM, data binding, commands, and validation
- [ ] Packaging, updates, accessibility, and UI testing
- [ ] .NET MAUI for cross-platform UI (**Optional**)

### Game Development

- [ ] C# scripting and Unity ecosystem (**Optional**)
- [ ] Game loops, state, input, assets, and performance basics

### Data, Machine Learning, and Automation

- [ ] Data pipelines, batch processing, and file formats
- [ ] ML.NET or Python/.NET interoperability (**Optional**)
- [ ] Worker services, schedulers, and operational automation

### Library and Tooling Development

- [ ] NuGet library design, API compatibility, and semantic versioning
- [ ] CLI tools, global/local tools, and command-line UX
- [ ] Documentation, analyzers, source generators, and package publishing

---

# Part V — Projects and Completion

## Suggested Project Ladder

1. **Console utility:** parsing, validation, methods, collections, and files.
2. **Domain library:** OOP, generics, interfaces, errors, and unit tests.
3. **HTTP client:** async/await, cancellation, DI, configuration, logging,
   and resilience.
4. **CRUD Web API:** ASP.NET Core, OpenAPI, validation, and integration tests.
5. **Database-backed application:** SQL, EF Core, migrations, and
   concurrency.
6. **Production-ready service:** identity, authorization, observability,
   background work, containerization, CI/CD, and deployment.
7. **Capstone:** choose a real problem, write requirements, design the data
   model and API, implement tests, deploy it, and document operational
   decisions and limitations.

## Capstone Readiness Checklist

- [ ] Requirements and non-functional goals are documented
- [ ] Architecture and key trade-offs are explained
- [ ] Domain behavior is covered by unit tests
- [ ] API and persistence behavior are covered by integration tests
- [ ] Validation and error responses are consistent
- [ ] Authentication and authorization are correctly enforced
- [ ] Configuration and secrets are handled safely
- [ ] Logs, metrics, traces, and health checks are useful
- [ ] Database changes and deployment are repeatable
- [ ] Performance has been measured against stated requirements
- [ ] README explains setup, test, run, deploy, and known limitations

## Definition of “Job-Ready”

You are ready to build and maintain typical .NET backend applications when
you can independently:

- Explain the C# type system, async behavior, resource ownership, and common
  runtime trade-offs.
- Design, implement, test, and document an ASP.NET Core API backed by a
  relational database.
- Apply dependency injection, configuration, logging, security, and
  cancellation correctly.
- Diagnose common failures with a debugger, logs, traces, and database tools.
- Build, test, containerize, and deploy an application through a repeatable
  workflow.
- Read official documentation and evaluate unfamiliar packages and framework
  APIs critically.

## Official References

- [.NET documentation](https://learn.microsoft.com/dotnet/)
- [C# documentation](https://learn.microsoft.com/dotnet/csharp/)
- [C# language reference](https://learn.microsoft.com/dotnet/csharp/language-reference/)
- [ASP.NET Core documentation](https://learn.microsoft.com/aspnet/core/)
- [Entity Framework Core documentation](https://learn.microsoft.com/ef/core/)
- [.NET CLI overview](https://learn.microsoft.com/dotnet/core/tools/)
- [.NET architecture guides](https://learn.microsoft.com/dotnet/architecture/)
- [Microsoft Learn training](https://learn.microsoft.com/training/dotnet/)
