const { Client, GatewayIntentBits } = require('discord.js');
const gacha = require('./gacha');
const dotenv = require('dotenv');
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

const keepAlive = require('./server.js');

client.once('ready', () => {
    console.log('Gacha online!');
});

client.on('messageCreate', message => {
    if(message.content === 'gacha') {
        console.log('Gacha utilizado');
        message.reply('» Lanzando el D100...\n')
        const embed = gacha.pull();
        message.channel.send({ embeds: [embed] });
    }
    if(message.content === 'guion') {
        console.log('Guion utilizado');
        message.reply('» Lanzando el D100...\n')
        const embed = gacha.guion();
        message.channel.send({ embeds: [embed] });
    }
});

client.login(process.env.DISCORD_TOKEN);
keepAlive();
