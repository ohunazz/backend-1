import express from "express";

const app = express();
app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => {
    console.log("Process is running on ", PORT);
});
