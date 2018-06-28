var queue = {};
const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const fs = require('fs')
const database = require('./database.js');

let userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));

async function getEval(message, args) {
  if (message.content.includes("token")) return;
  let code = args.join(' ');
  
  try {
    let evaled = await eval(code);
    
    if (evaled == null) evaled = 'null';
    if (evaled == undefined) evaled = 'undefined';
    
    var msg12 = `Código: \n \`\`\`js\n${code}\`\`\`\n Resultado: \n\`\`\`LDIF\n ${evaled}\`\`\` \n`
    // ei, ela tá normal, ela só não tem perm pra falar no LabNegro
    message.channel.sendMessage(msg12.replace(/process.env.TOKEN/g, 'cu')
  } catch (err) {
    message.channel.sendMessage(`Código:\n\`\`\`js\n${code}\`\`\`\n **Erro:** \n\`\`\`LDIF\n${err}\`\`\` \n`)
  }
                                              
  
}

client.on("ready", () => {
  console.log("Pronto");
  client.user.setActivity(`🦊Atualmente ajudando ${client.guilds.size } Tocas de raposas e ${client.users.size} Raposinhas! 🦊`)
     setInterval(() => {
       client.user.setPresence({ game: { name: 'Minhas informações: fy!info 😄', type: 1, url: 'https://www.twitch.tv/foxly_bot_discord'} }); 
},20 * 500 )
    setInterval(() => {
      client.user.setPresence({ game: { name: 'Quer ajuda? Use fy!ajuda 😜', type: 1, url: 'https://www.twitch.tv/foxly_bot_discord'} });
    },20 * 500 )
    setInterval(() => {
      client.user.setPresence({ game: { name: 'Convide-me: fy!convite 😄', type: 1, url: 'https://www.twitch.tv/foxly_bot_discord'} });
},20 * 500 )
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
 
  let args = message.content.split(" ").slice(1);
  // The list of if/else is replaced with those simple 2 lines:
 
  try {
    let commandFile = require(`./comandos/prefix-fy!/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    message.channel.send(`${message.author} ** | 🙅 Eu não conseguí encontrar este comando em minha lista! Porfavor, verifique meus comandos utilizando: fy!ajuda. <:foxly:459045319519240203>**`);
  }
 
});
client.on("message", message => {
if(message.content === '<@'+ client.user.id +'>'){
message.channel.send('**<:400751146689495041:454337417575530520> Oi, meu prefixo é fy! \n Precisa de ajuda em meus comandos? Use fy!ajuda**')
}
})

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
  .setFooter(`Mensagem de Tchau-Tchau da Foxly`)
  .setTimestamp()
  client.channels.get('457609253276876800').send({embed});
});

client.on('message', message => {
  let sender = message.author;
  let msg = message.content.toUpperCase();
  let prefix = "fy!"
  var ciano = 55512

  if(message.author.bot) return

  if (!userData[sender.id]) userData[sender.id] = {}
  if (!userData[sender.id].nivel) userData[sender.id].nivel = 0;
  if (!userData[sender.id].xp) userData[sender.id].xp = 0;

  if(msg){
    userData[sender.id].xp += 5
  }
  if(userData[sender.id].xp > 500){
    userData[sender.id].xp -= 500
    userData[sender.id].nivel += 1
    message.channel.send({embed:{
      title:"Up",
      color:ciano,
      description: sender.username + "🎉 Upou para o nivel " + userData[sender.id].nivel + "!"
    }})
  }
});
  
client.login(process.env.TOKEN) 
