const Discord = require('discord.js')
exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("**Você não mencionou ninguém para beijar!**")
        var arquivo = new Discord.Attachment()
       .setAttachment("https://i.gifer.com/XrqL.gif")

 message.channel.send("<@" + message.author.id + "> **💋 Amorosamente deu um beijo em:** <@"+ user.id +">",arquivo)

}