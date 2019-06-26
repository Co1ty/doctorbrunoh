module.exports = {
  execute(client, message, args) {
    if (message.member.hasPermission("BAN_MEMBERS")) {   
   const membro = message.mentions.members.first();
   const razao = args.slice(1).join(' ');
    if(!membro) return message.reply("Quem eu preciso banir?");
    if(!membro.bannable) return message.reply("Não posso banir o usuário devido seu cargo que é Maior!");
    if (!razao) return message.reply("Por qual motivo devo banir este Usuário?");
    membro.ban(razao).catch(error => message.reply("Erro: "+ error));
    message.reply("Usuário banido com êxito!");
    } else {
      message.reply("Você não tem a Permissão necessária!");
   }
 },
};