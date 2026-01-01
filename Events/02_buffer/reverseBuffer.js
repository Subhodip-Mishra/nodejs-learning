const { Buffer } = require('node:buffer');


// const buf = Buffer.alloc(4, 'a')

// console.log(buf[0])

const buf = Buffer.from("Hello World")
console.log(buf)
console.log(buf.toString())

const reverseString = buf
.toString()
.split("")
.reverse("")
.join("")

const reverseBuffer = Buffer.from(reverseString);

console.log(reverseString)
console.log(reverseBuffer)