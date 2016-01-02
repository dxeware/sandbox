var string = '/dawgs';
var re = new RegExp("^" + string + "?(.+)");
console.log(re);
// /\/^hello\/(.+)\//
var match = '/dawgs world'.match(re);
console.log('MATCH', match);
