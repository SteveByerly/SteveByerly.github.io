namespace Destructuring {
  // ------------------------------------------------------
  // Arrays
  // ------------------------------------------------------
  const heroes = ['iron man', 'superman', 'spiderman'];

  // const bestHero = heroes[0];
  // const mehHero = heroes[1];
  // const worstHero = heroes[2];

  const [bestHero, mehHero, worstHero] = heroes;

  console.log(bestHero);
  // 'iron man'

  // ------------------------------------------------------
  // Objects
  // ------------------------------------------------------
  const hero = { name: 'batman', ability: 'rich guy' };

  // const name = hero.name;
  // const ability = hero.ability;

  const { name, ability } = hero;

  console.log(ability);
  // 'rich guy'

  const { name: newName, ...rest } = hero;

  console.log(newName);
  // 'batman'
}
