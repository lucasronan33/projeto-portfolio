require('dotenv').config()
const path = require('path')
const helmet = require('helmet')
const express = require('express')
const session = require('express-session')
const app = express()
const routes = require('./src/routes')
const { middlewareLogin } = require('./src/middlewares/middleware')
const mongoose = require('mongoose')

mongoose.connect(process.env.CONNECTIONSTRING).then(() => { app.emit('ready') })
    .catch(e => { console.log(e) })

app.use(helmet())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'frontend', 'assets')))

const sessionOptions = session({
    secret: 'cadastrarprojetomeuportfolio',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
})

app.use(sessionOptions)
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)
app.use(middlewareLogin)


app.on('ready', () => {
    app.listen(3000, () => {
        const data = new Date()
        console.log(`Servidor iniciado em ${data.getHours()}h:${data.getMinutes()}m:${data.getSeconds()}s`)
        console.log('Acessar http://localhost:3000');
    });
});
