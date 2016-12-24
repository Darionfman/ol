const express = require('express')
const Path = require('path')
const webpack = require('webpack')
const config = require('../webpack.config.js')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const router = require('express').Router()

const app = express()

const compiler = webpack(config)
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