var obj1 = {
	prop1: '123',
	prop2: '567'
};


var obj2 = {
	prop1: '123',
	prop2: {
		prop3: '567',
		prop4: '901'
	}
};

console.log(Object.keys(obj1));
console.log(Object.keys(obj2));
