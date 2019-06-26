var arquivo = require('../queue.js');
var discord = require('discord.js');

exports.run = (client,message,args)=>{
if(arquivo.queue.get(message.guild.id) == null){
    message.channel.send("🤔 | Não tem nenhuma musica para eu pular")
    return;
}else{
    async function skip(){
    var titulo = arquivo.queue.get(message.guild.id).som.titulo[0];
    await arquivo.queue.get(message.guild.id).connection.end('🤔 | Musica pulada!');
    message.channel.send("A música **" + titulo + "** foi pulada com sucesso");
    return;
    }
    skip()
}
}