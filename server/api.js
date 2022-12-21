const express = require('express');
const cors = require('cors');

const sequelize = require('./db');
const models = require('./models/index');
const router = require('./routes/index');

require('dotenv')
    .config();
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();

        app.listen(config.port, async () => {
           console.log(`\nServer started on ${config.host}:${config.port}`);
        });
    } catch(error) {
        console.log(error);
    }
};

start();
