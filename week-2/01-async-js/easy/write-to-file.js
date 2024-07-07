const fs = require("fs");
function writeFile(fileName) {
    let writeSomething = "This is some content to be written to a file!";
    fs.writeFile(fileName, writeSomething, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log(`File wrote to ${fileName}`)
        }

    })
}


writeFile("a.txt");