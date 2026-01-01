const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (username) => {
    console.log(`Hello ${username} this is the node js event emitter`);
})

eventEmitter.on('greet', (time) => {
    console.log(`${time}: The time is: ${Date.now()}`);
})

// You can pass also a callback function
const ChatRoom = (username) => console.log(`${username} is just join your ChatRoom`)
eventEmitter.on('joinChatRoom', ChatRoom);

// This event only emit in once time 
// Usecase: use this for push notification or just like if you want to show example: user logout notification or in singing push a notification which is run only once time
eventEmitter.once('pushNotification', (username) => {
    console.log(`Hey ${username} this is new notification`);
})

// Emit the Event
// eventEmitter.emit('greet', "Suvodeep")
// eventEmitter.emit('greet', "Hitesh")
// eventEmitter.emit('pushNotification', "Suvodeep")
// eventEmitter.emit('pushNotification', "Hitesh")
eventEmitter.emit('greet', 'time')
eventEmitter.emit('joinChatRoom', 'Suvodeep')

console.log(eventEmitter.listenerCount('greet'))