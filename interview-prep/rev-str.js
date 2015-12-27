function FirstReverse(str) { 

  //code goes here 
  var newStr = '';
  for (var i=0; i < str.length; i++) {
    //newStr += str[str.length-i-1];
    newStr += str.charAt(str.length-i-1);
  }
  return newStr;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(FirstReverse('puppy is sooo cute!')); 
