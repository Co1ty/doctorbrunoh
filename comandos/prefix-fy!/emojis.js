const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
try {
    let emojis;
    if (message.guild.emojis.size === 0) emojis = 'Nenhum emoji personalizado foi encontrado nesse servidor!';
    else emojis = message.guild.emojis.map(e => e).join(' ');
    var emojisembed = new Discord.RichEmbed()
    .setAuthor(`Emojis do servidor ${message.guild.name}`, message.guild.iconURL)
    .setColor('#ff9d00')
    .setDescription(emojis)
    message.channel.send(emojisembed)
    } catch (err) {
    message.channel.send(`**${err.name}: ${err.message}**`)
    }
}