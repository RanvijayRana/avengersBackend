const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const globalErr = require('./middleware/appErrorHandle');

const config = require('./config/appConfig');

let app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(globalErr.errorHandle);

let modelPath = './models';
fs.readdirSync(modelPath).forEach(file => {
    if (~file.indexOf('.js')) {
        require(modelPath + '/' + file);
    }
})
let routePath = './routes';
fs.readdirSync(routePath).forEach(file => {
    if (~file.indexOf('.js')) {
        let routes = require(routePath + '/' + file);
        routes.setRouter(app)
    }
})

app.use(globalErr.notFoundHandler);


app.listen(config.port, () => {
    console.log(`server started at port number ${config.port}`);
    mongoose.connect(config.db.uri, { useUnifiedTopology: true });
});

//db error handling
mongoose.connection.on('error', (err) => {
    console.log('db connection error', err.message);
})

mongoose.connection.on('open', (err) => {
    if (err) {
        console.log('db connection error', err.message);
    } else {
        console.log('DB opened success');
    }
})