const express = require('express');
const app = express();

// Session init
const session = require('express-session');
app.use(session({
    secret: 'keyboard dog',
    resave: false,
    saveUninitialized: true,
}));

// Set view engine
app.set('view engine', 'html');

// Server-side entrypoint that registers Babel's require() hook
const babelRegister = require('babel-register');
babelRegister();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Backend Routes
const users = require(__dirname + '/backend/controllers/users');
app.use('/user', users);


// Public Route
app.get('/app.js', (req, res) => {
    if (process.env.PRODUCTION) {
        res.sendFile(__dirname + '/build/app.js');
    } else {
        res.redirect('//localhost:3000/build/app.js');
    }
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/build/index.html');
});


// Hot reloading
if (!process.env.PRODUCTION) {
    const webpack = require('webpack');
    const WebpackDevServer = require('webpack-dev-server');
    const config = require('./webpack.config');

    new WebpackDevServer(webpack(config), {
        publicPath: config.output.publicPath,
        hot: true,
        // noInfo: true,
        historyApiFallback: true,
        headers: {"Access-Control-Allow-Origin": '*'},
    }).listen(3000, 'localhost', (err, result) => {
        console.log("Webpack Dev Server listening on 3000")
        if (err) {
        console.log(err);
        }
    });
}


// Server
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log('React listening at http://%s:%s', host, port);
});
