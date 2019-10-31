module.exports = {
    name:'purge',
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You don't have the required permissions to use this command.").then(m => m.delete(5000))
        await message.react("✅");
        const deleteCount = parseInt(args[0], 10);
  
  if(!deleteCount || deleteCount < 2 || deleteCount > 100)
    return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
  
  const fetched = await message.channel.fetchMessages({limit: deleteCount});
  message.channel.bulkDelete(fetched)
    .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    }   
    
}