type NumberOrString = number | string;

type Direction = 'north' | 'south' | 'east' | 'west';

type OddHour = 1 | 3 | 5 | 7 | 9 | 11;

type FreeTime = undefined[];

let age: NumberOrString = '42'; // string
age = parseInt(age); // number
age = undefined // undefined is not a number or string

let bearing: Direction = 'north';
bearing = 'south';
bearing = bearing + 'west'; // 'southwest' is not in our type
