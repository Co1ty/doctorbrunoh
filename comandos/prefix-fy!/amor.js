const Discord = require('discord.js');

var Responses = [
    "**Sim... :heartpulse:**",
    "**Não... :rage:**",
    "**Talvez... :neutral_face:**",
    "**Não Sei, Tente Novamente... :neutral_face:**",
    "**Claro que não, Tente Novamente Depois... :rage:**",
    "**Acho que Sim... :neutral_face:**",
    "**Se Você Diz... :heartpulse:**",
    "**Eu não Estou Dizendo Nada, Mas Você Sabe a Resposta... :rage:**",
    "**Definitivamente Não... :rage:**",
    "**É uma Possibilidade... :heartpulse:**",
    "**Uma Grande Chance... :heartpulse:**",
    "**Uma Pequena Chance... :neutral_face:**",
    "**É Melhor você Torcer... :neutral_face:**",
    "**É Melhor você não Esperar Tanto... :rage:**"
];
exports.run = async (bot, message, args) => {

    if(!args[0]){
        return message.channel.send("<:Errado:454383164652257292> " + "**| Por favor selecione a pessoa ou o objeto!**")
    }

    if (args[0]) {
        message.channel.send(Responses[Math.floor(Math.random() * Responses.length)]);
    }

}