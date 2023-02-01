const express = require("express");
const app = express();
const router = require("./routers/index");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
// app.use("/", (req,res)=>{res.send(`hello web`)})

app.listen(port, () => {
  console.log(`on port ${port}`);
});
