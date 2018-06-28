const Discord = require(`discord.js`);
exports.run = (client, message) => {
    let embed = new Discord.RichEmbed()
    .setTitle(`Ícone do Servidor: ${message.guild.name}`)
    .setURL(message.guild.iconURL)
    .setImage(message.guild.iconURL)
    .setColor('#ff9d00');
message.channel.send({
    embed: embed
});
};