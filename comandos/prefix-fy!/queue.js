var arquivo = require('../queue.js');
var discord = require('discord.js');

var numero = 0
exports.run = (client,message,args)=>{
    if(!arquivo.queue.get(message.guild.id)){
        message.channel.send("Não tem nenhuma musica na queue")
        return;
    }else{
       var embed = new discord.RichEmbed()
       .setThumbnail(message.guild.iconURL)
       .addField("Fila De Musicas:",`${arquivo.queue.get(message.guild.id).som.titulo.map(musica=>`**${++numero}** - ${musica}`).join("\n")}`)
       .setColor('#28DECF');

       message.channel.send(embed)
       numero = 0
    }
}