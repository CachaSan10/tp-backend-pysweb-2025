const Publicacion = require("../../models/p3/publicacion");
const publicacionCtrl = {};

publicacionCtrl.getPublicaciones = async (req, res) => {
    const publicaciones = await Publicacion.find();
    res.status(200).json(publicaciones);
};

publicacionCtrl.createPublicacion = async (req, res) => {
    const publicacion = new Publicacion(req.body);
    try {
        await publicacion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Publicacion creada correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al crear la publicacion'
        })
    }   
}

publicacionCtrl.deletePublicacion = async (req, res) => {
    try {
        await Publicacion.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Publicacion eliminada correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar la publicacion'
        })
    }
}

publicacionCtrl.getPublicacionesTituloVigencia = async (req, res) => {
    const tituloQueryParam = req.query.titulo;
    const vigenciaQueryParam = req.query.vigencia;
    let filtro = {};
    if (tituloQueryParam !== undefined && vigenciaQueryParam !== undefined) {
        filtro = {titulo: tituloQueryParam, vigencia: vigenciaQueryParam};
    }
    const publicaciones = await Publicacion.find(filtro);
    res.status(200).json(publicaciones);
}

publicacionCtrl.updatePublicacion = async (req, res) => {
    const publicacion = new Publicacion(req.body);
    try {
        await Publicacion.updateOne({_id: req.body._id}, publicacion);
        res.json({
            'status': '1',
            'msg': 'Publicacion actualizada correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al actualizar la publicacion'
        })
    }   
}


module.exports = publicacionCtrl;