exports.run = (client, message, args) => {

    message.channel.sendMessage({
        "embed": {
          "description": "**Convite's da Foxly \n \n :love_letter: Me convide para seu servidor: [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=452960448170557450&permissions=8&scope=bot) \n :mailbox_with_mail: Meu servidor: [Clique aqui](https://discord.gg/NEytXE4)**",
          "color": ('55512'),
          "footer": {
            "icon_url": message.author.displayAvatarURL,
            "text": message.author.username
          },
          "thumbnail": {
            "url": "https://imgur.com/Gv7a7iQ.png"
          }
        }
      });
    
}
