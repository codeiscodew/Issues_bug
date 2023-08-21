import express from "express";

//const bug = require("./database.js");
// index.js
import { bug } from "./database.js";

/*async function main() {
  try {
    const bugData = await bug();
    console.log("Bug Data:", bugData);
  } catch (error) {
    console.error("Error:", error);
  }
}

main(); */

const app = express();

app.get("/project", async (req, res) => {
  const app = await bug();
  res.send(app);
});

//error output
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something error");
});

app.listen(8080, () => {
  console.log("Server is running in port 8080");
});
