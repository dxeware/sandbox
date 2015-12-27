var arr = [1,2,3,'cat','dog'];

var str = arr.join();
var str2 = arr.join('');

console.log('String containing commas:', str);
console.log('String w/o commas:', str.replace(/,/g, ''));
console.log('Better - used empty seperator -> String w/o commas:', str2);
