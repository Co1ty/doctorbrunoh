const Discord = require('discord.js')
exports.run = (client,message,args)=>{
    let user = message.mentions.users.first();
    if(message.mentions.users.size < 1) return message.reply("**Quem você deseja abraçar?**")
        var arquivo = new Discord.Attachment()
       .setAttachment("https://imgur.com/x7w6TSU.gif")

 message.channel.send("<@" + message.author.id + "> **Gentilmente deu um abraço em:** <@"+ user.id +">",arquivo)

}