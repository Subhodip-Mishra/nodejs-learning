const fs = require("node:fs");

// Task: Read the content of notes.txt

console.log("Start of script");

// Sync => Blocking Operations
// const content = fs.readFileSync('notes.txt', 'utf-8')


// Async => Non Blocking
fs.readFile('notes.txt', 'utf-8', function(err, data){
    if(err) console.log("Error", err);
    else console.log("Content got: ", data)
})

console.log('End of script')
