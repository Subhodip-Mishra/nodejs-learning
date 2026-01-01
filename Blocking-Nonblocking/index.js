const fs = require("node:fs");

// const content = fs.readFileSync('input.txt', 'utf8');
// console.log(content)

const result = fs.readFile('input.txt', "utf-8", (err, data) => {
    if(err) return console.log(err);

    console.log(data);
})

console.log(result)