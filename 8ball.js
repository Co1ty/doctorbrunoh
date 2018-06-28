const Discord = module.require('discord.js');

var fortunes = [
    "**🎱 Sim**",
    "**🎱 Não**",
    "**🎱 Talvez**",
    "**🎱 Não sei, tente mais tarde**",
    "**🎱 Depende...**",
];


module.exports.run = async (bot, message, args) => {

if(!args[0]){
  return message.channel.send("<:Errado:454383164652257292> " + "**| Por favor, insira uma pergunta que você gostaria que eu respondesse**")
}
if (args[0]) message.channel.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
else message.channel.send("<:Errado:454383164652257292> " + "**| **Eu não conseguí ler isso :(");
}

module.exports.help = {
    name: "8ball"
}
