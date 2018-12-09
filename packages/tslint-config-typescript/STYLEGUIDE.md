# [TypeScript Style Guide](https://www.npmjs.com/package/@qulix/tslint-config-typescript)

### Table of contents:
  - [Typescript specific](#Typescript-specific)
  - [Classes](#Classes)

## Typescript Specific

#### Do not use overload signatures in type declaration

Type overrides in type declarations often confuse developers and also have no semantic meaning.

```ts
// Bad
interface IFoo {
  a();
  a(x: number);
  b();
  b(x: string);
  a(x: string);
  ~~~~~~~~~~~~~  [
    All 'a' signatures
    should be adjacent
    ]
}

// Good
interface IFoo {
  a();
  a(x: number);
  b();
  b(x: string);
}
```

#### Avoid using the primitive type constructor as a type declaration

We have some reasons for that:
- We separate class types and primitive types. The class name always begins with a capital letter, then the name of the primtiv should be different and begin with a small letter like in other programming languages (C #, Java, etc.);
- We must use the same syntax for the declaration of primitive types.

```ts
// Bad
function foo(a: String) {}
                ~~~~~~     [Avoid
                using the 'String'
                as a type. Use 'string' instead]

// Good
function foo(a: string) {}

// Bad
function bar(a: Function) {}
                ~~~~~~~~   [Avoid
                using the  'Function' as a type.
                Use a specific function type,
                like '() => void']
// Good
function bar(a: () => void) {}

```

## Classes

#### Explicitly Member Access

The explicit definition of member accessor allows beginners to more easily adapt to OOP code, it also allows writing classes more semantically.

```ts
// Bad
class Foo {
  bar: number;

  baz(): void;
}

// Good
class Foo {
  public bar: number;

  private baz(): void;
}

```

#### Member Access Order

We prefer to use the following member access as shown below:

```ts

class Foo {
  public static bar: number;
  private static baz: string;

  public bax: boolean;
  private bac: null;

  private constructor() {}
  public constructor() {}

  protected bav(): void {}
  private baf(): void {}
  public bar(): void {}
}

```
