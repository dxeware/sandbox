var pets = [
  {
 	pfId: '12345'	
  },
  {
 	pfId: '98765'	
  }
]
var temp = pets.filter((ele) => (ele.pfId === '12345') );
console.log( temp);
