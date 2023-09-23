import { Router } from "express";

const maintenanceRouter = Router();

export { maintenanceRouter };

maintenanceRouter.get("/", (req, res) => {
    const maintenanceList = Object.values(maintenance);
    res.status(200).json({ data: maintenanceList });
});

maintenanceRouter.get("/:maintenanceId", (req, res) => {
    const maintenanceId = req.params.maintenanceId;

    if (!validate(maintenanceId) || !maintenance[maintenanceId]) {
        return res.status(400).json({ message: "Not a valid maintenance ID" });
    }

    res.status(200).json({ data: maintenance[maintenanceId] });
});

maintenanceRouter.post("/", (req, res) => {
    const data = req.body;
    const id = uuid;

    const maintenance = {
        id,
        ...data
    };
    maintenance[id] = maintenance;

    res.status(201).json({ data: maintenance });
});

maintenanceRouter.put("/:maintenanceId", (req, res) => {
    const maintenanceId = req.params.maintenanceId;
    const updatedData = req.body;

    if (!validate(maintenanceId) || !maintenance[maintenanceId]) {
        return res.status(400).json({ message: "Not a valid maintenance ID" });
    }

    maintenance[maintenanceId] = {
        ...maintenanceId[maintenanceId],
        updatedData
    };

    res.status(200).json({ data: maintenance[maintenanceId] });
});

maintenanceRouter.delete("/:maintenanceId", (req, res) => {
    const maintenanceId = req.params.maintenanceId;

    if (!validate(maintenanceId) || !maintenance[maintenanceId]) {
        return res.status(400).json({ message: "Not a valid maintenance ID" });
    }

    delete maintenance[maintenanceId];
    res.status(204).send();
});
