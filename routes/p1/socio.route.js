const socioCtrl = require('../../controllers/p1/socio.controller')

// creamos el manejador de rutas

const express = require('express')
const router = express.Router()

// definimos las rutas
router.get('/', socioCtrl.getSocios);
router.get('/filtro/activo', socioCtrl.getSociosActivo)
router.post('/', socioCtrl.createSocio);

router.put('/:id', socioCtrl.updateSocio);
router.delete('/:id', socioCtrl.deleteSocio);

module.exports = router;