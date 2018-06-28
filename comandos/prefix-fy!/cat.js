const Discord = module.require('discord.js');   

exports.run = (client,message,args)=>{         
  var cat = ["https://imgur.com/nT1jeVh.gif",
         "https://imgur.com/3dBh78c.gif",
         "https://imgur.com/cpcrzI2.gif",
         "https://imgur.com/NUFLGtr.gif",
         "https://imgur.com/Sw8JrK9.gif",
         "https://imgur.com/LTnRSmD.gif",
         "https://imgur.com/dAXAgQP.gif",
         "https://imgur.com/yW9iEvL.gif"]
       
  var catlink = cat[Math.floor(Math.random() * cat.length)] + ".gif";

        message.channel.send(`**${message.author} | Olha que gatinho fofo...**`, {files: [catlink]});
        console.log(`O membro ${message.author.username} usou o comando f!cat.`)
}