const express = require("express");
// const { v4: uuid } = require("uuid");

// const books = {
//     [uuid()]: {}
// };

const app = express();
app.use(express.json());

const PORT = 4020;

app.get("/", (req, res) => {
    res;
});

app.listen(PORT, () => {
    console.log(`Service is running on ${PORT}`);
});
