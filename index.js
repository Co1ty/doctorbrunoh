var queue = {};
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const fs = require('fs')
const database = require('./database.js');
client.login(config.token);

let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));

async function getEval(message, args) {
  if (message.content.includes("token")) return;
  let code = args.join(' ');
  
  try {
    let evaled = await eval(code);
    
    if (evaled == null) evaled = 'null';
    if (evaled == undefined) evaled = 'undefined';
    
    var msg12 = `Código: \n \`\`\`js\n${code}\`\`\`\n Resultado: \n\`\`\`LDIF\n ${evaled}\`\`\` \n`
    
    message.channel.sendMessage(msg12.replace(/client.login(process.env.token)/g, `Quer saber por que?`))
    
  } catch (err) {
    message.channel.sendMessage(`Código:\n\`\`\`js\n${code}\`\`\`\n **Erro:** \n\`\`\`LDIF\n${err}\`\`\` \n`)
  }
                                              
  
}

client.on("ready", () => {
  client.user.setActivity(`🦊 Atualmente ajudando ${client.guilds.size } Tocas de raposas e ${client.users.size} Raposinhas! 🦊`)  
  setInterval(() => {
       client.user.setPresence({ game: { name: 'Minhas informações: fy!info 😄', type: 1, url: 'https://www.twitch.tv/foxly_bot_discord'} }); 
},20 * 500 )
    setInterval(() => {
      client.user.setPresence({ game: { name: 'Quer ajuda? Use fy!ajuda 😜', type: 1, url: 'https://www.twitch.tv/foxly_bot_discord'} });
    },20 * 500 )
    setInterval(() => {
      client.user.setPresence({ game: { name: 'Convide-me: fy!convite 😄', type: 1, url: 'https://www.twitch.tv/foxly_bot_discord'} });
},20 * 500 )
setInterval (() => {
const channel = client.channels.get("425865939691765760");
if (!channel) return;
const embed = new Discord.RichEmbed()
.setColor('#aa00f9')
.setDescription('**Olá, eu sou a <@452960448170557450>, um simples bot para o discord! Deseja me adicionar ao seu servidor? [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=452960448170557450&permissions=8&scope=bot). Obrigado pela colaboração, se precisar de ajuda use *fy!ajuda*!**')
//channel.send('**Olá, eu sou a <@452960448170557450>, um simples bot para o discord! Deseja me adicionar ao seu servidor? [Clique aqui](https://discordapp.com/oauth2/authorize?client_id=452960448170557450&permissions=8&scope=bot). Obrigado pela colaboração, se precisar de ajuda use *f!ajuda* ou *f!help*!**');
channel.send(embed);
}, 1000 * 60 * 60 *24)
}) 

client.on("message", message => {
  if (message.author.bot) return;
 // 
  if (!message.content.startsWith(config.prefix)) return;
//  if (message.content.indexOf(config.prefix) !== 0) return;
 /* var argsu = message.content.split(" ").slice(0);
  const searchString = argsu.join(' ');
  const serverQueue = queue.get(message.guild.id);
  const url = argsu[1] ? argsu[1].replace(/<(.+)>/g, '$1'): '';*/
  
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  
  let args = message.content.split(" ").slice(1);
  
  try {
    let commandFile = require (`./comandos/prefix-fy!/${command}.js`);
    //let Musica = require(`./musica/prefix-f!/${command}.js`)
    commandFile.run(client, message, args);
   // Musica.run(client, message, args)
  } catch (err) {
  }  
})
client.on("message", message => {
if (message.content.includes("<@452960448170557450>")) {
      if (message.author.bot) return;
      message.reply("**🙋 | Olá, perdido em prefixos?\n Meu prefixo é fy!\n Se precisar de ajuda use: fy!ajuda\n Obrigado por me utilizar!! 😉.**");
}
});

client.on('guildMemberAdd', member => {
  if(member.guild.id !== "425864977996578816") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
  .setColor('#15ff05')
  .setThumbnail(avatar)
  .addField(':tada: | Bem vindo(a)!', `Bem vindo(a) ${member.user.username} ao universo da programação`)
  .addField(`:family_mwgb: | Você foi o usuário número ${member.guild.memberCount}`, `Tomara que goste do mundo da programação!`)
  .setFooter(`Mensagem de Boas-Vindas da Foxly`)
  .setTimestamp()
  client.channels.get('425865939691765760').send({embed});
});

client.on('guildMemberAdd', member => {
  if(member.guild.id !== "457240762569195533") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
  .setColor('#15ff05')
  .setThumbnail(avatar)
  .addField(':tada: | Bem vindo(a)!', `Bem vindo(a) ${member.user.username} á minha Floresta`)
  .setFooter(`Mensagem de Boas-Vindas da Foxly`)
  .setTimestamp()
  client.channels.get('457609235103219746').send({embed});
});
client.on('guildMemberRemove', member => {
  if(member.guild.id !== "425864977996578816") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setThumbnail(avatar)
  .setTitle(`:sob: |Tchau ${member.user.username}, infelizmente você saiu do nosso universo`)
  .setFooter(`Mensagem de Tchau-Tchau da Foxly`)
  .setTimestamp()
  client.channels.get('425865939691765760').send({embed});
});
client.on('guildMemberRemove', member => {
  if(member.guild.id !== "457240762569195533") return;
  let avatar = member.user.avatarURL
  let embed = new Discord.RichEmbed()
  .setColor('RED')
  .setThumbnail(avatar)
  .setTitle(`:sob: | ${member.user.username} saiu da minha floresta!`)
  .setFooter(`Mensagem de Boas-Vindas da Foxly`)
  .setTimestamp()
  client.channels.get('457609253276876800').send({embed});
});

client.on('message', message => {
  let sender = message.author;
  let msg = message.content.toUpperCase();
  let prefix = "f!"
  var ciano = 55512

  if(client.user.id === message.author.id) { return }

  if (!userData[sender.id]) userData[sender.id] = {}
  if (!userData[sender.id].nivel) userData[sender.id].nivel = 0;
  if (!userData[sender.id].xp) userData[sender.id].xp = 0;

  if(msg){
    userData[sender.id].xp += 5}
  if(userData[sender.id].xp > 500){
    userData[sender.id].xp -= 500
    userData[sender.id].nivel += 1
    message.channel.send({embed:{
      title:"Up",
      color:ciano,
      description:sender.username + ". Upou para o nivel " + userData[sender.id].nivel + "!"
    }})
  }
});
client.on('ready', () => console.log("Pronto"));
client.login(config.token) 
