var mongoose = require("mongoose");
var { Schema } = require('mongoose');
//var Schema = mongoose.Schema;
/*mongoose.connect("mongodb://foxly:aqui708@ds255889.mlab.com:55889/foxly", {useMongoClient: true}).catch((err) => {
    if (err) return console.log("Erro ao conectar no database!");
})*/
//mongoose.connect("db aqui");
//mongoose.connect("mongodb://foxly:aqui708@ds255889.mlab.com:55889/foxly");
mongoose.connect("mongodb://foxlybot:csvop1765@ds255889.mlab.com:55889/foxly");
var conec = mongoose.connection;
conec.on('error', console.error.bind(console, "Erro na conexão!"));
conec.once('open', function () {
  console.log("Db logada.");///;
});
console.log("Conectado ao BANCO DE DADOS!")
var Guild = new Schema({
    _id: {
        type: String
    },
    prefix: {
        type: String,
        default: 'fy!'
    }
})
var usuarios = new Schema({
_id:{
  type:String
},
xp:{
  type:Number
},
/*lvl:
  {t
   ype:Number},*/
   lvl: { type: Number },
money:{type:Number},
  repexpira: { type: Number, default: "0" },
rep:{type:Number}
})
var guild = mongoose.model('Guild',Guild)
exports.Guild = guild
var usuarios = mongoose.model('usuarios',usuarios) 
exports.usuarios = usuarios