exports.run = (client, message, args) => {
    

        const cargoNOME = 'Mute'


    let user = message.mentions.users.first(); 
    let reason = args.slice(1).join(' ');
    if (!message.member.hasPermission(["MANAGE_ROLES"])) return message.reply("**<:Errado:454383164652257292> Agora você tem permissão para mutar? Que bom, pq não me informaram nada**");
    if (message.mentions.users.size < 1) return message.reply("**<:Errado:454383164652257292> Quer que eu use uma bola de Cristal e descubra quem você quer mutar ou vai me dizer o nome da pessoa?**");
    if (reason.length < 1) return message.reply('**Quanto tempo você quer que este membro fique mutado?**');
    if(message.guild.member(message.mentions.users.first()).highestRole.position >= message.member.highestRole.position){
        message.reply("**<:Errado:454383164652257292> Este usuário tem um cargo maior que o seu!**");
    } else {
        if (message.guild.roles.find("name", cargoNOME)){
            var mute = message.guild.roles.find("Mutado",cargoNOME)
            for (var i =0;i < mute.members.size;i++){
                if (mute.members.array()[i].id ==  message.mentions.users.first().id){
                message.reply("Usuário já foi mutado!")
            }}
            message.guild.members.get(message.mentions.users.first().id).addRole(mute.id);
                setTimeout(function() {
                    message.guild.members.get(message.mentions.users.first().id).removeRole(mute.id);
                    message.channel.sendMessage("**<@" + message.mentions.users.first().id + ">, Finalmente você foi desmutado, não conseguia te segurar!!**");
                },args[1] * 1000 * 60)
                message.reply("**Usuário mutado por " + args[1] + "minutos**");
               message.mentions.users.first().send("**Você foi mutado(a) no servidor " + message.guild.name + " por " + args[1] + "m !**");
               message.mentions.users.first().send("**Você foi desmutado(a) no servidor " + message.guild.name + "!**");
        }   if(!mute){
            message.reply("**<:Errado:454383164652257292> Use o comando novamente, pois não identifiquei o cargo " + cargoNOME + "**");
            message.guild.createRole({
                name: cargoNOME
            })
        }
    }

}