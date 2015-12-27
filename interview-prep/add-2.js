function add(num) {
	return function(num2) {
		return num + num2;
	}
}

console.log(add(3)(4));
