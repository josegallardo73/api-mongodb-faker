import express from 'express';
import { Routes } from './router/routes.js'
import { connect } from './models/conexion.js';

const app = express();
const PORT = 9000;

app.use(express.json());

const rutas = new Routes(app);

// Rutas productos
rutas.getTest();
rutas.getProducts();
rutas.getProductById();
rutas.postProduct();
rutas.updateProduct();
rutas.deleteProduct();

// rutas mensajes

rutas.getMessages();
rutas.getMessageById();
rutas.postMessage();
rutas.updateMessage();
rutas.deleteMessage();

app.listen(PORT, () => {
    connect();
    console.log(`Running server on port ${PORT}`)
}).on('error', (err) => {
    throw new Error(err);
} )




