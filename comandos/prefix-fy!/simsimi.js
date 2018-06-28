exports.run = (client, message, args) => {
const snekfetch = require("snekfetch")
var content = message.content;
    if(message.content.startsWith("f!simsimi add")) {
       
        var a = content.replace("f!simsimi add ", "")
        message.channel.send("💡 **|** Quando alguém me perguntar ``" + a + "`` o que eu devo responder?")
         message.channel.awaitMessages(msg => msg.author.id == message.author.id, {time: 50000, errors: ["time"], max: 1})
            .then(collected => {
                
          var resposta = collected.map(m => m.content.replace(",", "").replace("!", "").replace(".", "").replace("?", ""))
          
          var pergunta = a.replace(",", "").replace("!", "").replace(".", "").replace("?", "")
             snekfetch.get(`https://dogewebsite.glitch.me/api/v1/responses/set-response&question=${pergunta}&answer=${resposta}`).then(res => {
                 if(res.body.code == 0) return message.channel.send("Obrigado!")
                 if(res.body.code == 1) return message.channel.send("Deu ruim!")
                 if(res.body.code == 2) return message.channel.send("Eu já conheço uma resposta igual essa!")
             })
            
            })
            .catch(err => {
console.log(err)
            
            })
    } else if(message.content.startsWith("f!simsimi")) {
       var conten = message.content
       var content = content.replace("f!simsimi ", "")
       var pergunta = content.replace(",", "").replace("!", "").replace(".", "").replace("?", "")
   
       snekfetch.get(`https://dogewebsite.glitch.me/api/v1/responses/get-question&question=${pergunta}`).then(res => {
        message.channel.send(res.body.response)
    })

    }
} 