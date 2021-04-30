const app = require("./app.js");

const PORT = process.env.SERVER_PORT || 4000
console.log(process.env)
app.listen( PORT, () => { 
  console.log("Server started listening on port:", PORT);
});
