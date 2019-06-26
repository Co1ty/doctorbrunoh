exports.run = (client, message, args) => {
  
  message.channel.sendMessage({
    embed: {
      "description": `**🏓 Pong! ${Date.now() - message.createdTimestamp}ms.**`,
      "color": ('55512'),
      "thumbnail": {
        "url": " "
      },
    }
  })
  
  
}