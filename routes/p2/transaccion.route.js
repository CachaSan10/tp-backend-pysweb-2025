const transaccionCtrl = require('../../controllers/p2/transaccion.controller')

const express = require("express");
const router = express.Router();

router.get('/',transaccionCtrl.getTransacciones);

router.get('/filtro/email',transaccionCtrl.getTransaccionesEmail);

router.post('/',transaccionCtrl.createTransaccion);

router.get('/:idioma',transaccionCtrl.getTransaccionesIdioma);


module.exports = router;