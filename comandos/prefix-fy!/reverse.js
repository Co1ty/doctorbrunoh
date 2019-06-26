exports.run = (client, message, args)  => {

    let reason = args.slice(0).join(' ');

      if (reason.length < 1) return message.reply('**<:Errado:454383164652257292> Que palavra preciso reverter?**');

    message.channel.sendMessage(args.join(' ').split('').reverse().join(''));

}