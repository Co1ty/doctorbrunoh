const Discord = require("discord.js");


exports.run = async (client, message, args) => {
  
 
    try{

       await 
        message.author.send("Aqui está minha ajuda:").then(msg => msg.delete(1)) // Tá kkkk, a host daqui tá até boa..
       
       
       
       message.channel.send(`<:correto:461905067012784139> **| Ei ${message.author}, meus comandos estão no seu privado.** 😜`)     

    }catch(e){

        message.channel.send(`<:negado:461905075275825172> **| Sua DM está desativada ${message.author}, ative-a para receber minha ajuda.**`)

    } 
  
  message.author.send({
    
    "embed": {
    
    "title": "Me Ajude...",
    "description": "Se você gosta da Foxly, que tal ajudá-la dando [upvote](https://discordbots.org/bot/452960448170557450/vote)",
    "color": 16751872, // tá néh
    "timestamp": new Date(),
    "footer": {
    "icon_url": "https://i.imgur.com/SzWsoR7.png",
    "text": "Me ajude",
    },
    "thumbnail": {
    "url": message.author.displayAvatarURL
    },
    }
  }).then(baileDoJaca => baileDoJaca.delete(1 * 60 * 1000));
    message.author.send({
    
      "embed": {
      
        "title": "Menu Inicial:",
        "description": "**<:menu_inicial:464553053962371073> | Menu Inicial:**\nㅤ\n<:suporte:464553052800548864> | **Suporte:**\nㅤ\n**<:moderacao:464553053106733074> | Moderação:**\nㅤ\n**<:diversao:464553052213346307> | Diversão:**\nㅤ\n**<:utilitrios:464553053803118612> | Utilitários:**\n ㅤ\n**<:photoshop:464553052301688834> | Imagens:**\nㅤ\n**<:musica:464553053383557130> | Música:**\nㅤ\n**<:perfil:464553052821651458> | Perfil:**\nㅤ\n**<:economia:464553832656011275> | Economia:**",
        "color": 16751872,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://i.imgur.com/SzWsoR7.png",
          "text": "Ajuda da Foxly - Página 1 - Menu Inicial"
        },
        "thumbnail": {
                  "url": message.author.displayAvatarURL
        },
      
      }
    
    }).then(ajuda => {
            
              setTimeout(() => {
                      ajuda.react('464553053962371073');
                  }, 500);
                  setTimeout(() => {
                      ajuda.react('464553052800548864');
                  }, 1000);
              setTimeout(() => {
                      ajuda.react('464553053106733074');
                  }, 1500);
              setTimeout(() => {
                      ajuda.react('464553052213346307');
                  }, 2000);
              setTimeout(() => {
                      ajuda.react('464553053803118612');
                  }, 2500);
              setTimeout(() => {
                      ajuda.react('464553052301688834');
                  }, 3000);
              setTimeout(() => {
                      ajuda.react('464553053383557130');
                  }, 3500);
              setTimeout(() => {
                      ajuda.react('464553052821651458');
                  }, 4000);
              setTimeout(() => {
                      ajuda.react('464553832656011275');
                  }, 4500);
              
            
          const collector = ajuda.createReactionCollector((r, u) => (r.emoji.name === 'menu_inicial' || r.emoji.name === 'suporte' || r.emoji.name === 'moderacao' || r.emoji.name === 'diversao' || r.emoji.name === 'utilitrios' || r.emoji.name === 'photoshop' || r.emoji.name === 'musica' || r.emoji.name === 'perfil' || r.emoji.name === 'economia') && u.id == message.author.id);
        
          collector.on('collect', async r =>{
          
            switch (r.emoji.name) {
              case 'menu_inicial':
                
                ajuda.edit({
                  
                                  "embed": {
  
                        "title": "Menu Inicial:", 
                        "description": "**<:menu_inicial:464553053962371073> | Menu Inicial:**\nㅤ\n<:suporte:464553052800548864> | **Suporte:**\nㅤ\n**<:moderacao:464553053106733074> | Moderação:**\nㅤ\n**<:diversao:464553052213346307> | Diversão:**\nㅤ\n**<:utilitrios:464553053803118612> | Utilitários:**\n ㅤ\n**<:photoshop:464553052301688834> | Imagens:**\nㅤ\n**<:musica:464553053383557130> | Música:**\nㅤ\n**<:perfil:464553052821651458> | Perfil:**\nㅤ\n**<:economia:464553832656011275> | Economia:**",
                        "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 1 - Menu Inicial."
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
  
                      }
                  
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break; // 
              
              case 'suporte':
                ajuda.edit({ 
                  
                              "embed": {
                              
                      "title": "Comandos de Suporte:",
                       
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 2 - Comandos de Suporte."         
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                          "fields": [

                            {
                                "name":"ajuda",
                                "value": "Envia esta mensagem."
                            },
                            {
                                "name":"info",
                                "value": "Mostra a Info do bot."
                            },
                            {
                                "name":"convite",
                                "value": "Veja os convites do bot."
                            },
                                  {
                                "name":"memoria",
                                "value": "Veja a memória usada pelo bot."
                            },
                            {
                                "name":"ping",
                                "value": "Veja a Latência do bot."
                            },
                                  {
                                "name":"uptime",
                                "value": "Veja o tempo do Bot On-Line."
                            },
                            {
                                "name":"erro",
                                "value": "Reporte um erro encontrado no Bot."
                            },
                                  {
                                "name":"sugestao",
                                "value": "Envie uma sugestão diretamente ao Bot."
                            },
                            

                        ]     
                                
                                
  
                      
                          
                  }
                  
                  
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'moderacao':
                ajuda.edit({
                                
                              "embed": {
                              
                      "title": "Comandos de Moderação:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 3 - Comandos de Moderação."         
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                          "fields": [

                            {
                                "name":"ban",
                                "value": "Banir um membro do seu Servidor."
                            },
                            {
                                "name":"kick",
                                "value": "Kickar um usuário do seu Servidor."
                            },
                            {
                                "name":"limpar",
                                "value": "Limpe de 1 até 100 mensagens de uma só vez!"
                            },
                                  {
                                "name":"mute",
                                "value": "Silencia um usuário do seu servidor."
                            },      
                                
                                
                          ]
  
                      
                         
                  }         
                  
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'diversao':
                ajuda.edit({
                                 
                              "embed": {
                              
                      "title": "Comandos de Diversão:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 4 - Comandos de Diversão."         
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                        "fields": [

                            {
                                "name":"8ball",
                                "value": "Faça uma pergunta à bola mágica."
                            },
                            {
                                "name":"abracar",
                                "value": "Dê um abraço naquele usuário que você sempre quis."
                            },
                            {
                                "name":"beijar",
                                "value": "Dê um beijo naquele(a) seu(a) 10/10."
                            },
                            {
                                "name":"dado",
                                "value": "Veja se você tem sorte e o dado cai no número desejado."
                            },      
                            {
                                "name":"diga",
                                "value": "Faça o bot repetir sua mensagem."
                            },
                            {
                                "name":"moeda",
                                "value": "Cara ou coroa?"
                            },
                            {
                                "name":"reverse",
                                "value": "Veja a pronúncia de uma palavra ao contrário."
                            },     
                                
                          ]        
  
                      
                         
                  }                
                
                
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'utilitrios':
                ajuda.edit({
                                         
                              "embed": {
                              
                      "title": "Comandos de Utilitários:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 5 - Comandos Utilitários."         
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                        "fields": [

                            {
                                "name":"avatar",
                                "value": "Veja o avatar do usuário mencionado."
                            },
                            {
                                "name":"data",
                                "value": "Veja a data completa do Brasil."
                            },
                            {
                                "name":"emojis",
                                "value": "Veja os emojis personalizados do servidor."
                            },
                            {
                                "name":"icone",
                                "value": "Veja o ícone do servidor."
                            },
                            {
                                "name":"roles",
                                "value": "Veja os cargos do servidor."
                            },
                            {
                                "name":"serverinfo",
                                "value": "Veja as informações do servidor."
                            },
                            {
                                "name":"userinfo",
                                "value": "Veja as informações de um usuário."
                            },
                            {
                                "name":"votar",
                                "value": "Inicia uma votação em seu servidor."
                            },
                            {
                                "name":"traduzir",
                                "value": "Com dúvida em outras linguas? Traduza com este comando."
                            },
                            

                        ]         
                                
  
                      
                         
                  }        
                
                
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'photoshop':
                ajuda.edit({
                                              
                              "embed": {
                              
                      "title": "Comandos de Photoshop:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 6 - Comandos de Photoshop."  
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                        "fields": [

                            {
                                "name":"achiv",
                                "value": "Faça uma conquista ( Você pode digitar que conquista deseja)."
                            },
                            {
                                "name":"primeiraspalavras",
                                "value": "Defina as primeiras palavras do bebê."
                            },
                            {
                                "name": "cat",
                                "value": "Veja um GIF ou IMAGEM aleatória de um gato."
                            },
                            {
                                "name":"dog",
                                "value": "Veja um GIF ou IMAGEM aleatória de um cachorro."
                            },
                            {
                                "name":"meme",
                                "value": "Veja um meme aleatório."
                            },
                                
                                
                          ]        
  
                      
                         
                  }   
                
                
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'musica':
                ajuda.edit({
                                                
                              "embed": {
                              
                      "title": "Comandos de Música:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 7 - Comandos de Música."         
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                        "fields": [

                            {
                                "name":"play",
                                "value": "Comece a tocar músicas." 
                            },
                            {
                                "name":"skip",
                                "value": "Pule a música que está tocando."
                            },
                            {
                                "name": "stop",
                                "value": "Pare as músicas."
                            },
                            {
                                "name":"queue",
                                "value": "Veja a lista de músicas que irão tocar."
                            },
                                
                                
                          ]         
  
                      
                         
                  } 
                
                
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'perfil':
                ajuda.edit({
                                                
                              "embed": {
                              
                      "title": "Comandos de Perfil:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 8 - Comandos de Perfil."         
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                        "fields": [

                            {
                                "name":"profile",
                                "value": "Veja o perfil do usuário mencionado." 
                            },
                            {
                                "name":"sobre",
                                "value": "Defina algo sobre você."
                            },
                            {
                                "name": "setbackground",
                                "value": "Escolha um wallpaper para seu perfil."
                            },
                            
                                
                                
                          ]         
          
  
                      
                         
                  } 
                
                
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              case 'economia':
                ajuda.edit({
                                                
                              "embed": {
                              
                      "title": "Comandos de Economia:",
                      
                      "color": 16751872,
                        "timestamp": new Date(),
                        "footer": {
                          "icon_url": "https://i.imgur.com/SzWsoR7.png", 
                          "text": "Ajuda da Foxly - Página 9 - Comandos de Economia." 
                        },
                        "thumbnail": {
                                  "url": message.author.displayAvatarURL
                        },
                        "fields": [
                          {
                            "name": "daily",
                            "value": "Pegue seu prêmio diário."
                          }
                        
                        ]        
  
                      
                         
                  } 
                
                
                });
                r.users.filter(u => r.remove(u.id !== message.author.id));
                break;
                
              
                
             }
          
          });
        
            setTimeout(() => {
            ajuda.delete();
        }, 1 * 60 * 1000);
    
    }); 
  
  
  
  }