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

client.on('messageCreate', message => {
    if(message.content === 'gacha') {
        message.reply('» Lanzando el D100...\n')
        const embed = gacha.pull();
        message.channel.send({ embeds: [embed] });
    }
    if(message.content === 'phos') {
        message.reply('» Lanzando el D100...\n')
        const embed = gacha.phos();
        message.channel.send({ embeds: [embed] });
    }
});

client.login('OTc5NDU1MzEyNzczOTMxMDQ4.GfM5CB.3fKX6zkiouCEgT93m4ba7KA-oglrB9b56uHKqM');
keepAlive();