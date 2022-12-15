const express = require('express');
const bodyParser = require('body-parser')

const authRoutes = require('./authRoutes');

require('dotenv')
    .config();

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/login', authRoutes.login);
app.post('/registration', authRoutes.registration);
app.get('/users', authRoutes.users);

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server started on port ${HOST}:${PORT}`)
        });

    } catch(error) {
        console.log(error);
    }
}

start();