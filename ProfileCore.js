 /*
  ProfileKCore - A module to create profile images for Discord Bots
  Created for using with Kanori, a moderation bot for Discord.
  https://kanori.glitch.me
  By: BlueSlime
*/
var { createCanvas, Image, loadImage } = require('canvas');
var { get } = require('snekfetch');
var urlSource = "https://cdn.discordapp.com/attachments/392697495118938112/462282202412089354/perfil-completo.png ";
var { ALIGN, measureText, loadHelper } = require('./CanvasUtils.js')
loadHelper();

// A simple tool to write the text if the username is too big.
const applyUsername = (canvas, text) => {
  const ctx = canvas.getContext('2d');
  let fontSize = 80;
  do {
    ctx.font = `${fontSize -= 10}px sans-serif`;
  } while (ctx.measureText(text).width > canvas.width - 400);
  return ctx.font;
};


module.exports = class ProfileCore {
  static async CreateProfile (userDiscordObject, userDatabaseObject) {
    var { body: sourceBuffer } = await get(urlSource);
    var source = await loadImage(sourceBuffer);
    // Loading our background image & avatar image to memory to write it on profile.
    // Let's create a array, where 0 will be our avatar and 1 our background.
    var array = [userDiscordObject.avatarURL.replace(".gif", ".jpg"), userDatabaseObject.background];
    var { body: avatar } = await get(array[0])
    var { body: background } = await get(array[1])
    avatar = await loadImage(avatar)
    background = await loadImage(background);
    
    var img = createCanvas(1392, 670)
    var ctx = img.getContext('2d');
  
    // Writing our background to our canvas
    ctx.drawImage(background, 0, 0, img.width, img.height)
    ctx.drawImage(source, 0, 0, img.width, img.height)
    
    ctx.font = '22px sans-serif';
    ctx.fillStyle = "#000000"
    ctx.fillText(userDatabaseObject.sobremim, 455, 391);
    
    ctx.font = await applyUsername(img, userDiscordObject.username);
    ctx.fillStyle = '#000000';
    ctx.fillText(userDiscordObject.username, 333, 325);
   
    ctx.font = "80px sans-serif"
    ctx.fillStyle = "#000000"
    ctx.fillText(userDatabaseObject.rep, 55, 120);
    
    ctx.font = '80px sans-serif';
    ctx.fillStyle = '#000000'
    ctx.fillText(userDatabaseObject.lvl, 55, 580)
    
    ctx.font = '45px sans-serif'
    ctx.fillStyle = '#000000'
    ctx.fillText(userDatabaseObject.coins, 1140, 621)
    
    ctx.shadowColor = 'black'
    ctx.shadowBlur = 10
    ctx.shadowBlur = 0
    ctx.roundImage(avatar, 35, 190, 230, 230)
    // Now, everything is ready, let's return our buffer with our image.
    return img.toBuffer();
  }
} 