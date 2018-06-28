exports.run = (client, message) => {
  const moment = require("moment");
  require("moment-duration-format");
  var duration = moment.duration(client.uptime).format(" D[d], H[h], m[m], s[s]");
  let args = message.content.split().slice(0);
  moment.locale('pt-BR');  
 function verificationLevel() {
    var guildVerification = message.guild.verificationLevel
    if  (guildVerification == "0") {
    return "Nenhum"
  } else if (guildVerification == "1") {
    return ("Baixo")
      
  } else if  (guildVerification == "2") {
    return ("Médio")
    } else if (guildVerification == "3") {
    return ("Alto")
	    } else if (guildVerification == "4") {
    return ("Muito Auto")
    }
  }
  function tipo() {
    var guildVerification = message.channel.type
  if (guildVerification == "text") {
    return (":notepad_spiral: l Texto")
	    } else if  (guildVerification == "voice") {
    return (":microphone: l Voz")

    }
  }
  function regiao() {
    var guildVerification = message.guild.region
    if  (guildVerification == "en-us") {
    return ":flag_us: Estados Unidos"
  } else if (guildVerification == `brazil`) {
    return (":flag_br: Brasil")
	    } else if  (guildVerification == "russia") {
    return (":flag_ru: Rússia")
    } else if (guildVerification == "singapore") {
    return (":flag_sg: Singapura")
	    } else if (guildVerification == "hongkong") {
    return (":flag_hk: Hong Kong")
  } else if (guildVerification == "unnamed") {
    return ("<:blobfacepalm:369904810784325635> l Eu não fiz mais functions, desculpe, volte mais tarde")
  } else if (guildVerification == "eu-west") {
    return (":flag_eu: Europa Oeste")
  } else if (guildVerification == "us-east") {
    return (":flag_us: Costa Leste dos Estados Unidos")
  } else if (guildVerification == "sydney") {
    return (":flag_au: Sydney (Dentro da austrália)")
  } else if (guildVerification == "us-central") {
    return (":flag_us: Estados Unidos Central")
  } else if (guildVerification == "us-south") {
    return (":flag_us: Região Sul dos Estados Unidos")
  } else if (guildVerification == "us-west") {
    return (":flag_us: Região Oeste dos Estados Unidos")
  } else if (guildVerification == "us-west") {
    return (":flag_gb: Londres ")
    
    }
  }
  
const Discord = require('discord.js');
const embed = new Discord.RichEmbed()
.setColor('#ff9d00')
.setAuthor(`${message.guild}`, `https://cdn.discordapp.com/emojis/314003252830011395.png`)
.setThumbnail(message.guild.iconURL)
.setDescription("**<:informacoes:459045319129432064> Informações do Servidor:**")
.addField(`<:icons8sms48:448424466729402370> ID:`, message.guild.id, true)
.addField("<:peepoQueen:436649301150662676> Dono do Servidor:", message.guild.owner.user.username + '#' + message.guild.owner.user.discriminator, true)
.addField(`<:icons8servidor64:449304979258212353> Canais de Texto:`, `${message.guild.channels.filter(channel => channel.type == 'text').size}`, true)
.addField(`<:icons8scandereconhecimentodevoz4:448424466981322763> Canais de Voz:`, `${message.guild.channels.filter(channel => channel.type == 'voice').size}`, true)
.addField("📆 Criado em:", moment(message.guild.createdAt).format('lll'), true)
.addField(`📆 Entrei Aqui Em:`, moment(message.guild.joinedAt).format(`lll`), true)
.addField(`:robot: Bot's:`, message.guild.members.filter(member => member.user.bot).size, true)
.addField(`🌎 Região:`, message.guild.region, true)
.addField(`<:correto:438399398733414401> Nível de Verificação:`, `${verificationLevel()}`, true)
.setTimestamp()
.setFooter(message.author.username, client.user.avatarURL);

message.channel.send({embed: embed})
}