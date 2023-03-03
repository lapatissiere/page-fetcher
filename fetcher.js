var http = require("http");
const fs = require('fs');

const args = process.argv;
let url = args[2];
let filepath = args[3];

http.createServer(function (request, response) {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end(`${url}\n`);
}).listen(8081);

const content = 'Some content!';

fs.readFile(`${filepath}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //console.log(data);
});

fs.writeFile(`${filepath}`, content, err => {
  if (err) {
    console.error(err);
  }
  // file written successfully
});

const stats = fs.statSync(`${filepath}`);

fs.stat(`${filepath}`, (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  stats.size; // 1024000 //= 1MB
});

// Console will print the message
console.log(`Downloaded and saved ${stats.size} bytes to ${filepath}`);
