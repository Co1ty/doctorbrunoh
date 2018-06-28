exports.run = (client, message) => {
  const moment = require("moment");
  require("moment-duration-format");
  var duration = moment.duration(client.uptime).format(" D[d], H[h], m[m], s[s]");
  let args = message.content.split().slice(0);
  const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setColor('#ff9d00')
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle("**Tempo Online:**")
.addField("<:icons8tempo48:449304463933440002> Uptime:", `🔸 ${duration}`, true)
.setTimestamp()
.setFooter(message.author.username, client.user.avatarURL);

message.channel.send(embed)
}