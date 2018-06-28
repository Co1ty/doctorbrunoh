exports.run = (client, message, args)  => {
let reason = args.slice(0).join(' ');
  if (message.author.bot) return message.reply("**<:Errado:454383164652257292> Meus amigos bot's não usam este comando! :rage:**")
  if (!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.reply("**<:Errado:454383164652257292> Você não tem permissão para limpar o chat!**");
  if (reason.length < 1) return message.reply('**Quantas mensagens você quer apagar?**');
  message.channel.bulkDelete(`${args[0]}`)
    setTimeout(function() {
        message.channel.sendMessage(`**:wastebasket: Removido ${args[0]} mensagens por <@${message.author.id}> !**`).then((value) => {
            setTimeout(() => {
                value.delete();
            }, 5000);
        });
    }, 2000)
}