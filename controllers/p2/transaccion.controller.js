const Transaccion = require('../../models/p2/transaccion');
const transaccionCtrl = {};

transaccionCtrl.createTransaccion = async (req, res) => {
    const transaccion = new Transaccion(req.body);
    try {
        await transaccion.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Transaccion creada correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al crear la transaccion'
        })
    }
    }

transaccionCtrl.getTransacciones = async (req, res) => {
  
    const transaccion = await Transaccion.find();
    res.status(200).json(transaccion);
}

transaccionCtrl.getTransaccionesEmail = async (req, res) => {
  emailQueryParam = req.query.email;
    let filtro = {};
    if (emailQueryParam !== undefined) {
       filtro = {emailCliente: emailQueryParam};
    }
    const transaccion = await Transaccion.find(filtro);
   res.status(200).json(transaccion);
}


 transaccionCtrl.getTransaccionesIdioma = async (req, res) => {
    idiomaParam = req.params.idioma;
    const transaccion = await Transaccion.find({
            $or: [
                { idiomaOrigen: idiomaParam },
                { idiomaDestino: idiomaParam }
            ]
        });
    res.status(200).json(transaccion);  
}

module.exports = transaccionCtrl;
