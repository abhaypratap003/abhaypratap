console.log("hello my world bdiya")
var a=3;
console.log(a)
a=99
console.log(a)

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})
