const mongoose = require("mongoose");
const Empleado = require("./empleado");
const {Schema} = mongoose;

const PublicacionSchema = new Schema({
    titulo: {type: String, required: true},
    contenido: {type: String, required: true},
    imagenAsociada: {type: String, required: true},
    fechaPublicacion: {type: String, required: true},
    empleado: {type: Schema.Types.ObjectId, ref: Empleado, required: true},
    vigente: {type: Boolean, required: true}
});

module.exports = mongoose.model.Publicacion || mongoose.model("Publicacion", PublicacionSchema);


