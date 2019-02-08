const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543456093884514340")
setInterval(function() {
channel.send(`money`);
}, 30)
})

client.login("NTE0OTA0ODIwODYwMDU5NjYw.Dz8z7A.lG25xUfk9NKPQEktK0mSck7z6dQ");
