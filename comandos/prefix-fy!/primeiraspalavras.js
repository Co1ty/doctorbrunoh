const Discord = require("discord.js");
module.exports.run = async (client, message, args, prefixo) => {
      if (message.mentions.users.first()) {
    let user = message.mentions.users.first().username;
    let userfoto = message.mentions.users.first().avatarURL;
  } else {
    var user = message.author.username
    var userfoto = message.author.avatarURL;
  }

  let mensagens = args.join(` `)
  if(mensagens.length > 14) {
    message.channel.sendMessage('<:Errado:454383164652257292> **| Você usou o máximo de letras e números**')
  } else {
  
    var Jimp = require("jimp")
    let img    = Jimp.read('https://cdn.discordapp.com/attachments/456123198866456587/456944886126608394/Sem_titulo.png'),
    avatar = Jimp.read(userfoto)
Promise.all([img, avatar]).then(imgs => {

    let avatar = imgs[1],
    img    = imgs[0];
    avatar.resize(87, 87); 

    Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {  
   
    img.print(font, 80, 270, mensagens);

   img.getBuffer(Jimp.MIME_PNG, (err, buffer) => {

      
            message.channel.sendFile(buffer)
    });
})
})
  }
}