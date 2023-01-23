const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ProyectoFinal');

mongoose.set('strictQuery', true);

const objetobd = mongoose.connection;

objetobd.on('open', () => { console.log('Conexión Correcta a MongoDB') })
objetobd.on('error', () => { console.log('Error en la conexión a MongoDB') })



module.exports = mongoose