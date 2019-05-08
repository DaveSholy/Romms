const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
console.log("Bot is online:)")
});
client.on('message', "message" => {
if(message.content === "!join") {
let x = client.channels.get("474786101366620161");
if (x) x.join();
}  
}); 



client.login(process.env.BOT_TOKEN);
