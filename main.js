const { Client, Intents, MessageEmbed } = require('discord.js');
const gacha = require('./gacha');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

const keepAlive = require('./server.js');

client.once('ready', () => {
    console.log('Gacha online!');
});

client.on('message', message => {
    if(message.content === 'gacha') {
        message.reply('» Lanzando el D100...\n')
        message.channel.send(gacha.pull());
    }
    if(message.content === 'phos') {
        message.reply('» Lanzando el D100...\n')
        message.channel.send(gacha.phos());
    }
});

client.login('OTc5NDU1MzEyNzczOTMxMDQ4.GfM5CB.3fKX6zkiouCEgT93m4ba7KA-oglrB9b56uHKqM');
keepAlive();