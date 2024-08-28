const http = require("http");
const fs = require("fs");

// Create server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Home Page
    res.write("This is the Home Page");
    res.end();
  } else if (req.url === "/about") {
    // About Page
    res.write("This is the About Page");
    res.end();
  } else if (req.url === "/contact") {
    // Contact Page
    res.write("This is the Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    // File Write Operation
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.write("Failed to write file");
      } else {
        res.write("File created successfully with content 'hello world'");
      }
      res.end();
    });
  } else {
    // 404 Not Found
    res.write("404 Not Found");
    res.end();
  }
});

// Listen on port 5500
server.listen(5500, () => {
  console.log("Server is listening on port 5500");
});
