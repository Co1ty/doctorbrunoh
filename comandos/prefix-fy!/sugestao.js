const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let sugestao = args.join(" ").slice(0);
let user = message.author.username;
var canal = bot.guilds.get('457240762569195533') && bot.channels.find('name', 'sugestões')
let guild = message.guild.name;
let embed = new Discord.RichEmbed()
    .setTitle("Sugestão")
    .setThumbnail(user.displayAvatarURL)
    .addField("Sugestão:", sugestao)
    .addField("Sugerido Por:", user)
    .addField("Sugerido Em:", guild)
    .setColor("#f49542")
    message.channel.send(":white_check_mark: **| A Sugestão foi enviada para meu servidor!**")
    canal.send(embed)
    .then(async function (message) {
    await message.react("👍")
    await message.react("👎")
    await message.react("💖")
      });
}