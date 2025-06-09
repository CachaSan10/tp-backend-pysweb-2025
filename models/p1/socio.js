const mongoose = require('mongoose');
const {Schema} = mongoose;

const SocioSchema = new Schema({
nombre:{type:String,required:true},
apellido:{type:String,required:true},
foto:{type:String,required:true},
dni:{type:String,required:true, unique:true},
numeroSocio:{type:Number,required:true,unique:true},
activo:{type:Boolean,required:true}
})

module.exports = mongoose.models.Socio || mongoose.model('Socio',SocioSchema);
