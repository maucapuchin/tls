var tls = require('tls')
var fs = require('fs')

var options = {
    key:fs.readFileSync('mykey.pem'),
    cert:fs.readFileSync('my-cert.pem')
}

tls.createServer(options, function(s){
    s.write("welcome!\n");
    s.pipe(s);
}).listen(8000);

/* generara openssl

openssl genrsa -out mykey.pem 1024
openssl req -new -key mykey.pem -out mykey-csr.pem
openssl x509 -req -in mykey-csr.pem -signkey mykey.pem  -out my-cert.pem
*/