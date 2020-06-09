const express = require('express');
const pool = require('./database');

class Servidor {
    constructor() {
        this.app = express();
        this.routes = express.Router();
    }
    rutas() {

        this.routes.get('/departamentos', async (solicitud, respuesta) => {
            const resp = await pool.query('SELECT distinct(departamento) FROM colegios.unidades_educativas');
            respuesta.json(resp);
        })

        this.routes.get('/inicio', (solicitud, respuesta) => {
            respuesta.send('hola desde node js');
        })


        this.routes.get('/menuprincipal', (solicitud, respuesta) => {
            respuesta.json(
                {
                    mensaje: 'respuesta correcta',
                    status: 'correcto',
                    saludo: 'gracias por usas la api'
                }
            )
        })

        this.routes.post('/inicio', (solicitud, respuesta) => {
            respuesta.send('respondiendo desde nodejs por peticion post');
        })
        this.app.use(this.routes);
    }
    iniciarServidor() {
        this.app.listen(4562, () => {
            console.log('iniciando el servidor en el puerto 4562')
        })
    }
}
const s = new Servidor();
s.iniciarServidor();
s.rutas();