exports.run = (client, message, args)  => {
    let args2 = args.join(``)
    if(args2.length < 1) {
        message.channel.sendMessage('**Espero que você esteja cansado(a) de tanto digitar...**')
        

const Discord = require('discord.js')
const embed = new Discord.RichEmbed()
.setColor('#ff9d00')
.setTitle(`Oops!`)
.setDescription(`**Parece que tem algo de errado**`)
.addField(`**Você não deu argumento**`, `**Ex: f!ppt pedra;** *temos 3 opções: pedra, papel e tesoura :)*`)
.setFooter(`Oops!`)
message.channel.send({embed: embed})

    } else {
   
                var texto = [`**Você escolheu <:Pedra:457243603979468820>, eu escolhi :newspaper:** \n :flag_black:  **Que pena... Você perdeu, mas o que vale é a intenção**`, `**Você escolheu <:Pedra:457243603979468820>, eu escolhi <:Pedra:457243603979468820>** \n :flag_white: **Empate! ** `, `:tada: **Você escolheu <:Pedra:457243603979468820>, eu escolhi <:Tesoura:457243922910019584> \n :small_blue_diamond: **Parabéns você ganhou!`];
                const random = texto[Math.floor(Math.random() * texto.length)];
                var texto2 = [`**Você escolheu :newspaper:, eu escolhi <:Tesoura:457243922910019584>** \n :flag_black:  **Que pena... Você perdeu, mas o que vale é a intenção**`, `**Você escolheu :newspaper:, eu escolhi :newspaper:** \n :flag_white: **Empate! ** `, `:tada: **Você escolheu :newspaper:, eu escolhi <:Pedra:457243603979468820> \n :small_blue_diamond: **Parabéns você ganhou!`];
                const random2 = texto2[Math.floor(Math.random() * texto2.length)];
                var texto3 = [`**Você escolheu :<:Tesoura:457243922910019584>, eu escolhi <:Pedra:457243603979468820>** \n :flag_black:  **Que pena... Você perdeu, mas o que vale é a intenção**`, `**Você escolheu <:Tesoura:457243922910019584>, eu escolhi <:Tesoura:457243922910019584>** \n :flag_white: **Empate! ** `, `:tada: **Você escolheu <:Tesoura:457243922910019584>, eu escolhi :newspaper: \n :small_blue_diamond: **Parabéns você ganhou!`];
                const random3 = texto3[Math.floor(Math.random() * texto3.length)];
        if(args2.includes(`tesoura`)) {
            message.channel.send(random3)
        } else { 
                if (args2.includes('pedra')) {
                    message.channel.sendMessage(random);
                } else {
                    if (args2.includes('papel')) {
                        message.channel.sendMessage(random2);
                    } else {
    }  
  }
 }
}
}
