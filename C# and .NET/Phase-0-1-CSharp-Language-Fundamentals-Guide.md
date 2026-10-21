# Phase 0–1 Guide — Setup and C# Programming Fundamentals

This guide expands every topic in **Part I, Phases 0 and 1** of the
[Complete C# and .NET Learning Roadmap](./Complete-CSharp-DotNet-Roadmap.md).
It follows the same concept-by-concept style used by the existing learning
notes: explanation, why it matters, examples, key ideas, and practice.

## How to Study These Phases

For each section:

1. Read the explanation and type the examples yourself.
2. Change the example and predict what will happen before running it.
3. Build the phase project using the techniques in the section.
4. Use the review questions to check that you can explain the idea without
   relying on the example.

The examples are short, independent snippets unless a section says otherwise.
They target modern C# and a supported .NET SDK. A project's target framework
and installed SDK determine which language and library features are available.

## Phase 0 — Setup and First Program

### 0.1 The .NET SDK, runtime, and target framework

#### Concept

These three terms describe different parts of the .NET platform:

- **SDK:** The development toolset. It includes the `dotnet` command, build
  tools, templates, and usually a runtime. Use it to create, build, test, and
  publish applications.
- **Runtime:** The components needed to execute a compiled .NET application.
  It includes the CLR (Common Language Runtime) and framework libraries.
- **Target framework:** The API contract a project is built against, written
  in a project file as a Target Framework Moniker (TFM), such as `net10.0`,
  `net9.0`, or `net8.0`. It determines which .NET APIs the compiler makes
  available and which runtime family the application expects.

The SDK version and target framework are related, but they are not the same.
An installed SDK can often target more than one framework, subject to that
SDK's support and the required targeting packs. A machine can have multiple
SDKs and runtimes installed side by side.

#### Why it matters

Many setup problems are version mismatches: a project targets a framework
whose targeting pack is missing, or the machine has no compatible runtime to
run a framework-dependent published application. Checking the SDK and target
early helps distinguish these issues from errors in C# code.

#### Useful commands

```text
dotnet --info
dotnet --list-sdks
dotnet --list-runtimes
```

`dotnet --info` summarizes the installed SDK, host, runtimes, and environment.
The list commands show SDKs and runtimes installed side by side.

#### Key idea

The SDK builds the application, the target framework describes the API surface
the application uses, and a compatible runtime executes it.

### 0.2 Create, build, run, and clean a console project

#### Concept

The .NET CLI provides a repeatable way to create and operate a project. A
project is a collection of source files and build settings that produce an
output, such as an executable application or library.

#### Example workflow

```text
dotnet new console -n HelloDotNet
cd HelloDotNet
dotnet build
dotnet run
dotnet clean
```

- `dotnet new console` creates a console application from the installed
  template. `-n` supplies its name.
- `dotnet build` restores required packages when needed, compiles the project,
  and reports errors and warnings.
- `dotnet run` builds when needed and runs the project.
- `dotnet clean` removes generated build output, usually under `bin` and
  `obj`. It does not delete source code.

You can pass arguments to the program after `--`:

```text
dotnet run -- Alice
```

The separator distinguishes CLI options from arguments that belong to the
program. At this stage, it is enough to know the arguments can be read by the
application; parsing them will be covered later.

#### What is generated?

A new console project commonly includes:

- A `.csproj` project file containing build and target-framework settings.
- A `Program.cs` file containing the application's entry point.
- `obj` and `bin` directories after restore/build, containing generated
  intermediate files and outputs.

Generated files are normally not edited by hand or committed to source
control. The project file and source files are the inputs from which they can
be regenerated.

#### Key idea

Use the CLI commands to make your workflow reproducible. If the project builds
from a clean checkout using the documented commands, another developer or a
CI system can build it too.

### 0.3 Project files, source files, namespaces, and `Program.cs`

#### The project file

A `.csproj` file is an MSBuild project definition, usually written as XML.
For example:

```xml
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>enable</ImplicitUsings>
    <Nullable>enable</Nullable>
  </PropertyGroup>
</Project>
```

- `OutputType` says this project produces an executable.
- `TargetFramework` selects the framework API surface.
- `ImplicitUsings` enables common `using` directives generated by the SDK.
- `Nullable` enables nullable reference-type analysis and compiler warnings.

Exact settings differ between templates and SDK versions. Read a setting
before changing it; the project file controls how the project is compiled.

#### Source files and namespaces

C# source code is commonly stored in `.cs` files. A **namespace** groups and
qualifies related type names, reducing naming conflicts and communicating
organization:

```csharp
namespace Learning.Basics;

public class Greeter
{
    public string Greet(string name) => $"Hello, {name}!";
}
```

The fully qualified name of `Greeter` is `Learning.Basics.Greeter`. A `using`
directive lets code refer to types in a namespace without writing the entire
name each time:

```csharp
using Learning.Basics;

Greeter greeter = new();
Console.WriteLine(greeter.Greet("Sam"));
```

The namespace is a language-level name, not a directory requirement. It is
common to align namespace and folder structure for discoverability, but the
compiler does not require it.

#### `Program.cs` and top-level statements

Modern console templates use **top-level statements**, allowing executable
statements to appear directly in `Program.cs`:

```csharp
Console.WriteLine("Hello, world!");
```

The compiler generates the entry point that older C# examples wrote
explicitly:

```csharp
internal class Program
{
    private static void Main(string[] args)
    {
        Console.WriteLine("Hello, world!");
    }
}
```

Top-level statements are not a different execution model; they are concise
syntax for the program entry point. They are useful for small applications
and remain compatible with ordinary classes and methods in other files.

#### Key idea

The project file describes how to build, source files contain C# code,
namespaces name and organize types, and top-level statements provide a concise
entry point.

### 0.4 Create and use a solution

#### Concept

A **solution** groups related projects so they can be built and managed
together. Projects remain independently defined by their `.csproj` files.
For example, a solution can contain a console application, a shared library,
and tests.

#### Example

```text
dotnet new sln -n Learning
dotnet new console -n FirstApp
dotnet sln Learning.sln add FirstApp/FirstApp.csproj
dotnet sln list
dotnet build
```

The solution filename/format generated by `dotnet new sln` can vary with SDK
version and installed templates. The command above assumes the generated file
is `Learning.sln`; if your SDK creates `Learning.slnx`, use that filename
instead:

```text
dotnet sln Learning.slnx add FirstApp/FirstApp.csproj
```

`dotnet sln list` and `Get-ChildItem` (PowerShell) or the equivalent file
listing help identify the generated file. The same principle applies: add
project files to the solution, not individual `.cs` files.

#### When to use a solution

Use a solution when an application has multiple cooperating projects or you
want one command to build and test a group of projects. A single-project
experiment does not need a solution immediately.

#### Key idea

A solution is a workspace/build grouping; the project file is the unit that
defines source compilation and project-specific settings.

### 0.5 Debug with the IDE

#### Concept

A debugger lets you pause a running program and inspect its state. It is
usually more effective than guessing from output or adding many temporary
print statements.

#### Core debugger tools

- **Breakpoint:** Pauses execution when a line is reached. Conditional
  breakpoints can pause only when a condition is true.
- **Continue:** Runs until the next breakpoint or program end.
- **Step over:** Executes the current line without entering a called method.
- **Step into:** Enters a method call to inspect its execution.
- **Step out:** Finishes the current method and returns to its caller.
- **Locals:** Shows variables in the current scope.
- **Watch:** Evaluates selected expressions while paused.
- **Call stack:** Shows the chain of method calls that led to the current
  location.
- **Exception settings:** Control whether the debugger breaks when exceptions
  are thrown, including exceptions that may later be caught.

#### A debugging routine

1. Reproduce the issue with a small, known input.
2. Place a breakpoint before the suspicious behavior.
3. Step through the code and compare actual values with expected values.
4. Follow the call stack when execution arrived from an unexpected place.
5. Fix the cause, then rerun the program and any relevant tests.

#### Key idea

The debugger shows what the program is doing, not what you intended it to do.
Inspect inputs, intermediate values, branches, and method calls.

### 0.6 Use Git for basic source control

#### Concept

Git records changes to source files over time. It enables you to compare
versions, return to known working states, work on isolated branches, and
collaborate.

#### Core commands

```text
git status
git diff
git add Program.cs
git commit -m "Add greeting program"
git branch
git switch -c add-input
```

- `git status` reports changed, staged, and untracked files.
- `git diff` displays unstaged changes; `git diff --staged` displays staged
  changes.
- `git add` stages selected changes for the next commit.
- `git commit` records the staged snapshot with a description.
- `git branch` lists branches.
- `git switch -c` creates and switches to a branch.

Before committing, check `git status` and inspect the diff. Stage only the
files that belong in that change.

#### Generated files and `.gitignore`

Build outputs such as `bin` and `obj`, IDE-local settings, and secrets should
not normally be committed. A `.gitignore` file specifies files Git should
ignore. Start from the official Visual Studio / .NET ignore template or the
one generated by your IDE, then review it rather than assuming every file is
covered.

Do not put passwords, API keys, connection-string credentials, or private
certificates in source control. A `.gitignore` does not remove a secret that
has already been committed.

#### Key idea

Commit small, understandable units of work. Git is most useful when its
history tells a clear story of what changed and why.

### 0.7 Understand compiler errors, warnings, and runtime exceptions

#### Compiler errors

An **error** prevents the compiler from producing a successful build. Common
causes include a misspelled identifier, incompatible types, a missing
semicolon, or a method call with the wrong arguments.

#### Warnings

A **warning** identifies code that compiles but may be incorrect, unsafe, or
maintainability-prone. For example, nullable analysis can warn that a value
might be `null` where a non-null value is expected. Warnings are not all
equally serious, but they should be understood rather than hidden.

#### Runtime exceptions

An **exception** occurs while the application is running, for example when
code tries to parse invalid data with a throwing parser or indexes beyond an
array's bounds. Some exceptions can be handled at a meaningful boundary;
others indicate a programming bug that should be fixed.

#### Reading a diagnostic

1. Read the first error or warning and identify the file and line.
2. Read the message, then inspect the reported code and nearby context.
3. Fix one root cause at a time. Later diagnostics may disappear as a result.
4. Rebuild and confirm the error is resolved; do not silence it without
   understanding why.

#### Key idea

Compiler errors prevent a valid build, warnings report suspicious code, and
exceptions report failures during execution. Their timing and remedies differ.

### Phase 0 Practice Project — First Useful Console Program

Create a program that asks for a user's name and birth year, validates the
input, and prints a friendly result.

Acceptance criteria:

- [ ] The project builds and runs from the CLI.
- [ ] The user can enter a name and a whole-number year.
- [ ] Invalid input produces a helpful message rather than an unhandled
  exception.
- [ ] The program contains at least one breakpoint-worthy line; use the
  debugger to inspect the input.
- [ ] Build output is not committed to Git.
- [ ] The README or commit message records the commands needed to run it.

Do not worry about calculating an exact age yet; date and boundary handling
will be easier after the value and parsing sections in Phase 1.

---

## Phase 1 — Programming Fundamentals in C#

### 1.1 Statements, expressions, blocks, comments, and formatting

#### Concept

- An **expression** produces a value. For example, `2 + 3` produces `5`, and
  `name.Length` produces an integer.
- A **statement** performs an action. For example, `Console.WriteLine(name);`
  calls a method and ends with a semicolon.
- A **block** groups statements inside braces. Blocks define scopes for local
  variables and are used by methods, conditionals, and loops.

```csharp
int total = 2 + 3;               // declaration statement; initializer is an expression
if (total > 4)                   // condition is an expression
{
    Console.WriteLine(total);    // statement inside a block
}
```

#### Comments and formatting

Use `//` for a line comment and `/* ... */` for a block comment. XML
documentation comments use `///` and are covered in the methods section.
Comments should explain intent or a non-obvious constraint, not repeat what
clear code already says.

Consistent indentation, braces, spacing, and naming make code easier to scan
and review. IDE formatting and `dotnet format` can apply project conventions.
Follow the repository's existing style when contributing to an existing
project.

#### Key idea

Expressions compute values; statements compose actions; blocks organize
statements and determine local scope.

### 1.2 Identifiers, keywords, naming, and namespaces

#### Concept

An **identifier** is a name for a variable, method, type, or other program
element. Identifiers generally start with a letter or underscore and may
contain letters, digits, or underscores. C# is case-sensitive: `total` and
`Total` are different identifiers.

**Keywords** such as `class`, `if`, `return`, and `namespace` have language
meaning. A keyword can be used as an identifier by prefixing it with `@`, but
this is rarely desirable.

#### Common C# naming conventions

- `PascalCase` for public types and members: `Customer`, `CalculateTotal`.
- `camelCase` for local variables and parameters: `itemCount`, `customer`.
- `PascalCase` for constants is common in .NET code: `MaximumRetries`.
- Private instance fields often use `_camelCase`: `_itemCount`. Follow the
  project's established convention.

Namespaces qualify type names and group related APIs. File-scoped syntax
(`namespace Learning;`) is a concise alternative to wrapping the file in a
namespace block.

#### Key idea

Names are part of the code's interface to other developers. Choose precise,
consistent names, and remember that capitalization changes identity.

### 1.3 Variables, `const`, and `readonly`

#### Variables

A variable associates a name with a value of a particular type:

```csharp
int score = 10;
score = 12;
```

The declaration determines the variable's type. The value can be reassigned
only with a value compatible with that type.

#### `const`

A `const` field or local has a value fixed at compile time:

```csharp
const int MaximumAttempts = 5;
```

Constants are implicitly static when declared as class members and are
substituted into consuming code at compile time. Use them for values that
truly never change and are representable as compile-time constants (such as
primitive values and strings).

#### `readonly`

A `readonly` field can be assigned at its declaration or from a constructor:

```csharp
public class Session
{
    private readonly Guid _id = Guid.NewGuid();

    public Session(Guid id)
    {
        _id = id;
    }
}
```

It prevents reassignment of the field after construction; it does not make an
object referenced by that field deeply immutable. A `readonly` reference to a
mutable object can still refer to an object whose contents change.

#### Key idea

Use a normal variable for a value that changes, `const` for a compile-time
constant, and `readonly` for a field initialized once at declaration or
construction.

### 1.4 Type inference with `var`

#### Concept

`var` tells the compiler to infer a local variable's static type from its
initializer:

```csharp
var message = "Ready";       // inferred as string
var count = 3;               // inferred as int
```

This is still statically typed C#. `message` does not become a variable that
can hold arbitrary types later:

```csharp
var count = 3;
// count = "three";          // compile-time error: count is an int
```

`var` requires an initializer because the compiler needs that expression to
infer the type. It is valid only for local variables (including some local
declarations such as `foreach` variables), not as a way to declare a field or
method parameter.

#### When to use it

Use `var` when the type is obvious from the right-hand side or the type name
would add clutter, such as a long generic construction. Prefer an explicit
type when it makes the meaning clearer, particularly when the initializer
does not reveal the intended type.

#### Key idea

`var` is compile-time type inference, not dynamic typing.

### 1.5 Value types, reference types, and assignment

#### Concept

Types describe how values behave when copied and passed:

- **Value types** include numeric types, `bool`, `char`, structs, and enums.
  Assignment copies the value.
- **Reference types** include classes, arrays, delegates, and `string`.
  A variable contains a reference to an object; assignment copies that
  reference.

Example:

```csharp
int firstNumber = 10;
int secondNumber = firstNumber;
secondNumber = 20;
Console.WriteLine(firstNumber); // 10

int[] firstArray = [1, 2];
int[] secondArray = firstArray;
secondArray[0] = 99;
Console.WriteLine(firstArray[0]); // 99: both variables refer to the same array
```

For reference types, assigning `null` means the variable currently refers to
no object (subject to nullable annotations and analysis). Multiple references
can point to the same mutable object, so a change through one reference can
be observed through another.

The stack/heap explanation is a useful first approximation, not a complete
definition of value/reference semantics. The language's type and lifetime
rules matter more than assuming every value lives in a particular memory
region.

#### Key idea

Assignment copies a value or copies an object reference, depending on the
type. Copying a reference does not clone the referenced object.

### 1.6 Numeric types, ranges, precision, division, and overflow

#### Common numeric types

| Type | Typical use | Important property |
|---|---|---|
| `byte`, `short`, `int`, `long` | Whole numbers | Fixed ranges; integer arithmetic |
| `float`, `double` | Approximate measurements and scientific calculations | Binary floating point; many decimal fractions are approximate |
| `decimal` | Financial or decimal business values | Base-10-oriented precision; larger cost/storage than `double` |

The exact ranges are available through constants such as `int.MinValue`,
`int.MaxValue`, and `long.MaxValue`. Choose a type based on the domain and
required range and precision, not simply on using the smallest type.

#### Integer and floating-point division

When both operands are integral, division is integral and the fractional part
is discarded:

```csharp
int whole = 7 / 2;          // 3
double approximate = 7 / 2; // 3.0: the division happened as integers first
double fraction = 7.0 / 2;  // 3.5
```

At least one operand must be floating point before division if a fractional
result is required. A cast after integer division cannot restore a discarded
fraction.

#### Precision

`float` and `double` use binary floating point, so they are appropriate for
many scientific and approximate calculations but may not represent decimal
fractions exactly. For example, repeated arithmetic can accumulate small
rounding differences. `decimal` is often a better fit for monetary values
where decimal arithmetic is expected, but it is not an unlimited-precision
type and does not automatically implement currency rules or rounding policy.

#### Overflow

An integral calculation can exceed the type's representable range. In
unchecked arithmetic, the result may wrap according to the operation and
context; in checked arithmetic, overflow raises `OverflowException`.
Floating-point overflow generally produces an infinity value rather than the
same checked integer behavior.

#### Key idea

Select numeric types intentionally, know whether division is integral, and
define how the application handles range and rounding.

### 1.7 `bool`, `char`, `string`, date/time types, and `Guid`

#### `bool`

`bool` represents `true` or `false`. Conditions in C# require a boolean
expression; unlike some languages, an integer is not implicitly treated as
true or false.

#### `char`

`char` is a 16-bit UTF-16 code unit, written with single quotes:

```csharp
char initial = 'A';
```

Some Unicode characters, such as many emoji, require more than one UTF-16
code unit. Therefore a `char` is not always a complete user-perceived
character. For general text, use `string` and appropriate Unicode-aware
operations.

#### `string`

`string` represents a sequence of UTF-16 code units and is immutable. An
operation that appears to change a string produces a new string:

```csharp
string greeting = "Hello";
greeting += ", world"; // greeting now refers to a newly produced string
```

Immutability makes strings safer to share, but repeated concatenation in a
large loop can allocate many intermediate strings. Later, use `StringBuilder`
or another suitable approach for that use case.

#### Date and time

- `DateTime` represents a date and time with a `Kind` that may be `Local`,
  `Utc`, or `Unspecified`. It is easy to mishandle if the kind and time-zone
  meaning are unclear.
- `DateTimeOffset` represents a date and time together with an offset from
  UTC. It is often useful for timestamps that identify an instant.
- `TimeSpan` represents a duration, such as 30 minutes.

An offset is not a full time-zone rule set: daylight-saving transitions and
regional rules require a time-zone identifier and `TimeZoneInfo`. For
timestamps, a common safe approach is to store/communicate UTC instants and
convert for display at the boundary.

#### `Guid`

`Guid` is a 128-bit identifier, often used to identify entities across
systems:

```csharp
Guid id = Guid.NewGuid();
bool parsed = Guid.TryParse("d2719d2e-49c9-4d54-9f5d-ef64201d9b38", out Guid value);
```

A GUID is useful for identity, but it is not automatically a security token
or a replacement for authorization.

#### Key idea

Know the meaning and limitations of a type: a timestamp needs a time-zone
policy, a `char` is a UTF-16 unit, and a GUID identifies data but does not
grant permission.

### 1.8 Literals, interpolation, verbatim/raw strings, and formatting

#### Literals

A **literal** is a value written directly in source code:

```csharp
int count = 42;
bool enabled = true;
string name = "Avery";
char grade = 'A';
```

Numeric suffixes can select or clarify a numeric type, for example `L` for a
`long`, `f` for a `float`, and `m` for a `decimal`:

```csharp
long population = 8_000_000_000L;
decimal price = 19.95m;
```

Underscores can make long numeric literals easier to read.

#### String interpolation

Prefix a string with `$` to insert expressions inside braces:

```csharp
string name = "Avery";
int score = 17;
string message = $"{name} scored {score}.";
```

Format specifiers can control display:

```csharp
decimal amount = 1234.5m;
Console.WriteLine($"Amount: {amount:C}");
Console.WriteLine($"Ratio: {0.125:P1}");
```

The output of formats such as currency depends on the active culture. Use an
explicit culture when output must be stable for storage or a protocol; use
the user's culture for localized presentation.

#### Escaped and verbatim strings

An ordinary string uses backslash escapes:

```csharp
string line = "First line\nSecond line";
string path = "C:\\Learning\\sample.txt";
```

A verbatim string, prefixed with `@`, treats backslashes literally and
represents a quote by doubling it:

```csharp
string path = @"C:\Learning\sample.txt";
string quote = @"She said, ""Hello.""";
```

#### Raw string literals

Raw string literals use three or more quote characters and preserve
characters such as backslashes and quotes without ordinary escaping. They are
especially useful for multiline text and embedded JSON:

```csharp
string json = """
    {
      "name": "Avery",
      "active": true
    }
    """;
```

Raw string literals require C# 11 or later. The project SDK/language version
must support them.

#### Key idea

Choose the string form that makes the content readable, and distinguish
human-facing localized formatting from invariant machine-readable formats.

### 1.9 Conversions, casts, parsing, and culture

#### Conversions and casts

An **implicit conversion** is allowed by the language without explicit
syntax when it is considered safe for the target type:

```csharp
int small = 42;
long larger = small;
```

An **explicit cast** documents a requested conversion that could lose
information or is not implicit:

```csharp
double measurement = 12.8;
int truncated = (int)measurement; // 12; fractional part is discarded
```

A cast does not validate that a value is meaningful for the application.
Check ranges and domain rules where needed.

#### Parsing text

Use `Parse` when invalid input should be exceptional, and `TryParse` when
invalid input is an expected possibility:

```csharp
string input = "42";
if (int.TryParse(input, out int value))
{
    Console.WriteLine($"Accepted: {value}");
}
else
{
    Console.WriteLine("Enter a whole number.");
}
```

`TryParse` returns whether conversion succeeded and writes the parsed value
to the `out` parameter. On failure, do not use the output as if it were valid.

#### Culture

Text such as `1,234.50` may be interpreted differently under different
cultures. Human-entered numbers should normally follow a documented user
culture. Data formats and protocols should use their specified invariant
format or parser overloads rather than the machine's current culture.

For example, use `CultureInfo.InvariantCulture` for stable machine-oriented
formatting:

```csharp
using System.Globalization;

decimal amount = 1234.50m;
string stable = amount.ToString(CultureInfo.InvariantCulture);
```

Do not assume that every comma is a thousands separator or every period is a
decimal separator.

#### Key idea

Conversions change representation; parsing turns text into typed data.
Treat failed parsing as a normal input-validation path when user input is
involved, and make culture explicit at system boundaries.

### 1.10 `checked` and `unchecked` arithmetic

#### Concept

`checked` requests overflow checking for integral arithmetic and conversions
within its scope:

```csharp
int maximum = int.MaxValue;

try
{
    int next = checked(maximum + 1);
}
catch (OverflowException)
{
    Console.WriteLine("The result is outside the Int32 range.");
}
```

`unchecked` explicitly uses unchecked behavior:

```csharp
int wrapped = unchecked(int.MaxValue + 1);
```

The default overflow context for integral arithmetic depends on compiler
settings and context; do not rely on an assumed default when correctness
depends on overflow detection. `checked` applies to integral operations and
conversions, not as general validation for floating-point values.

#### When it matters

Overflow checks matter for counters, monetary/quantity calculations, parsing
or converting untrusted values, and any calculation where wraparound would
be a correctness or security problem. Validate the domain range as well as
the machine type's range.

#### Key idea

Use checked arithmetic when overflow must be detected; unchecked behavior
should be intentional, not accidental.

### 1.11 Nullable value types and null basics

#### `null`

`null` represents the absence of an object reference. A reference-type
variable may or may not be allowed to contain null depending on its nullable
annotation and compiler analysis:

```csharp
string title = "Guide";       // intended to be non-null
string? subtitle = null;      // absence is expected
```

Nullable reference types are compiler analysis and annotations; they do not
create a different runtime representation for `string`. A nullable warning
asks you to account for a possible missing value.

#### Nullable value types

Value types normally always have a value. Add `?` to allow a value type to
also represent absence:

```csharp
int? selectedAge = null;
selectedAge = 30;

if (selectedAge.HasValue)
{
    Console.WriteLine(selectedAge.Value);
}
```

Pattern matching is another concise way to check and extract a value:

```csharp
if (selectedAge is int age)
{
    Console.WriteLine($"Selected age: {age}");
}
```

`int?` is shorthand for `Nullable<int>`. Nullable value types support
`HasValue`, `Value`, and `GetValueOrDefault`; accessing `Value` when no value
is present throws `InvalidOperationException`.

#### Null-handling operators

```csharp
string? input = Console.ReadLine();
int length = input?.Length ?? 0;
```

- `?.` accesses a member only when its receiver is not null; otherwise the
  result is null.
- `??` provides a fallback when the left operand is null.
- `!` (null-forgiving operator) suppresses a nullable warning but does not
  check or change the runtime value. Use it only when you can justify the
  guarantee.

#### Key idea

Represent absence explicitly and handle it at the point where the value is
used. A nullable annotation helps static analysis but does not make a runtime
null impossible.

### 1.12 Operators and precedence

#### Common operator families

| Family | Examples | Purpose |
|---|---|---|
| Arithmetic | `+`, `-`, `*`, `/`, `%` | Numeric calculation |
| Comparison | `==`, `!=`, `<`, `>`, `<=`, `>=` | Compare values |
| Logical | `&&`, `||`, `!` | Combine or negate boolean conditions |
| Assignment | `=`, `+=`, `-=`, `++`, `--` | Assign or update a variable |
| Conditional | `condition ? a : b` | Select between two expressions |
| Null handling | `?.`, `??`, `??=` | Safely access or supply null fallback |
| Bitwise/shift | `&`, `|`, `^`, `~`, `<<`, `>>` | Work with bits or flags |

#### Short-circuiting

`&&` stops evaluating once the left side is false; `||` stops once the left
side is true:

```csharp
if (input is not null && input.Length > 0)
{
    Console.WriteLine(input);
}
```

The second condition is safe because it is evaluated only when `input` is
not null.

#### Precedence

Operators have precedence rules, but complex expressions are easier to
maintain when grouped explicitly:

```csharp
bool allowed = (isAdmin || isOwner) && accountIsActive;
```

Use parentheses to communicate intent, particularly when combining different
operator families. Do not depend on readers remembering a long precedence
table.

#### Key idea

Operators are compact syntax with defined evaluation rules. Short-circuit
behavior is useful for safe guards; parentheses improve clarity.

### 1.13 `if`, `else`, `switch`, switch expressions, and pattern matching

#### `if` / `else`

Use `if` when behavior depends on a boolean condition:

```csharp
if (score >= 60)
{
    Console.WriteLine("Pass");
}
else
{
    Console.WriteLine("Try again");
}
```

Conditions must evaluate to `bool`. Braces are recommended even for a
one-line body because they make future edits safer and consistent.

#### `switch` statement

Use a `switch` statement when selecting among distinct cases:

```csharp
switch (command)
{
    case "start":
        Console.WriteLine("Starting");
        break;
    case "stop":
        Console.WriteLine("Stopping");
        break;
    default:
        Console.WriteLine("Unknown command");
        break;
}
```

Each non-empty case normally ends with a control transfer such as `break`,
`return`, or `throw`; C# avoids implicit fall-through between ordinary
non-empty cases.

#### Switch expression

A switch expression computes a value and can be assigned or returned:

```csharp
string label = status switch
{
    0 => "Pending",
    1 => "Complete",
    _ => "Unknown"
};
```

The discard pattern `_` is a catch-all case. A switch expression must be
exhaustive; omitting a possible case can cause a runtime
`SwitchExpressionException`.

#### Pattern matching

Patterns test a value's shape or properties and can bind a variable:

```csharp
if (input is string text && text.Length > 0)
{
    Console.WriteLine(text);
}

string category = temperature switch
{
    < 0 => "Below freezing",
    >= 0 and < 20 => "Cool",
    >= 20 => "Warm"
};
```

Patterns reduce nested casts and make conditions more descriptive. Start with
constant, type, relational, and logical patterns; more advanced patterns are
introduced later in the roadmap.

#### Key idea

Use `if` for conditional paths, `switch` for multiple alternatives, and a
switch expression when the alternatives produce a value.

### 1.14 Loops: `for`, `foreach`, `while`, and `do`

#### `for`

Use `for` when you need an index or explicit initialization/update:

```csharp
for (int index = 0; index < 3; index++)
{
    Console.WriteLine(index);
}
```

The initializer runs once, the condition is tested before every iteration,
and the iterator expression runs after each completed body.

#### `foreach`

Use `foreach` to visit each element in a sequence:

```csharp
string[] names = ["Mina", "Ravi", "Alex"];
foreach (string name in names)
{
    Console.WriteLine(name);
}
```

It avoids manual index bookkeeping and is usually clearer when the index is
not needed. Modifying a collection during enumeration may be disallowed or
may invalidate the enumerator, depending on the collection.

#### `while`

Use `while` when the number of iterations is not known in advance and the
condition should be checked before each iteration:

```csharp
int remaining = 3;
while (remaining > 0)
{
    Console.WriteLine(remaining);
    remaining--;
}
```

#### `do`

Use `do` when the body must execute at least once; the condition is checked
after the body:

```csharp
string? answer;
do
{
    Console.Write("Enter yes or no: ");
    answer = Console.ReadLine();
}
while (answer is not ("yes" or "no"));
```

In real input loops, also account for end-of-input: `Console.ReadLine()` can
return `null`.

#### Avoiding infinite loops

Check that the loop state changes and that the exit condition can eventually
become false. An infinite loop may be intentional for a service or event
loop, but it should have a shutdown or cancellation mechanism.

#### Key idea

Choose a loop based on whether you need an index, whether the count is known,
and whether the body must run at least once.

### 1.15 `break`, `continue`, and early returns

- `break` exits the nearest enclosing loop or `switch`.
- `continue` skips the rest of the current loop iteration and proceeds to
  the next one.
- `return` exits the current method, optionally returning a value.

```csharp
foreach (int number in numbers)
{
    if (number < 0)
    {
        continue; // ignore negative values
    }

    if (number == 0)
    {
        break; // stop searching
    }

    Console.WriteLine(number);
}
```

Early returns can make validation and guard clauses easier to read:

```csharp
static string Describe(string? value)
{
    if (value is null)
    {
        return "No value";
    }

    return $"Value: {value}";
}
```

Avoid deeply nested control flow when a clear `continue`, `break`, or
guard-clause return expresses the intent better.

### 1.16 Arrays: declare, initialize, index, iterate, and use multiple dimensions

#### Concept

An array stores a fixed number of elements of one element type. Its length is
set when created and exposed by `Length`. Array indexes start at zero, so an
array of length `n` has indexes from `0` to `n - 1`.

```csharp
int[] scores = new int[3];
scores[0] = 80;
scores[1] = 95;
scores[2] = 72;

int[] otherScores = [80, 95, 72]; // collection expression, supported by modern C#
```

Reading or writing outside the valid range throws `IndexOutOfRangeException`.
Array elements receive their type's default value when the array is created
(for example, `0` for `int` and `null` for a reference type).

#### Iterating

```csharp
for (int index = 0; index < scores.Length; index++)
{
    Console.WriteLine($"scores[{index}] = {scores[index]}");
}

foreach (int score in scores)
{
    Console.WriteLine(score);
}
```

Use a `for` loop when the index is important; use `foreach` when only the
elements matter.

#### Multidimensional and jagged arrays

A rectangular two-dimensional array has rows and columns:

```csharp
int[,] grid =
{
    { 1, 2, 3 },
    { 4, 5, 6 }
};

Console.WriteLine(grid[1, 2]); // 6
```

A jagged array is an array whose elements are themselves arrays; rows may
have different lengths:

```csharp
int[][] jagged =
[
    [1, 2],
    [3, 4, 5]
];
```

Use `GetLength(dimension)` for a particular dimension of a rectangular
array. Use `Length` for the total number of elements.

#### Key idea

Arrays are fixed-size, zero-indexed sequences. Validate indexes and use
`foreach` unless index-based work is actually needed.

### 1.17 Basic string operations and immutability

#### Common operations

```csharp
string text = "  C# and .NET  ";
string trimmed = text.Trim();
bool startsWithCSharp = trimmed.StartsWith("C#", StringComparison.Ordinal);
string upper = trimmed.ToUpperInvariant();
string part = trimmed.Substring(0, 2);
string[] words = trimmed.Split(' ');
```

Useful operations include `Length`, indexing, `Contains`, `StartsWith`,
`EndsWith`, `Substring`, `Replace`, `Split`, `Join`, `Trim`, and comparison
methods. Always check the valid index/range before indexing or taking a
substring.

#### Comparison

Text comparison rules vary by purpose. Use an explicit `StringComparison`
when comparing identifiers, protocol tokens, file extensions, or other
machine-oriented strings:

```csharp
bool sameCommand = string.Equals(
    enteredCommand,
    "exit",
    StringComparison.OrdinalIgnoreCase);
```

Use culture-aware comparison for user-facing natural-language sorting or
search when it is appropriate. Do not assume `==` implements every desired
linguistic comparison rule.

#### Immutability and repeated concatenation

Strings cannot be modified in place. A call such as `Replace` returns a new
string and leaves the original unchanged. For a few concatenations,
interpolation or `+` is clear. For repeated accumulation in a large loop,
consider `StringBuilder` to reduce intermediate allocations.

#### Key idea

Strings are immutable text values. Choose comparison rules for the problem,
and validate indexes and substring lengths.

### 1.18 Console input, output, and simple validation

#### Output

`Console.Write` writes without a trailing newline; `Console.WriteLine`
writes a newline. Interpolation makes simple output readable:

```csharp
string name = "Mina";
Console.WriteLine($"Welcome, {name}.");
```

#### Input

`Console.ReadLine()` reads one line of text and returns `string?`: it may
return `null` when input ends. Never assume input is present or valid:

```csharp
Console.Write("Enter a whole number: ");
string? input = Console.ReadLine();

if (int.TryParse(input, out int number))
{
    Console.WriteLine($"You entered {number}.");
}
else
{
    Console.WriteLine("That was not a valid whole number.");
}
```

#### Validation

Validation checks whether input meets syntactic and domain requirements.
Parsing `-5` as an integer succeeds, but a positive quantity may still be
required:

```csharp
if (int.TryParse(input, out int quantity) && quantity > 0)
{
    Console.WriteLine($"Quantity accepted: {quantity}");
}
else
{
    Console.WriteLine("Enter a positive whole number.");
}
```

Keep the input loop clear, report what the user can do next, and distinguish
end-of-input from an invalid line when the application needs to support
redirected input or automated scripts.

### 1.19 Methods: declare, call, return, and choose parameters

#### Concept

A method packages a named operation. It may accept inputs (parameters) and
produce a result (return value):

```csharp
static int Add(int left, int right)
{
    return left + right;
}

int sum = Add(3, 4);
```

`void` indicates that a method does not return a value. A method should
ideally perform a clearly named task and expose the inputs and result needed
by its caller.

#### Parameters and return values

The declaration names and types its parameters. The caller supplies
**arguments** when calling the method. The return type describes the result
or is `void`:

```csharp
static bool IsPositive(int value)
{
    return value > 0;
}
```

`return` exits the method immediately. Every path through a non-`void` method
must produce a value of the declared return type.

#### Overloads

Methods can share a name if their parameter lists differ:

```csharp
static int Multiply(int value, int factor) => value * factor;
static double Multiply(double value, double factor) => value * factor;
```

The compiler chooses an overload based on the argument types and overload
resolution rules. Return type alone cannot distinguish overloads.

#### Optional and named arguments

An optional parameter has a default value:

```csharp
static string Greet(string name, string greeting = "Hello")
{
    return $"{greeting}, {name}!";
}
```

Named arguments make a call's intent explicit and allow arguments to be
supplied by name:

```csharp
string message = Greet(name: "Avery", greeting: "Welcome");
```

Optional parameters are part of a method's call-site contract; changing
defaults in a library can have compatibility implications because callers
may compile the default value into their code.

#### Expression-bodied methods

For a simple single-expression method, use `=>`:

```csharp
static int Square(int value) => value * value;
```

Use a block body when validation, multiple statements, or branching makes it
clearer.

### 1.20 Pass-by-value, `ref`, `out`, and `in`

#### Default: pass by value

C# passes arguments by value by default. For a value type, the value is
copied. For a reference type, the reference is copied, so a method can mutate
the shared object, but reassigning its local parameter does not reassign the
caller's variable:

```csharp
static void ChangeFirst(int[] values)
{
    values[0] = 99;          // changes the shared array
    values = [1, 2, 3];      // reassigns only the local parameter
}
```

This distinction is fundamental: a reference-type argument is still passed
by value unless a by-reference modifier is used.

#### `ref`

`ref` passes a variable by reference. The caller must initialize it before
the call, and the method may read and assign it:

```csharp
static void Increment(ref int value) => value++;

int count = 3;
Increment(ref count);
```

Use `ref` only when changing the caller's variable is part of the intended
API.

#### `out`

`out` is for a method to provide a value to the caller. The caller does not
need to initialize the variable first; the method must assign it on every
normal return path:

```csharp
static bool TryGetPositive(string? input, out int value)
{
    if (int.TryParse(input, out int parsed) && parsed > 0)
    {
        value = parsed;
        return true;
    }

    value = 0;
    return false;
}
```

The familiar `TryParse` pattern uses `out` for the parsed value and a `bool`
for success.

#### `in`

`in` passes a variable by read-only reference. The method can read but should
not assign the parameter. It can avoid copying some large value types, but
has restrictions and can complicate APIs; use it only when measurement or a
clear API need justifies it.

#### Key idea

Default parameters are passed by value. `ref` exposes a caller variable for
reading and writing, `out` returns a value, and `in` provides read-only
by-reference access.

### 1.21 Local variables, scope, lifetime, and definite assignment

#### Scope

The **scope** of a local is the region of code where its name can be used.
A variable declared inside a block is normally unavailable outside that
block:

```csharp
if (true)
{
    int localValue = 10;
}
// localValue is not in scope here.
```

Use the narrowest practical scope so values are not visible where they are
not needed.

#### Lifetime

Lifetime is how long a value remains available at runtime. Scope and lifetime
are related but not identical. A captured local, for example, can remain
alive beyond the block in which it was declared. At this stage, avoid
depending on memory-layout assumptions; reason in terms of language scope
and object reachability.

#### Definite assignment

C# requires a local variable to be assigned before it is read:

```csharp
int result;
if (int.TryParse("12", out result))
{
    Console.WriteLine(result);
}
```

The compiler analyzes control flow to ensure a local has a value on every
path where it is used. This catches many use-before-initialization bugs at
build time.

### 1.22 Local functions and recursion

#### Local functions

A local function is declared inside another method and is available within
that containing scope:

```csharp
static int SumPositive(int[] values)
{
    int IsPositive(int value) => value > 0;

    int sum = 0;
    foreach (int value in values)
    {
        if (IsPositive(value))
        {
            sum += value;
        }
    }

    return sum;
}
```

Local functions are useful when a helper belongs only to one operation. Do
not nest functions simply to avoid giving a reusable operation a clear
method-level name.

#### Recursion

Recursion is when a method solves a problem by calling itself on a smaller
problem. Every correct recursive algorithm needs:

1. A **base case** that finishes without another recursive call.
2. A **recursive case** that makes progress toward that base case.

```csharp
static int Factorial(int value)
{
    if (value < 0)
    {
        throw new ArgumentOutOfRangeException(nameof(value));
    }

    if (value <= 1) // base case
    {
        return 1;
    }

    return value * Factorial(value - 1); // progress toward base case
}
```

Without a reachable base case, recursion may continue until a
`StackOverflowException`, which generally cannot be recovered from safely.
Deep recursion can also use substantial call-stack space. For a large or
unbounded input, an iterative approach may be safer.

### 1.23 XML documentation comments and readable methods

#### XML documentation comments

Three slashes above a public API produce structured documentation comments
that IDEs and documentation tools can display:

```csharp
/// <summary>Returns the larger of two integer values.</summary>
/// <param name="left">The first value to compare.</param>
/// <param name="right">The second value to compare.</param>
/// <returns>The greater value, or either value when they are equal.</returns>
static int Max(int left, int right) => left >= right ? left : right;
```

Common XML tags include `<summary>`, `<param>`, `<returns>`, `<exception>`,
`<remarks>`, and `<see cref="..."/>`. Document public APIs and non-obvious
contracts; do not write comments that simply restate the method name.

#### Readable method design

- Give a method one clear responsibility and a name that describes the
  observable behavior.
- Keep parameter lists understandable; group related data when that makes
  the model clearer.
- Validate assumptions at a well-defined boundary.
- Prefer returning a result over changing several unrelated pieces of
  caller-owned state.
- Make exceptional behavior explicit and use appropriate types for expected
  outcomes.
- Keep methods small enough to understand, but do not split every line into a
  separate helper without a reason.

### Phase 1 Practice Project — Unit Converter or Number-Guessing Game

Build one small command-line program using methods for input, validation,
calculation, and output.

Suggested requirements:

- [ ] Present a clear prompt and accept input from `Console.ReadLine()`.
- [ ] Use `TryParse` and handle missing or invalid input without an
  unhandled exception.
- [ ] Apply domain validation after parsing (for example, a positive value
  or a supported menu choice).
- [ ] Use at least one array or loop, and choose loop/control-flow constructs
  that fit the problem.
- [ ] Put calculation or decision logic into methods that return useful
  values.
- [ ] Use appropriate numeric types and explain any range/rounding decisions.
- [ ] Format output clearly; make culture assumptions explicit if output is
  intended for a machine.
- [ ] Use the debugger to inspect a successful path and an invalid-input path.
- [ ] Build and run the application with `dotnet` CLI commands.

#### Suggested method boundaries

For a unit converter, methods could:

- Parse a menu choice.
- Parse and validate a measurement.
- Convert between units.
- Format and display the result.

For a guessing game, methods could:

- Read a valid guess.
- Compare a guess with the target.
- Run one round and report the number of attempts.

The goal is not to create the largest application. The goal is to practice
types, control flow, methods, validation, and debugging together.

### Review Questions

Try to answer these without looking at the explanations:

1. How are the SDK, runtime, and target framework different?
2. What does `dotnet build` do, and how is it different from `dotnet run`?
3. What role do the `.csproj`, a solution, and a namespace each play?
4. What does `var` mean in C#? Is it dynamic typing?
5. What happens when a reference-type variable is assigned to another
   variable and the referenced object is mutated?
6. Why can `7 / 2` produce `3` even when the result is assigned to a
   `double`?
7. When would you use `decimal` instead of `double`?
8. Why is `TryParse` usually preferable for expected user-input mistakes?
9. What is the difference between an empty reference and a nullable value
   type?
10. When should you choose `foreach` rather than `for`?
11. How do `break`, `continue`, and `return` differ?
12. What does pass-by-value mean when the argument is an array?
13. What must every recursive method have, and what can happen if recursion
    does not terminate?
14. How does the debugger's call stack help diagnose unexpected behavior?

### Phase Completion Checklist

- [ ] I can explain what is installed when I install the .NET SDK.
- [ ] I can create, build, run, and clean a console app without relying only
  on IDE buttons.
- [ ] I can read a project file and identify its target framework.
- [ ] I can use a breakpoint and inspect variables and the call stack.
- [ ] I can explain values, variables, common types, and `null`.
- [ ] I can select control flow and loop constructs appropriate to a problem.
- [ ] I can write and call methods with parameters and return values.
- [ ] I can safely parse and validate console input.
- [ ] I can complete the practice project and explain the important decisions
  in its code.
