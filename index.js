const server = require("./api/server.js");

const PORT = process.env.PORT || 5000;

server.listen(PORT, err => {
  if (err) {
    return console.log("Oops! You've encountered an error: ", err);
  }
  console.log(`\n*** Server listening on port: ${PORT} ***\n`);
});