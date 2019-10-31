module.exports = {
    name:'apibreak',
    run: (client, message, args) => {
        client.broken = true
        message.delete()
        client.user.setActivity('API BROKEN')
        client.user.setStatus("dnd")
        return;
    }
    }
