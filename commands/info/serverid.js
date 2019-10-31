module.exports = {
    name:'serverid',
    run: async (message, args , guild, client) => {
        message.reply("Your server ID: " + message.guild.id)
    }
}