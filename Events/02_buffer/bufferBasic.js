const { Buffer } = require('node:buffer');


// const buf = Buffer.alloc(4, 'a')

// console.log(buf[0])

// const buf = Buffer.from("Hello World")
// console.log(buf)
// console.log(buf.toString())

// const bufTwo = Buffer.allocUnsafe(10);
// console.log(bufTwo)

// const buf = Buffer.from("chai aur code")
// console.log(buf.toString())
// buf[0] = 0X45
// console.log(buf.toString())

const buf1 = Buffer.from("Chai aur")
const buf2 = Buffer.from(" Code")

const merged = Buffer.concat([buf1, buf2])
console.log(merged.toString())
console.log(merged.length)