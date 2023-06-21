/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import * as fs from "node:fs";
import inquirer from "inquirer";
import qr from "qr-image";

inquirer
    .prompt([
        {
            name: "url",
            message: "Enter the URL: "
        }
    ])
    .then(answers => {
        fs.writeFile("./url.txt", answers.url, (err) => {
            if(err) throw err;
            console.log("File written sucesfully");
        });

        var qr_svg = qr.image(answers.url, { type: "png"});
        qr_svg.pipe(fs.createWriteStream("url1.png"));
    });
