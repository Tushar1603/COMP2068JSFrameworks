const connect = require('connect');
const url = require('url');
const http = require('http');

 
function calculate(req, res) {
    const parsedUrl = url.parse(req.url, true);
    const { method, x, y } = parsedUrl.query;
  
    if (["add", "subtract", "multiply", "divide"].includes(method)) {
      let result;
      switch (method) {
        case "add":
          result = parseFloat(x) + parseFloat(y);
          break;
        case "subtract":
          result = parseFloat(x) - parseFloat(y);
          break;
        case "multiply":
          result = parseFloat(x) * parseFloat(y);
          break;
        case "divide":
          result = parseFloat(x) / parseFloat(y);
          break;
      }
  
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`${x} ${method} ${y} = ${result}`);
    } else {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('choose either add, subtract, multiply, divide');
    }
  }

  const app = connect();
const port = 3000;

app.use(calculate);

http.createServer(app).listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
