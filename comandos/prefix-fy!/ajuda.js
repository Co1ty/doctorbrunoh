const Discord = require('discord.js')
exports.run = (client, message) => {
		let embed = new Discord.RichEmbed()
			.setAuthor("Lista de Comandos Foxly - Prefixo: fy!", client.user.displayAvatarURL)
			.setDescription("O Bot Foxly foi criado por: **Bruno Otávio#3239** | [**Servidor de Suporte**](https://discord.gg/A7aYgGT)")
			.setColor('#ff9d00')
			.addField("<a:smile2:438533831566557186> Comandos de Info:", "`ajuda`, `emojis`, `help`, `info`, `invite`, `memoria`, `ping`")
      .addField("<:staff:451167272455897110> Comandos de Moderação:", "`kick`, `limpar`, `mute`, `unmute`")
			.addField("<a:CatDance:451167271185022986> Comandos de Diversão:", '`8ball`, `amor`, `beijar`, `diga`, `moeda`, `ppt`, `simsimi`, `reverse`, `cat`, `dog`, `meme`, `abracar` , `jogodavelha`') 	  
			.addField("🛠 Comandos Utilitários:", "`avatar`, `data`, `emojis`, `icone`, `traduzir`, `votar`, `rep`")
		  .addField("<:FeelsCoolMan:446855001583779840> Comandos de Photoshop:", '`achiv`, `primeiraspalavras`')
			.addField("🎧 Comandos de Música ( MANUTENÇÃO TEMPORÁRIA )", '`play`, `skip`, `stop`, `queue`, `volume`')  
			.addField("💰 Comandos de Economia", '`daily`')
			.setTimestamp()
			.setFooter(message.author.username, client.user.avatarURL);
		message.author.send(embed);
		let embed2 = new Discord.RichEmbed()
			.setColor('#ff9d00')
			.setDescription(`**${message.author}\n \n━─━────────≪ AJUDA DA FOXLY ≫──────────━**\n \n <:icons8editararquivo64:448400941516062720> **| ${message.author.username}, os meus comandos foram enviados no seu privado!** \n<:Errado:454383164652257292> **| Caso não envie verifique se as** *Configurações de Privacidade* **estão ativadas!**\n \n **━─━──────────────────━━─━───────────**\n \n **[ME CONVIDE PARA SEU SERVIDOR](https://discordapp.com/oauth2/authorize?client_id=452960448170557450&permissions=8&scope=bot)\n [MEU SERVIDOR](https://discord.gg/A7aYgGT)\n [MEU WEBSITE](https://foxly.glitch.me/)** `);
		message.channel.send(embed2);
};