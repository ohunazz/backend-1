import { Router } from "express";

const rentalsRouter = Router();

export { rentalsRouter };

rentalsRouter.get("/rentals", (req, res) => {
    const rentalsList = Object.values(rentals);
    res.status(200).json({ data: rentalsList });
});

rentalsRouter.get("/rentals/:rentalsId", (req, res) => {
    const rentalsId = req.params.rentalsId;

    if (!validate(rentalsId) || !rentals[rentalsId]) {
        return res.status(400).json({ message: "Not a valid rentals ID" });
    }

    res.status(200).json({ data: rentals[rentalsId] });
});

rentalsRouter.post("/rentals", (req, res) => {
    const data = req.body;
    const id = uuid;

    const rentals = {
        id,
        ...data
    };
    rentals[id] = rentals;

    res.status(201).json({ data: rentals });
});

rentalsRouter.put("/rentals/:rentalsId", (req, res) => {
    const rentalsId = req.params.rentalsId;
    const updatedData = req.body;

    if (!validate(rentalsId) || !rentals[rentalsId]) {
        return res.status(400).json({ message: "Not a valid rentals ID" });
    }

    rentals[rentalsId] = { ...rentalsId[rentalsId], updatedData };

    res.status(200).json({ data: rentals[rentalsId] });
});

rentalsRouter.delete("/rentals/:rentalsId", (req, res) => {
    const rentalsId = req.params.rentalsId;

    if (!validate(rentalsId) || !rentals[rentalsId]) {
        return res.status(400).json({ message: "Not a valid rentals ID" });
    }

    delete rentals[rentalsId];
    res.status(204).send();
});
