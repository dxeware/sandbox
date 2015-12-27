var arr = [1,1,2,1,5,30,7,30,2,4,8,9,5,9,8,4,6];

var removedDups = arr.filter(function(val, index, origArr) {
  return origArr.indexOf(val) === index;
});

console.log(removedDups.sort((a,b) => (a - b))); //WORKS
//console.log(removedDups.sort()); //DOESN'T always work b/c compares unicode of strings, not numbers