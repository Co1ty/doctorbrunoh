const Discord = module.require('discord.js');

var hd = [
    "**Cara**",
    "**Coroa**"
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " **A moeda caiu em:** " + (hd[Math.floor(Math.random() * hd.length)]));
}

module.exports.help = {
    name: "moeda"
}