const path = require('path')
const express = require('express')
const app = express()
const routes = require('./src/routes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/css', express.static(path.resolve(__dirname, 'frontend')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)


// app.on('pronto', () => {
app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
});
// });
