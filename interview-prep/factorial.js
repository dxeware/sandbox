function FirstFactorial(num) { 

  //o code goes here 
  var factorial = 1;
  for (var i=1, count=num; i <= count; i++) {
    factorial *= i;
  }
  num = factorial;
  return num; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(FirstFactorial(8)); // should equal 40320
