const mongoose = require("mongoose");
const {Schema} = mongoose;

const TransaccionSchema = new Schema({
idiomaOrigen: {type: String, required: true},
textoOrigen: {type: Number, required: true},
idiomaDestino: {type: String, required: true},
textoDestino: {type: Number, required: true},
emailCliente: {type: String, required: true},
});

module.exports = mongoose.model.Transaccion || mongoose.model("Transaccion", TransaccionSchema);