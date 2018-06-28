module.exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("KICK_MEMBERS")){
  return message.reply("<:Errado:454383164652257292> " + "**| Você precisa da permissão: \"KICK_MEMBERS\" para kickar alguém!**").catch(console.error);
}
if (message.mentions.users.size === 0){
  return message.reply("<:Errado:454383164652257292> " + "**| Por favor, mencione a pessoa que eu devo kickar!**").catch(console.error);
}
let kickmember = message.guild.member(message.mentions.users.first());
if(!kickmember){
  message.reply("<:Errado:454383164652257292> " + "**| Esse usuário não parece válido!**");
}
if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")){
  return message.reply("<:Errado:454383164652257292> " + "**| Eu preciso da permissão: \"KICK_MEMBERS\"** ").catch(console.error);
}
kickmember.kick().then(member => {
  message.reply(`${member.user.username} **foi kickado com sucesso!**`).catch(console.error);
}).catch(console.error)

}

module.exports.help = {
    name: "kick"
}