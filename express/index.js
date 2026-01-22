const express = require('express');
const app = express();
const port = 8000;

app.get('/', function(req, res) {
    res.send("Homepage")
})

app.get('/contact-us', function (req, res) {
    res.send("You Can contact me at my email address")
})

app.get('/tweets', (req, res) => {
    res.status(201).end("Here are all tweet")
})

app.post('/tweets', (req, res) => {
    res.status(201).end("Tweet created successfully")
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})