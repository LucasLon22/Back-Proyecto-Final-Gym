const express = require('express');
const app = express();

const archivobd = require('./conexion')
const rutasusuario = require('./rutas/usuario')

const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: 'true' }))


app.use('/api/usuario', rutasusuario)

app.get('/', (req, res) => {
    res.end('Bienvenido al servidor corriendo en puerto 5000')
})

app.listen(5000, function () {
    console.log('El servidor NODE de gimnasio esta corriendo correctamente')
})