var discord = require('discord.js')
var ytdl = require('ytdl-core');
var info = require('youtube-info');
var api = require("simple-youtube-api");
var config;
var arquivo = require('../queue.js');
var musica2;
var numero = 0
var key = new api('AIzaSyAfEYgTf8XmbPe8mBz9baavfpPG0n5jTnI')

exports.run = (client,message,args)=>{

  var conteudo = args.slice(0).join(" ");
  const voiceChannel = message.member.voiceChannel;

if(!voiceChannel)return message.reply("<:Errado:454383164652257292> Me desculpe, mas você precisa estar em um canal de voz para tocar música!")
if(!conteudo.length)return message.reply("<:Errado:454383164652257292> Que Música deseja que eu Toque?")
    key.searchVideos(conteudo,10).then(function(sucesso){
        if(!sucesso.length){
            var embed = new discord.RichEmbed()
            .setColor("#ff9d00")
            .setDescription("<:Errado:454383164652257292> Infelizmente não achei Nenhum Resultado para **" + conteudo + "**");

            message.channel.send(embed)
            return;
        }
        var embed = new discord.RichEmbed()
        .setTitle("<:musica:459045318919585792> Resultados Para **" + conteudo + "**")
        .setDescription(`${sucesso.map(musica=>`**${++numero}** - ${musica.title}`).join("\n")} \n\nForneça um valor para selecionar um dos resultados de pesquisa que vão de 1 a 10.`)
        .setThumbnail(message.author.avatarURL)
        .setColor("#ff9d00");
        message.channel.send(embed)
numero = 0;
        message.channel.awaitMessages(message1=> Number(message1.content) > 0 && Number(message1.content) <= 10 && message1.author.id == message.author.id && sucesso[Number(message1.content) - 1] ,{
        maxMatches:1,
        time: 30000 ,
        errors: ['time']
        }).then(function(musica){
            arquivo.queue.delete("user:"+message.author.id)
            voiceChannel.join().then(function(canal){
                if(arquivo.queue.get(message.guild.id) == null){
                        config = {
                            guild: message.guild.id,
                            channel: canal,
                            canal: message.channel.id,
                            som: {
                                titulo: [],
                                id: []
                            },
                            connection: null
                        }
                        arquivo.queue.set(message.guild.id,config)
                    }
				   if(arquivo.queue.get(message.guild.id).som.id[0]){
                    info(sucesso[Number(musica.first().content) - 1].id,function(erro,musica1){
                        var embed = new discord.RichEmbed()
                       .setTitle("<:musica:459045318919585792> Música adicionada a queue do canal**" + voiceChannel.name + "**")
                        .setThumbnail(musica1.thumbnailUrl)
                        .addField("🏷 Nome da Música:",sucesso[Number(musica.first().content) - 1].title)
                        .addField("<:Perfil:456503083946475520> Publicado Por:",musica1.owner)
                        .addField("👀 Views:",musica1.views)
                        .addField("👍 Likes:",musica1.likeCount)
                        .addField("👎 Deslikes:",musica1.dislikeCount)
                        .addField("<:www:459045319435616286> Link:","https://www.youtube.com/watch?v="+sucesso[Number(musica.first().content) - 1].id)
                        .setColor("#70DB93");
        
                        message.channel.send(embed)
                    })
				   arquivo.queue.get(message.guild.id).som.id.push(sucesso[Number(musica.first().content) - 1].id)
				   arquivo.queue.get(message.guild.id).som.titulo.push(sucesso[Number(musica.first().content) - 1].title)
				   return
				   }
				   arquivo.queue.get(message.guild.id).som.id.push(sucesso[Number(musica.first().content) - 1].id)
				   arquivo.queue.get(message.guild.id).som.titulo.push(sucesso[Number(musica.first().content) - 1].title)
				   
				  async function play (musica){
                    musica2 = await arquivo.queue.get(message.guild.id).channel.playStream(ytdl(musica,{ filter: 'audioonly' }), {volume: 0.5, passes: 3})
                    arquivo.queue.get(message.guild.id).connection = musica2;
					 await arquivo.queue.get(message.guild.id).connection.on("end",function(reason){
                        if (reason == null){
                            play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
                        }else{
                     arquivo.queue.get(message.guild.id).som.id.shift()
                     arquivo.queue.get(message.guild.id).som.titulo.shift()
						 if(arquivo.queue.get(message.guild.id).som.id[0]){
                            play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
                            message.channel.send("<:musica:459045318919585792> Tocando a música " + arquivo.queue.get(message.guild.id).som.titulo[0])
						 }else{
                             var fim = new discord.RichEmbed()
                             .setDescription("Lista de música finalizada! Espero que tenha gostado de usar meus comandos de música! Me convide para seu servidor: [Clique Aqui](https://discordapp.com/oauth2/authorize?client_id=452960448170557450&permissions=8&scope=bot) \n E me dê um Upvote: [Clique Aqui](https://discordbots.org/bot/452960448170557450/vote)");
                            client.guilds.get(arquivo.queue.get(message.guild.id).guild).channels.get(arquivo.queue.get(message.guild.id).canal).send(fim);
                            arquivo.queue.get(message.guild.id).channel.disconnect()
                            arquivo.queue.delete(message.guild.id)
						 }
					 }})
				  }
			play("https://www.youtube.com/watch?v="+arquivo.queue.get(message.guild.id).som.id[0])
			
            info(sucesso[Number(musica.first().content) - 1].id,function(erro,musica1){
                var embed = new discord.RichEmbed()
               .setTitle("<:musica:459045318919585792> Uma Música está Tocando em **" + voiceChannel.name + "**")
                .setThumbnail(musica1.thumbnailUrl)
                .addField("🏷 Nome da Música:",sucesso[Number(musica.first().content) - 1].title)
                .addField("<:Perfil:456503083946475520> Publicado Por:",musica1.owner)
                .addField("👀 Views:",musica1.views)
                .addField("👍 Likes:",musica1.likeCount)
                .addField("👎 Deslikes:",musica1.dislikeCount)
                .addField("<:www:459045319435616286> Link:","https://www.youtube.com/watch?v="+sucesso[Number(musica.first().content) - 1].id)
                .setColor("#70DB93");

                message.channel.send(embed)

            })
            })
            },function(err){
                message.channel.send("<:Errado:454383164652257292> Você não colocou nada em 30 segundos")
            })
        })
    }