import express from 'express'
import routes from './routes/index'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/rokket_models', {
    useUnifiedTopology: true
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use('/', routes());

app.listen(5000)