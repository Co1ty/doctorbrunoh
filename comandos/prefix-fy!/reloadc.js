exports.run = (client, message, args) => {

const dono = "392053413741068288"

    let reason = args.slice(0).join(' ');

    if (message.author.id === "392053413741068288"){
    if (reason.length < 1) return message.reply('**Qual comando eu preciso reiniciar?**');

    delete require.cache[require.resolve(`./${args[0]}.js`)];

    message.channel.sendMessage("**<:correto:438399398733414401> " + message.author + " Comando " + args[0] + " reiniciado com sucesso!**");

    } else {
    message.reply("**<:Errado:454383164652257292> Você não é o Dono do Bot para executar este comando, tente com outra raposa! :wink:**");
}
}