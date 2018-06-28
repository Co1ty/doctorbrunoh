exports.run = async(client, message, args) => {
    const Discord = require('discord.js')
    var embed = new Discord.RichEmbed()
      
.setAuthor(`Foi criada uma votação pelo usuário ${message.author.username}`, message.author.avatarURL)

.setColor('#aa00f9')
.setDescription(`${args.join(` `)}`)

.setFooter(`Reaja a baixo para votar`)
           
message.channel.send({embed: embed}).then(message => {
    message.react(`👍`)
    message.react(`👎`)
	message.react(`💖`)
})
}
