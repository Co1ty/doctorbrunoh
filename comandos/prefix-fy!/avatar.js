module.exports.run = async (bot, message, args) => {
  let msg = await message.channel.send("**Gerando o Avatar do Usuário...**");
  let target = message.mentions.users.first() || message.author;

  await message.channel.send({files: [
    {
      attachment: target.displayAvatarURL,
      name: "avatar.png"
    }
  ]});

  msg.delete();
}

module.exports.help = {
    name: "avatar"
}