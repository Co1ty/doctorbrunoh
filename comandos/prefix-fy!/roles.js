exports.run = (client, message) => {    
let string = ''
for(var i = 0;i < message.guild.roles.size;i++){
   string  += `${message.guild.roles.array()[i]}` + `, `;
}
  
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setColor('#ff9d00')
.setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
.setDescription("**Cargos do Servidor:**")
.addField(`🥇 Roles: [${message.guild.roles.size}]`, string, true)
.setTimestamp()
.setFooter(message.author.username, client.user.avatarURL);

message.channel.send({embed})
}