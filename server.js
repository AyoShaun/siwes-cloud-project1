const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Automated Cloud CI/CD Pipeline on Azure VM!\n');
});
server.listen(3000, () => {
  console.log('Server running on port 3000');
});
