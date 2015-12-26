var obj1 = {
  arr: ['abc', 'laura', 'howdy']
}
var str;

console.log(obj1);

for (var i = 0; i < 10; i++) {
  str = obj1.arr[i] ? obj1.arr[i] : 'UNDEFINED';
  console.log('string = ', str);
};

console.log(str[6]);
console.log(obj1.temp.str[6]);
console.log(str[6].hello + 'hello');