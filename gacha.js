var Chance = require('chance');
var { MessageEmbed } = require('discord.js')
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var phos = function() {
    var result = roll();
    const embed = new MessageEmbed()
    .setColor('#f3e671')
    .setTitle('» TABLE PHOS ROLL: [' + result + '] «')
    .setURL('https://youtu.be/iik25wqIuFo')
    .setTimestamp();
    
    if(result >= 1 && result <= 10) {
        embed.setDescription('Driftglobe');
        embed.setImage('https://www.aidedd.org/dnd/images-om/driftglobe.jpg');
    }
    else if(result >= 11 && result <= 20) {
        embed.setDescription('Bag of Holding');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/120/1000/1000/636284708068284913.jpeg');
    }
    else if(result >= 21 && result <= 30) {
        embed.setDescription('Hat of Disguise');
        embed.setImage('https://static.wikia.nocookie.net/grattoverse/images/a/a2/Hat_of_Disguise.png/revision/latest?cb=20200920174818');
    }
    else if(result >= 31 && result <= 40) {
        embed.setDescription('Bracers of Archery');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/144/1000/1000/636284715992548759.jpeg');
    }
    else if(result >= 41 && result <= 50) {
        embed.setDescription('Ring of Water Walking');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/374/1000/1000/636284763046262817.jpeg');
    }
    else if(result >= 51 && result <= 60) {
        embed.setDescription('Eversmoking Bottle');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/210/1000/1000/636284732172956658.jpeg');
    }
    else if(result >= 61 && result <= 70) {
        embed.setDescription('Gloves of Missile Snaring');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/233/1000/1000/636284736601097596.jpeg');
    }
    else if(result >= 71 && result <= 80) {
        embed.setDescription('Flame Tongue');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/219/1000/1000/636284733648450283.jpeg');
    }
    else if(result >= 81 && result <= 90) {
        embed.setDescription('Cape of the Mountebank');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/156/1000/1000/636284720530156403.jpeg');
    }
    else if(result >= 91 && result <= 98) {
        embed.setDescription('Amulet of Health');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/55/1000/1000/636283830597675547.jpeg');
    }
    else if(result == 99) {
        embed.setDescription('Ring of Regeneration');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/360/1000/1000/636284760984620165.jpeg');
    }
    else if(result == 100) {
        embed.setDescription('Gaia Fragment');
        embed.setImage('https://cdnb.artstation.com/p/assets/images/images/020/871/129/large/cluseller-paperrobber-bismazu2.jpg?1569492056&dl=1');
    }
    else {
        embed.setDescription('Algo Malo Sucedio Con Este Poro');
        embed.setImage('https://i.ytimg.com/vi/uCDKXPMuvUs/maxresdefault.jpg')
    }
    return embed;
}

var pull = function() {

    var result = roll();
    const embed = new MessageEmbed()
        .setColor('#f3e671')
        .setTitle('» Roll: [' + result + '] «')
        .setURL('https://youtu.be/iik25wqIuFo')
        .setTimestamp();

    if(result == 1 ) {
        embed.setDescription('x10 Gromps');
        embed.setImage('https://media.discordapp.net/attachments/945153687930691646/983104107667673108/unknown.png');
    }
    else if(result >= 2 && result <= 20) {
        embed.setDescription('x2 Good Quality Rations');
        embed.setImage('https://www.belloflostsouls.net/wp-content/uploads/2020/03/dnd-rations-elves.jpg');
    }
    else if(result >= 21 && result <= 30) {
        embed.setDescription('x5 Silver Piece');
        embed.setImage('https://static.wikia.nocookie.net/forgottenrealms/images/2/23/Platinum-5e.png/revision/latest?cb=20171121180737');
    }
    else if(result >= 31 && result <= 40) {
        embed.setDescription('x2 Healing Potions');
        embed.setImage('https://preview.redd.it/2l2ez3h81st51.jpg?auto=webp&s=34ab7f0dfd5cd0b2da83c554da26e71fdbeca407');
    }
    else if(result >= 41 && result <= 50) {
        embed.setDescription('+1 Simple Weapon');
        embed.setImage('https://static.wikia.nocookie.net/forgottenrealms/images/9/9f/Sword_of_sharpness-5e.jpg/revision/latest?cb=20191127044014');
    }
    else if(result >= 51 && result <= 60) {
        embed.setDescription('+3 Shield');
        embed.setImage('https://static.wikia.nocookie.net/emerald-isles/images/0/05/Shield_Steel_Heavy.png/revision/latest?cb=20180507031748');
    }
    else if(result >= 61 && result <= 68) {
        embed.setDescription('x10 Gold Piece');
        embed.setImage('https://static.wikia.nocookie.net/forgottenrealms/images/8/82/GoldDragonCoins.png/revision/latest?cb=20180915021258');
    }
    else if(result == 69) {
        embed.setDescription('DM Special Prize / Table Phos roll');
        embed.setImage('https://media.discordapp.net/attachments/945153687930691646/983108355797184562/isaac-pog.png');
    }
    else if(result >= 70 && result <= 80) {
        embed.setDescription('x1 Advantage Roll');
        embed.setImage('https://pbs.twimg.com/media/EwixeJ5XEAIXYNg?format=jpg&name=large');
    }
    else if(result >= 81 && result <= 90) {
        embed.setDescription('x5 Inspiracion');
        embed.setImage('https://qph.cf2.quoracdn.net/main-qimg-89b63a806102d5d2bab49f5d2640a7a8-lq');
    }
    else if(result >= 91 && result <= 99) {
        embed.setDescription('x1 re-roll (in-game)');
        embed.setImage('https://i.pinimg.com/originals/a0/d2/f7/a0d2f788c977c99b60bf2ae11e023446.jpg');
    }
    else if(result == 100) {
        embed.setDescription('Felicidades, usa el comando \"phos\"!!!');
        embed.setImage('https://media.discordapp.net/attachments/945153687930691646/983107529057914880/unknown.png');
    }
    else {
        embed.setDescription('Algo Malo Sucedio Con Este Poro');
        embed.setImage('https://i.ytimg.com/vi/uCDKXPMuvUs/maxresdefault.jpg')
    }

    return embed;
}

module.exports.pull = pull
module.exports.phos = phos