var user = {
	petFavs: [{
		pfId: '1',
		value: 'abc'
	},
	{
		pfId: '2',
		value: 'efg'
	}]
};
var fav = { pfId: '9', value: 'xxxx' };
		
console.log(user);
user.petFavs.forEach( function(ele, index) {
        if (ele.pfId === '1') {
          user.petFavs[index] = fav; 
        }
      });
console.log(user);
