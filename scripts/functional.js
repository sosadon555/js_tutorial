let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Returns a URL-friendly version of a string
  //Example: "North Dakota" -> "north-dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

//urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
console.log(imperativeUrls(states));

//Functional version
function functionalUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(functionalUrls(states));

//Return url + states
function formedUrl(states) {
  let url = ["https://example.com/"];
  return states.map(state => url + urlify(state));
}
console.log(formedUrl(states));

//singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

//singles: Functional version

function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//doubles: using .includes

function functionalDoubles(elements) {
  return elements.filter(element => element.includes("Dakota"));
}
console.log(functionalDoubles(states));

//doubles: using regex

function functionalDoubless(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalDoubless(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//sum: Imperative solution

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

//sum: functional solution

function functionalSums(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSums(numbers));

//lengths: Imperative solution
 function imperativeLengths(elements) {
   let lengths = {};
   elements.forEach(function(element) {
     lengths[element] = element.length;
   });
   return lengths;
 }
console.log(imperativeLengths(states));
