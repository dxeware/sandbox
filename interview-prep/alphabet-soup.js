function AlphabetSoup(str) { 

  // code goes here  
  var arr = str.split('');
  var sorted = arr.sort();
  console.log(sorted);
  return sorted.toString().replace(/,/g, '');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
console.log(AlphabetSoup('ecfbagd'));                            
