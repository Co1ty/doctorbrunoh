const Discord = module.require('discord.js');   

exports.run = (client,message,args)=>{         
  var dog = ["https://imgur.com/3dmqyR1.gif",
         "https://imgur.com/Xwu1epH.gif",
         "https://imgur.com/qJLQSbL.gif",
         "https://imgur.com/hMkkmcO.gif",
         "https://imgur.com/lcl8zcz.gif",
         "https://imgur.com/UiXFyTb.gif",
         "https://imgur.com/c8C9cGY.gif"]
       
  var doglink = dog[Math.floor(Math.random() * dog.length)] + ".gif";

        message.channel.send(`**${message.author} | Olha que cachorrinho fofo...**`, {files: [doglink]});
        console.log(`O membro ${message.author.username} usou o comando f!dog.`)
}