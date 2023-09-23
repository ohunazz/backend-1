import { Router } from "express";

const carRouter = Router();

export { carRouter };

carRouter.get("/", (req, res) => {
    const carsList = Object.values(cars);
    res.status(200).json({ data: carsList });
});

carRouter.get("/:carsId", (req, res) => {
    const carsId = req.params.carsId;

    if (!validate(carsId) || !cars[carsId]) {
        return res.status(400).json({ message: "Not a valid cars ID" });
    }

    res.status(200).json({ data: cars[carsId] });
});

carRouter.post("/", (req, res) => {
    const data = req.body;
    const id = uuid;

    const cars = {
        id,
        ...data
    };
    cars[id] = cars;

    res.status(201).json({ data: cars });
});

carRouter.put("/:carsId", (req, res) => {
    const carsId = req.params.carsId;
    const updatedData = req.body;

    if (!validate(carsId) || !cars[carsId]) {
        return res.status(400).json({ message: "Not a valid cars ID" });
    }

    cars[carsId] = { ...carsId[carsId], updatedData };

    res.status(200).json({ data: cars[carsId] });
});

carRouter.delete("/:carsId", (req, res) => {
    const carsId = req.params.carsId;

    if (!validate(carsId) || !cars[carsId]) {
        return res.status(400).json({ message: "Not a valid cars ID" });
    }

    delete cars[carsId];
    res.status(204).send();
});
