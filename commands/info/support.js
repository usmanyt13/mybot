const { RichEmbed, Client } = require('discord.js');

module.exports = {
    name:'support',
    run: async (client, message, args) => {

        
        const sembed = new RichEmbed()
        .setTitle('Support Server')
        .setColor('#59b6eb')
        .setDescription(`Support Server Is Available Soon You Can Contact 
        <@494899216280322049>
         For Any Kind of Help `);
        
        message.channel.send(sembed);

    }}