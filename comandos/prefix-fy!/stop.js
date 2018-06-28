var arquivo = require('../queue.js');

exports.run = (client,message,args)=>{
    if(!arquivo.queue.get(message.guild.id)){
        message.channel.send("<:blobhug2:445898102759489537> | Não achei nenhuma playlist ou música para a **DJ Foxly** parar de tocar!")
        return;
    }else{
        arquivo.queue.get(message.guild.id).som.id = []
        arquivo.queue.get(message.guild.id).som.titulo = []
        arquivo.queue.get(message.guild.id).connection.end()
        message.channel.send("<:playlist:446247575755030529> | Parei a(s) Música(s)")
        return;
    }
}