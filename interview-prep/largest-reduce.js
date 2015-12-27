var arr=[9,2,3,4,5,6];

// var num = arr.reduce(function(prev, curr) {
// return (prev > curr ? prev: curr);
// }); //WORKS

var num = arr.reduce((prev, curr) => (prev > curr ? prev : curr) ); //WORKS

console.log('largest = ', num);