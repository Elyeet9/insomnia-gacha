const Discord = require('discord.js');

const client = new Discord.Client();

const gacha = require('./gacha');

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

client.login('OTc5NDU1MzEyNzczOTMxMDQ4.GqHIho.oAmVWjinwThSU5Y3TMcvFsRY_JSWR18Grb3s5Q');