const fs = require("fs");

function readFile(fileName) {
    fs.readFile(fileName, "UTF-8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
}

readFile("a.txt");
