const { RichEmbed } = require('discord.js');
const { PrEfIx } = 'u!';

module.exports = {
    name:'rr',
    run: async (client, message, args) => {

        //await message.deleted().catch(O_o=>[]);

        const a = message.guild.roles.get('618845957219549202'); //PuBG PC
        const b = message.guild.roles.get('618844588693782578'); //PUBG M
        const c = message.guild.roles.get('618844643710206009'); // PUBG LITE

        const filter = (rection, user) => ['A','B','C'].includes(reaction.emoji.name) && user.id === message.author.id;

        const embed = new RichEmbed()
        .setTitle('Available Roles')
        .setDescription(`
        
        💙  ${`PUBG PC`}
        💛  ${`PUBG MOBILE`}
        ❤  ${`PUBG PC`}
        
        `)
        .setColor('')
        .setFooter(`ID: ${message.author.id}`);
        message.channel.send(embed).then(async msg => {
            await msg.react('💙');
            await msg.react('💛');
            await msg.react('❤')
        });

    }
}