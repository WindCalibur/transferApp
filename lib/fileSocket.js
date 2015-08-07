var ss = require('socket.io-stream');
var fs = fs = require('fs');
var Path = require('path');

module.exports = function(io) {
	
	io.of('/input').on('connection', function(socket) {
		ss(socket).on('inputFile', function(stream, data) {
			console.log("got file with name " + Path.basename(data.name));
			fileName = Path.basename(data.name);	
			var pathName = Path.resolve(__dirname + '/../files/' + fileName);
			stream.pipe(fs.createWriteStream(pathName));
			setTimeout(function(){ 
				var MyFileStream = fs.createReadStream(pathName);
				MyFileStream.pipe(stream);
			}, 3000);
		});
	});
}