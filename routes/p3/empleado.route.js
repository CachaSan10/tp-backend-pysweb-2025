const empleadoCtrl = require('../../controllers/p3/empleado.controller');

const express = require("express");
const router = express.Router();

router.get('/',empleadoCtrl.getEmpleados);

router.get('/:id',empleadoCtrl.getEmpleado);

router.post('/',empleadoCtrl.createEmpleado);

router.delete('/:id',empleadoCtrl.deleteEmpleado);


module.exports = router;