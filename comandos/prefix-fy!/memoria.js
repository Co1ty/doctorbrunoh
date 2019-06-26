exports.run = (client, message, args) => {
message.channel.send(`**<:icons8slotdememria48:449304462411169792> Memoria usada:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb \n **<:icons8slotdememria48:449304462411169792> Processador(CPU):** + ${(process.cpuUsage().user / 1024 / 1024).toFixed(2)}%`);
}