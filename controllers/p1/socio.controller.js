const Socio = require('../../models/p1/socio');
const socioCtrl = {};

socioCtrl.getSocios = async (req, res) => {
   try {
    const activoQueryParam = req.query.activo;
    
    let filtro = {};
    if (activoQueryParam !== undefined ) {
        const esActivo = activoQueryParam === "true";
        filtro = {activo: esActivo};
    }

    const socios = await Socio.find(filtro);
    res.status(200).json(socios);

   } catch (error) {
    res.status(400).json({
        'status': '0',
        'msg': 'Error al obtener los socios'
    })
   }
}

socioCtrl.createSocio = async (req, res) => {
    var socio = new Socio(req.body);
   try {
    await socio.save();
    res.json({
        'status': '1',
        'msg': 'Socio creado correctamente'
    })
   } catch (error) {
    res.status(400).json({
        'status': '0',
        'msg': 'Error al crear el socio'
    })
   }
}


socioCtrl.updateSocio = async (req, res) => {
    const socio = new Socio(req.body);
    try {
        await Socio.updateOne({_id: req.body._id}, socio);
        res.json({
            'status': '1',
            'msg': 'Socio actualizado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar el socio'
        })
    }
}

socioCtrl.deleteSocio = async (req, res) => {
try {
    await Socio.deleteOne({_id: req.params.id});
    console.log(req.params.dni);
    res.json({
        'status': '1',
        'msg': 'Socio eliminado correctamente'
    })
} catch (error) {
    res.status(400).json({
        'status': '0',
        'msg': 'Error al eliminar el socio'
    })
}
}


module.exports = socioCtrl;