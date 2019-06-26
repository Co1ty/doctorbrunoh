var arquivo = require('../queue.js');

exports.run = (client,message,args)=>{
    if(!arquivo.queue.get(message.guild.id)){
        message.channel.send("Não tem nenhuma música para eu pausar")
        return;
    }else{
        arquivo.queue.get(message.guild.id).connection.pause()
        message.channel.send("Música pausada")
        return;
    }
}