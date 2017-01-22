alert('Psst: have a look at the JavaScript Console💁');
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let one = inventors.filter(function (inventor) {
  if (inventor.year >1499 && inventor.year < 1601) return true;
})
console.table(one);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
let two = inventors.map(function(inventor) {
  return inventor.first + " " + inventor.last;
})
console.log(two);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let three = inventors.sort(function(a, b) {
  return a.year - b.year;

})
console.table(three);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
let four = inventors.reduce(function(sum, current) {
  let lifeLong = current.passed - current.year;
  return sum += lifeLong;
}, 0);
console.log(four);

// 5. Sort the inventors by years lived
let five = inventors.sort(function(a, b) {
  let lifeLongOne = a.passed - a.year;
  let lifeLongTwo = b.passed - b.year;

  return lifeLongOne - lifeLongTwo;
})

five.forEach(function(inventor) {
  inventor.liveLong = inventor.passed - inventor.year;
})
console.table(five);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));


// 7. sort Exercise
// Sort the people alphabetically by last name
let seven = people.sort(function(a, b) {
  aLast = a.split(', ')[1];
  bLast = b.split(', ')[1];
  return aLast > bLast ? 1 : -1;
})
console.log(seven);


// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
let eight = {};
data.forEach(function(item) {
  if(eight[item]) {
    eight[item]++;
  } else {
    eight[item] = 1;
  }
})
console.log(eight)

console.log('## Array Cardio Day 2');

const people1 = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
let nine = people1.some(function(person) {
  return 2017 - person.year;
})
console.log(nine, 'is at least one person 19 or older?');

// Array.prototype.every() // is everyone 19 or older?
let ten = people1.every(function(person) {
  return 2017 - person.year;
})
console.log(ten, 'is everyone 19 or older?');

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
let eleven = comments.find(function(comment) {
  if (comment.id === 823423) return comment;
})
console.log(eleven, 'find the comment with the ID of 823423');

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
let twelve = comments.findIndex(function(comment) {

})