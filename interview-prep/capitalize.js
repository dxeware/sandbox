function LetterCapitalize(str) { 

  // code goes here
  //str.charAt(0) = 
  var newStr = '';
  newStr += str.charAt(0).toUpperCase();
  for (i=1; i < str.length; i++) {
    newStr += str.charAt(i);
    if (str.charAt(i) === ' ') {
      newStr += str.charAt(i+1).toUpperCase();
      i++;
    }
    console.log(newStr);
  }
  return newStr; 
         
}

console.log(LetterCapitalize('hello god its me, margaret!'));