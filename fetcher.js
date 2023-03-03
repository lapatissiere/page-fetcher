var http = require("http");
const fs = require('fs');

http.createServer(function (request, response) {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('http://www.example.edu/\n');
}).listen(8081);

const content = 'Some content!';

fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

fs.writeFile('./index.html', content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const stats = fs.statSync('./index.html');

fs.stat('./index.html', (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  stats.size; // 1024000 //= 1MB
});

// Console will print the message
console.log(`Downloaded and saved ${stats.size} bytes to ./index.html`);
