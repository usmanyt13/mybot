const { RichEmbed } = require('discord.js');

module.exports = {
    name:'avatar',    
    run: async (client, message, args) => {
        let helo = message.author.avatarURL
        //message.reply(message.author.avatarURL, `Here Is Your Avatar` );
        const avatar = new RichEmbed()
        .setTitle('Avatar')
        .setColor('')
        .setImage(helo)

        message.channel.send(helo);

    }
}