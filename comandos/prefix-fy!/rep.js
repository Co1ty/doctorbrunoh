exports.run = async (client, message, args) => {
  /*
  --------------------------------------
  *  Comando de Rep por BlueSlimee     *
  *  Favor não mexer, ou mexe, sei lá  *
  --------------------------------------
  */
  var db = require('../../database.js');
  var date = new Date();
  var day = date.getDate();
  var user = message.mentions.users.first() || message.author;
  db.usuarios.findOne({ _id: user.id }, function (e, d) {
    if (!d) return message.channel.send("Você não foi encontrado no banco de dados");
    db.usuarios.findOne({ _id: message.author.id }, function (er, doc) {
      if (!doc) {
        var o = new db.usuarios({
          _id: user.id,
          rep: "1"
        });
        o.save();
        message.channel.send("`"+ message.author.tag +"` deu um ponto de reputação para `"+ user.tag +"`");
      }
      if (doc.dailyexpira == day) return message.channel.send("Você já deu rep para uma pessoa hoje! Tente novamente amanhã.");
      d.rep = parseInt(d.rep) + "1";
      doc.dailyexpira = day;
      message.channel.send("`"+ message.author.tag +"` deu um ponto de reputação para `"+ user.tag +"`");
    });
  });
}