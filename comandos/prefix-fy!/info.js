exports.run = (client, message) => {
  const moment = require("moment");
  require("moment-duration-format");
  var duration = moment.duration(client.uptime).format(" D[d], H[h], m[m], s[s]");
  let args = message.content.split().slice(0);

const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setColor('#ff9d00')
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("**Oi, eu sou a Foxly, um simples bot para o Discord!**")
.setDescription("**<:informacoes:459045319129432064> Informações:**")
.addField("<:moderatorboy:444037954269216769> Dono:", `🔸 <@392053413741068288>`, true)
.addField("<:icons8grupodeusurios48:448423630624260096> Usuários:", `🔸 ${client.users.size}`, true)
.addField("<:icons8servidores48:449305105402036224> Servidores:", `🔸 ${client.guilds.size}`, true)
.addField("<:icons8servidor64:449304979258212353> Canais:", `🔸 ${client.channels.size}`, true)
.addField("<:blobpeek:439911893449048086> Emojis:", `🔸 ${client.emojis.size}`, true)
.addField("<:icons8conexomdia48:449304460485984277> Ping:", `🔸 ${Math.round(client.ping)}ms`, true)
.addField("<:icons8tempo48:449304463933440002> Uptime:", `🔸 ${duration}`, true)
.addField("<:icons8slotdememria48:449304462411169792> RAM", `🔸 ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb`, true)
.addField("<:dev:459045319397605377> Programadores", `** Márcio#1636 **|** Ana#0002 **|** ＬＯＮＥＬＹ😢#1270 **|** Acnologia#7970 **|** Julia#5304 **|** Blue Slime.`, true)
.setThumbnail('https://cdn.discordapp.com/emojis/459045319129432064.png?v=1')
.setTimestamp()
.setFooter(message.author.username, client.user.avatarURL);

message.channel.send(embed)
}