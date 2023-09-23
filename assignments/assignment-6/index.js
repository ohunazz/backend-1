import express from "express";
import { cars, rentals, maintenance } from "./data.js";
import { validate, v4 as uuid } from "uuid";
import { carRouter } from "./routes/car.routes.js";
const app = express();
app.use(express.json());

const PORT = 7040;

app.use("/cars", carRouter);
// app.use("/rentals", rentalsRouter);
// app.use("/maintenance", maintenanceRouter);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
