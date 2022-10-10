/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];
let [john, mary, joe] = ages;
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: 'designer',
    jill: 'accountant',
    natalie: 'dancer'
};
let {mike, jill, natalie} = jobs;
console.log(mike, jill, natalie);

// Destructuring subsets
let languages = ['english', 'french', 'german', 'dutch', 'japanese'];
let [johnNative, johnSecondary] = languages;
let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguage: 'english',
    secondLanguage: 'french',
    thirdLanguage: 'german',
    fourthLanguage: 'japanese'
};

let {firstLanguage, thirdLanguage} = languages2;
console.log(firstLanguage, thirdLanguage);

// Using rest parameter syntax
let fruits = ['apple', 'orange', 'banana', 'pear', 'mango'];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);

let favoriteFoods = {
    brian: 'pizza',
    chris: 'steak',
    nat: 'veggy',
    terry: 'burgers'
};

let {brian, chris, ...rest} = favoriteFoods;
console.log(brian);
console.log(chris);
console.log(rest);
