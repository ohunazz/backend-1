const fs = require("fs").promises;

async function readAndParseFile() {
    try {
        const data = await fs.readFile("data.json", "utf8");
        const parsedData = JSON.parse(data);
        console.log(parsedData);
    } catch (err) {
        console.log("An error occurred:", err);
    }
}

readAndParseFile();
