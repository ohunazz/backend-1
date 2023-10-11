import express from "express";
import { prisma } from "./src/prisma/index.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

const create = async () => {
    await prisma.product.create({
        data: {
            name: "Egg",
            description: "I'm a Egg"
        }
    });
};

create();

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});
