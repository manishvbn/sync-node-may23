// import { add } from "./lib";
// console.log(add(2,3));

import * as http from 'http';
import * as fs from 'fs';

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', 'utf8', (err, htmlContent) => {
        if (err) {
            res.setHeader("content-type", "text/plain");
            res.statusCode = 404;
            res.end("Page not Found...");
        } else {
            res.setHeader("content-type", "text/html");
            res.write(htmlContent);
            res.end();
        }
    });
});

server.listen(3000);

function onError(err: any) {
    console.log(err);
}

function onListening() {
    var address: any = server.address();
    console.log(`Server started on port: ${address.port}`);
}

server.on('error', onError);
server.on('listening', onListening);