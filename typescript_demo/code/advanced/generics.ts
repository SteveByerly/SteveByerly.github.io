namespace Generics {

  // ------------------------------------------------------
  // Types / Interfaces
  // ------------------------------------------------------
  interface Dictionary<T> {
    [key: string]: T;
  }

  type Ranking = Dictionary<number>;

  const rankings: Ranking = {
    'gold': 1,
    'silver': 2,
    // 'bronze': '3',
  }

  // ------------------------------------------------------
  // Functions
  // ------------------------------------------------------

  const sortBy = <TEntity>(entities: TEntity[], sortKey: keyof TEntity) => {
    return entities.sort((a, b) => {

      if (a[sortKey] < b[sortKey]) {
        return -1;
      }

      return a[sortKey] > b[sortKey] ? 1 : 0;
    });
  };

  interface Hero {
    name: string;
  }

  const heroes = [
    { name: 'superman' },
    { name: 'batman' },
    { name: 'spiderman' },
  ];

  let sorted = sortBy<Hero>(heroes, 'name');

  sorted = sortBy(heroes, 'name');
  sorted = sortBy(heroes, 'ability'); // not a key on our interface

}
