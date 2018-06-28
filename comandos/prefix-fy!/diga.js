exports.run = (client,message,args)=>{
    var texto = args.slice(0).join(" ");
    message.delete()
    message.channel.send(texto)
}