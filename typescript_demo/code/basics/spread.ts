namespace Spread {
  // ------------------------------------------------------
  // Arrays
  // ------------------------------------------------------
  const good = ['iron man', 'superman', 'spiderman'];
  const bad = ['magneto', 'bane'];

  const goodCopy = [...good]; // create a clone of the original

  console.log(good == goodCopy); // two different objects
  // false


  let all = [...good, ...bad];

  console.log(all);
  // ['iron man', 'superman', 'spiderman', 'magneto', 'bane']


  all = [...bad, ...good]; // order matters
  console.log(all);
  // ['magneto', 'bane', 'iron man', 'superman', 'spiderman']


  const number = [1, 2, 3];

  all = [...all, ...numbers]; // breaks our implicit type

  // ------------------------------------------------------
  // Objects
  // ------------------------------------------------------
  const hero = { name: 'batman', ability: 'rich guy' };

  const heroCopy = { ...hero };

  console.log(hero == heroCopy); // two different objects
  // false


  const newHero = { ...hero, ability: 'super strength' };

  console.log(newHero);
  // { name: 'batman', ability: 'super strength' };
}
