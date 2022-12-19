const http = require('http');

const express = require('express');

const config = require("../config/");

const app = express();
const server = http.createServer(app);

const start = () => {
    try {
        server.listen(config.port, async () => {
            console.log(`\nServer started on ${config.host}:${config.port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();