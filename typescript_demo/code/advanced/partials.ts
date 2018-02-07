namespace Partials {

  type Partial<T> = {
    [P in keyof T]?: T[P];
  }

  interface User {
    name: string;
    id: number;
  }

  const user1: User = {
    name: 'steve',
    // id: 1
  };

  type PartialUser = Partial<User>;

  const user2: PartialUser = { name: 'steve' };

  // ------------------------------------------------------
  // Advanced
  // ------------------------------------------------------

  export type UnionKeyValues<UKeys extends string, TVal> = {
    [K in UKeys]: TVal
  };

  type TestKeys = 'first' | 'second' | 'third';

  const ValueLookup: UnionKeyValues<TestKeys, string> = {
    first: 'First Key',
    second: 'Second Key',
    // third: 'Third Key',
  };

  type UnionKeyLookup<UKeys extends string> = {
    [K in UKeys]: K
  };

  const KeyLookup: UnionKeyLookup<TestKeys> = {
    first: 'first',
    second: 'second',
    third: 'third',
  };
}
