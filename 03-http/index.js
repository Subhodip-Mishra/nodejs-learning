const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    const method = req.method;
    const path = req.url;

    const log = `[\n${Date.now()}]: ${method} ${path}`;
    fs.appendFileSync('log.txt', log, 'utf-8')


    switch (method) {
        case 'GET': {
            switch (path) {
                case '/':{
                    res.writeHead(200).end(`Hello from the server`);
                }
                break
                case '/contact-us':{
                    res.writeHead(200).end('Sure, Email: suvodeepmishra123@gmail.com and Phoen: +91111111');
                }
                break
                  case '/tweet':{
                    res.writeHead(200).end('Tweet1');
                }
                break
            }
        }
        break
        case 'POST':{
            switch(path){
                case '/tweet':{
                    return res.writeHead(201).end("Your tweet was created")
                }
            }
        }
    }

    return res.writeHead(404).end('You are lost')

})

server.listen(8000, () => {
    console.log("Server is listening on port 8000");
})