const { Client, RichEmbed } = require("discord.js");
const fs = require("fs");

let prfx = require('./prefixes.json')

module.exports = {
    name:'prefix',
    run: (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
  if(!args[0] || args[0 == "help"]) return message.reply("Usage: u!prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync(prfx, "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile(prfx, JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix Set!")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(sEmbed);

    }
    
}