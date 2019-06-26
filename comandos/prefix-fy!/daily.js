var discord = require('discord.js')
var cu = new Set()
var db = require('../../database')

exports.run = (client, message, args) => {
  if (cu.has(message.author.id)) return message.channel.send("Você já pegou seu daily hoje!")
  db.usuarios.findOne({ _id: message.author.id }, function (e, d) {
    if (e) return message.channel.send("```"+e+"```")
    if (d) {
    d.money = parseInt(d.money) || 0 + 200;
    d.save()
      cu.add(message.author.id)
    message.channel.send("Você obteve seu daily de 200 coins!")
    setTimeout(() => { cu.delete(message.author.id) }, 60 * 60 * 60 * 24);
    } else return message.channel.send(":x: | Não te conheço!")
  });
}