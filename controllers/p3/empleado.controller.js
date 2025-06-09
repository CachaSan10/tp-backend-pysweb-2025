const Empleado = require("../../models/p3/empleado");
const empleadoCtrl = {};

empleadoCtrl.getEmpleado = async (req, res) => {
    const empleado = await Empleado.findById(req.params.id);
    res.status(200).json(empleado);
};

empleadoCtrl.createEmpleado = async (req, res) => {
    const empleado = new Empleado(req.body);
    try {
        await empleado.save();
        res.status(200).json({
            'status': '1',
            'msg': 'Empleado creado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al crear el empleado'
        })
    }   
}

empleadoCtrl.getEmpleados = async (req, res) => {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
}

empleadoCtrl.deleteEmpleado = async (req, res) => {
    try {
        await Empleado.deleteOne({_id: req.params.id});
        res.json({
            'status': '1',
            'msg': 'Empleado eliminado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            'status': '0',
            'msg': 'Error al eliminar el empleado'
        })
    }

}

module.exports = empleadoCtrl;