const translate = require('google-translate-api');

const Discord = require(`discord.js`);
exports.run = (client, message) => {
    let args = message.content.split(/[ ]+/);
    let lang = args[1];
    let suffix = args.slice(2).join(' ');
    if (!suffix) message.channel.send({
        embed: {
            color: ('#aa00f9'),
            description: `<:Errado:454383164652257292> **${message.author.username}**, Você não me deu nada para traduzir.\n{f!translate \`língua\` \`input\`}`,
            timestamp: new Date(),
            footer: {
                text: message.author.username
            }
        }
    });
    if (!lang) return;
    translate(suffix, {from: 'en', to: lang}).then(res => {
        let embed = new Discord.RichEmbed()
        .setColor ('#ff9d00')
        .setAuthor(`Língua Detectada: "${lang}"`, ``)
        .setDescription(`**Original**: ${suffix}\n**Tradução**: ${res.text}`)
        .setTimestamp()
        .setFooter(message.author.username, message.author.displayAvatarURL);
    return message.channel.send({
        embed: embed
    });
    }).catch(error => message.channel.send({
        embed: {
            color: ('#ff9d00'),
            description: `<:Errado:454383164652257292> **${message.author.username}**, ${error}`,
            timestamp: new Date(),
            footer: {
                text: message.author.username
            }
        }
    }));
}