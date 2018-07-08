var { CreateProfile } = require('../../ProfileCore');
var { Attachment } = require('discord.js');
var { usuarios } = require('../../database');
var fs = require('fs')
let n;
var b = JSON.parse(fs.readFileSync('/app/userData.json', 'utf-8'))
exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || message.author;
  if (!b[user.id]) n = 0;
  else n = b[user.id].nivel
  usuarios.findOne({ _id: user.id }, function (e, d) {
    if (!d) return message.channel.send("Usuário não encontrado.");
    var info = {
      lvl: n,
      sobremim: d.sobremim,
      background: "https://cdn.discordapp.com/attachments/427462280905621504/462597282827599872/Red-fox-look-up-forest-autumn_1920x1080.jpg",
      rep: d.rep || 0,
      coins: d.money
    }
    CreateProfile(user, info).then(buffer => {
      var img = new Attachment(buffer, "profile-"+ user.username +".jpg");
      message.channel.send(img);
    });
  });
}