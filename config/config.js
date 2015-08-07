
module.exports = function() {
	return {
		app: {
		  name: 'file transfer app'
		},
		db: 'mongodb://localhost/file_transfer',
		mode: 'development',
		host: '127.0.0.1',
		port: process.argv[2] || 8080,
		secret: 'secret',
	}
}
