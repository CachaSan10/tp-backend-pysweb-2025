const publicacionCtrl = require('../../controllers/p3/publicacion.controller');
const express = require('express')
const router = express.Router();

router.get('/',publicacionCtrl.getPublicaciones);

router.post('/',publicacionCtrl.createPublicacion);

router.delete('/:id',publicacionCtrl.deletePublicacion);

router.get('/filtro',publicacionCtrl.getPublicacionesTituloVigencia);

router.put('/',publicacionCtrl.updatePublicacion);

module.exports = router;