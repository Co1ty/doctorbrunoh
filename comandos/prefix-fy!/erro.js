const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let erro = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let channel = bot.channels.get("463443826342756352")
let embed = new Discord.RichEmbed()
.setTitle("Erro Reportado")
.setThumbnail("https://images-ext-1.discordapp.net/external/nQoe_5zRdR6A5gsh2fevRbNvhoc5A2YIWP7zVdN5_NE/%3Fv%3D1/https/cdn.discordapp.com/emojis/435908220100280320.png?width=80&height=80")
.addField("Erro", erro)
.addField("Reportado Por:", user)
.addField("Reportado Em:", guild)
.setColor("#f49542")

message.channel.send("<:correto:461905067012784139> **| O erro foi reportado para a minha equipe!**")
channel.send(embed).then(i => i.react("⏳"))

}