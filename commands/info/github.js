module.exports = {
    name:'github',
 run: async (client, message , args ) => {
    message.delete()
    const msg = await message.reply("Github REPO Sent to DM's")
    setTimeout(function() {
        msg.delete()
    }, 6000);
    message.author.send()
 }   
}