const Eventemitter = require('events');

const eventEmitter = new Eventemitter();

eventEmitter.on('error', (err) => {
    console.error(`Error Occurred: ${err}`);
})

eventEmitter.emit('error', new Error("Something went wrong"))