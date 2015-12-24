var http = require('http');

http.get(process.argv[2], function(res) {
  //console.log("Status =", res.statusCode);
  //console.log(process.argv[2]);
  res.setEncoding('utf8');
  res.on('data', function(data){
    console.log(data);
  });
  res.on('error', function(err){
    console.log('Got error: ', err.message);
  });

});
