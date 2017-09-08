const express = require('express');
const app = express();
// Server-side entrypoint that registers Babel's require() hook
const babelRegister = require('babel-register');
babelRegister();

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
    if (err) {
      console.log(err);
    }
  });
}

const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('React listening at http://%s:%s', host, port);
});
