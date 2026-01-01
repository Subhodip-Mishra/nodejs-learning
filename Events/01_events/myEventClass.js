const EventEmitter = require('node:events');

class Chat extends EventEmitter {
    sendMessage(msg) {
        console.log(`Message send: ${msg}`);
        this.emit('messageRecived', msg);
    }
}

// Event listener
const chat = new Chat();
chat.on('messageRecived', (msg) => {
    console.log(`Message Revived: ${msg}`);
})

// Event Emitter

// chat.emit('messageRecived', "Hello Subhadip") without class
// Event with Class
chat.sendMessage('messageRecived', "Hello Subhadip Mishra")

