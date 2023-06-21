const fs = require("fs");


fs.writeFile("message.txt", "Hello from NodeJS!", (err) => {
    if(err) throw err;
    console.log("The file has been saved");
});

fs.appendFile("message.txt", "\nHello from Daniel!", (err) => {
    if(err) throw err;
    console.log("The data has been append to the file");
});

fs.readFile("message.txt", "utf-8", (err, data) => {
    if(err) throw err;
    console.log("\nRead file\n" + data);
});