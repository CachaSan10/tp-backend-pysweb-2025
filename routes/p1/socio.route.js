const agenteCtrl = require('../../controllers/p1/socio.controller')

// creamos el manejador de rutas

const express = require('express')
const router = express.Router()

// definimos las rutas
router.get('/', agenteCtrl.getSocios);
router.post('/', agenteCtrl.createSocio);

router.put('/:id', agenteCtrl.updateSocio);
router.delete('/:id', agenteCtrl.deleteSocio);

module.exports = router;