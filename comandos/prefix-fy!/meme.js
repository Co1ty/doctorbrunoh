const Discord = module.require('discord.js');   

exports.run = (client,message,args)=>{         
  var memes = ["http://imgur.com/2TlCopY",
         "https://imgur.com/xk6lUuf",
         "https://imgur.com/JgoQgvQ",
         "https://imgur.com/Lj4D27n",
         "https://imgur.com/xJ8J0hz",
         "https://imgur.com/671ILV5",
         "https://imgur.com/NZK9BPC",
         "https://imgur.com/HvUsYXS",
         "https://imgur.com/gPgFbWW",
         "https://imgur.com/mV6yjJ9",
         "https://imgur.com/MGeyHrL",
         "https://imgur.com/mgFf6GU",
         "https://imgur.com/0s2TVSn",
         "https://imgur.com/cyBFY7c"];

        var memelink = memes[Math.floor(Math.random() * memes.length)] + ".png";

        message.channel.send(`**${message.author} | Se liga nesse meme foda...**`, {files: [memelink]});
        console.log(`O membro ${message.author.username} usou o comando f!meme.`)
}