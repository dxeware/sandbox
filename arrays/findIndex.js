var idx = [
  {
    name: 'Holly',
    age: 50},
  {
    name: 'Mike',
    age: 99
  }
].findIndex(function(ele) {
  return ele.name === 'Mike';
});

console.log("Mike is at index", idx);