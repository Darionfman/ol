const express = require('express'),
      Path = require('path'),
      webpack = require('webpack'),
      config = require('../webpack.config.js'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      bodyParser = require('body-parser'),
      morgan = require('morgan'),
      router = require('express').Router(),
      app = express(),
      compiler = webpack(config)
      
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
const assetFolder = Path.resolve(__dirname, '../public')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(morgan('dev'))
app.use(express.static(assetFolder))

app.get('/*', function (req, res) {
  res.sendFile(assetFolder + '/index.html')
})
app.get('/',(req,res) => res.sendFile(Path.resolve(__dirname, '../public/index.html')))

const port = process.env.PORT || 4000

app.listen(port)

console.log(`Listening on port ${port}`)