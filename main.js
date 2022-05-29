const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const gacha = require('./gacha');

const keepAlive = require('./server.js');

client.once('ready', () => {
    console.log('Gacha online!');
});

client.on('message', message => {
    if(message.content === 'gacha') {
        message.channel.send('» Lanzando el D100...\n')
        message.channel.send(gacha.pull());
    }
    if(message.content === 'phos') {
        message.channel.send('» Lanzando el D100...\n')
        message.channel.send(gacha.phos());
    }
});

client.login('OTc5NDU1MzEyNzczOTMxMDQ4.Gjs-Sr.xH8b9UsLdnjST6zuTAUn1-amsZ9VbVuefUJ_is');
keepAlive();