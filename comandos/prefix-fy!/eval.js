exports.run = (client, msg, args, config) => {
        var Eval    = args.join(' '),
        guild   = msg.channel.guild,
        channel = msg.channel;

  
        if(msg.author.id !== '392053413741068288')
        return msg.channel.send("<:Errado:454383164652257292> **Você nao tem permissao para fazer isso!**")
        
    if (Eval.size === 0) return msg.channel.send("<:Errado:454383164652257292> **Você precisa dizer alguma coisa para eu avaliar!**") 
    if(!Eval) return
       try{
         msg.channel.send({
           embed: {
          author: {name: 'Sucesso!'},
          title: ' Comando:',
          description: `\`\`\`js\n${Eval}\n\`\`\``,
          color: ('55512'),
          fields: [
            {
            name: ' Resultado:',
            value: `\`\`\`js\n${eval(Eval)}\n\`\`\``
          }]
           }
         })
  
       }catch(err){
         msg.channel.send({
           embed: {
          author: {
            name: 'Ocorreu um erro!'
          },
          title: ' Comando:',
          description: `\`\`\`js\n${Eval}\n\`\`\``,
          color: ('55512'),
          fields: [
            {
            name: ` Resultado: ${err.name}`,
            value: `\`\`\`js\n${err.msg}\n\`\`\``
          }]
           }
         })
       }
  },
  {
    requirements: {
      userIDs: ['392053413741068288']
    },
      permissionmsg: '<:Errado:454383164652257292> Voce nao tem permissao para isso!'
}
