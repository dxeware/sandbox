var arr = [[100, 200], [400, 500], [1]];

var newArr = arr.reduce((prev,curr) => (prev.concat(curr)));

console.log(newArr);
