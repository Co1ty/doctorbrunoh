exports.run = (client, message, args)  => {

    const moment = require('moment');
    moment.locale('pt-br'); 



const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
.setColor('#ff9d00')
.setTitle(`Horario :clock:`)
.addField(":calendar: Data", `${moment().format('L')}`, false)
.addField(":clock3: Dia", `${moment().format('D')}`, false)
.addField(":clock10: Mês", `${moment().format('MMMM')}`, false)
.addField(":clock5: Ano", `${moment().format('YYYY')}`, false)
.addField(":star: Dia da semana", `${moment().format('dddd')}`, false)
.setFooter(`(message.author.username, client.user.avatarURL);`)
message.channel.send({embed: embed})
}