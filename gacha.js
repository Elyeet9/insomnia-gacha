var Chance = require('chance');
var { MessageEmbed } = require('discord.js')
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var guion = function() {
    var result = roll();
    const embed = new MessageEmbed()
    .setColor('#f3e671')
    .setTitle('» GUION ROLL: [' + result + '] «')
    .setURL('https://youtu.be/iik25wqIuFo')
    .setTimestamp();
    
    if(result >= 1 && result <= 10) {
        embed.setDescription('Elemental Gem');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/206/1000/1000/636284731268122700.jpeg');
    }
    else if(result >= 11 && result <= 20) {
        embed.setDescription('Potion of mind reading');
        embed.setImage('https://pbs.twimg.com/media/ELC2rL1WkAUJC8f.jpg');
    }
    else if(result >= 21 && result <= 30) {
        embed.setDescription('Armor +2');
        embed.setImage('https://i.pinimg.com/originals/93/47/78/9347788c50c2307cb37dda7cbd3ca3ab.jpg');
    }
    else if(result >= 31 && result <= 40) {
        embed.setDescription('Ring of feather falling');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/348/1000/1000/636284759713966326.jpeg');
    }
    else if(result >= 41 && result <= 50) {
        embed.setDescription('Sword of Life Stealing');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/438/1000/1000/636284773757593723.jpeg');
    }
    else if(result >= 51 && result <= 60) {
        embed.setDescription('Wand of Binding');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/464/1000/1000/636284780976080198.jpeg');
    }
    else if(result >= 61 && result <= 70) {
        embed.setDescription('Rod of Alertness');
        embed.setImage('https://i.pinimg.com/564x/77/f8/9a/77f89a749dcf492efa592fa82a53ddcc.jpg');
    }
    else if(result >= 71 && result <= 80) {
        embed.setDescription('Bag of Holding');
        embed.setImage('https://static.wikia.nocookie.net/forgottenrealms/images/b/b5/Dungeon_Masters_guide_5e_-_Bag_of_Holding_-_p153_-_Conceptoplis.jpg/revision/latest/top-crop/width/360/height/450?cb=20190714213031');
    }
    else if(result >= 81 && result <= 90) {
        embed.setDescription('Spell scroll (8th lvl)');
        embed.setImage('https://db4sgowjqfwig.cloudfront.net/images/6057231/fireball_scroll.jpg');
    }
    else if(result >= 91 && result <= 99) {
        embed.setDescription('Eversmoking Bottle');
        embed.setImage('https://www.dndbeyond.com/avatars/thumbnails/7/210/1000/1000/636284732172956658.jpeg');
    }
    else if(result == 100) {
        embed.setDescription('Pide lo que quieras');
        embed.setImage('https://media.discordapp.net/attachments/702980181689761933/1030764628646576158/Kai_faito_emote.png?width=457&height=558');
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

    if(result >= 1 && result <= 5) {
        embed.setDescription('Bad quality rations');
        embed.setImage('https://upload.wikimedia.org/wikipedia/commons/0/06/MRE_7862.jpg');
    }
    else if(result >= 6 && result <= 15) {
        embed.setDescription('x5 Silver Piece');
        embed.setImage('https://static.wikia.nocookie.net/forgottenrealms/images/2/23/Platinum-5e.png/revision/latest?cb=20171121180737');
    }
    else if(result >= 16 && result <= 20) {
        embed.setDescription('x1 Medium healing potion');
        embed.setImage('https://images.squarespace-cdn.com/content/v1/53dc5cd9e4b03be860d855f5/1626081982630-8LMCC33NUEMK81NC64X5/Healing_Potion.jpg?format=1500w');
    }
    else if(result >= 21 && result <= 30) {
        embed.setDescription('x10 Gold piece');
        embed.setImage('https://www.gannett-cdn.com/presto/2022/09/03/USAT/89985044-b853-4679-adb8-c1e8158e8476-George_l_Overview.jpg?crop=3542,1993,x0,y0&width=3200&height=1801&format=pjpg&auto=webp');
    }
    else if(result >= 31 && result <= 35) {
        embed.setDescription('x5 Ammunition +1');
        embed.setImage('https://i.pinimg.com/originals/fc/81/7d/fc817db2dc0d03767b3af602928ff49b.jpg');
    }
    else if(result >= 36 && result <= 40) {
        embed.setDescription('x1 Proficient PC tools');
        embed.setImage('https://imagoimpresiones.com/wp-content/uploads/2020/06/SUMINISTROS-IMAGO-COMPUTER-CASE-NZXT-H510-ELITE-MID-TOWER-BLACK-BLACK-CA-H510E-B1-IMAGO-IMPRESIONES.png');
    }
    else if(result >= 41 && result <= 50) {
        embed.setDescription('x2 Sending Stones');
        embed.setImage('https://static.wikia.nocookie.net/forgottenrealms/images/f/fc/Sending_stones-5e.jpg/revision/latest?cb=20171023143226');
    }
    else if(result >= 51 && result <= 68) {
        embed.setDescription('x1 Spell Scroll 1st lvl');
        embed.setImage('https://i.redd.it/lm1qtc5a9x721.jpg');
    }
    else if(result == 69) {
        embed.setDescription('DM Special Prize / Table Phos roll');
        embed.setImage('https://i.ytimg.com/vi/1xL3sIfUF1U/maxresdefault.jpg');
    }
    else if(result >= 70 && result <= 75) {
        embed.setDescription('x1 Potion of fire breath');
        embed.setImage('https://static.wikia.nocookie.net/athkatmon/images/f/f9/Potion-of-fire-breath.jpg/revision/latest?cb=20200120231319');
    }
    else if(result >= 76 && result <= 80) {
        embed.setDescription('x1 Shorten potion of invisibility');
        embed.setImage('https://dnd.su/gallery/items/62_1_1540919491.jpg');
    }
    else if(result >= 81 && result <= 85) {
        embed.setDescription('x1 Ring of water breathing');
        embed.setImage('https://static.wikia.nocookie.net/criticalrole/images/3/3e/Ring_of_Water_Walking.jpg/revision/latest?cb=20210320074804');
    }
    else if(result >= 86 && result <= 90) {
        embed.setDescription('x1 Advatange roll');
        embed.setImage('https://img.itch.zone/aW1nLzQ0NTQ5NjIuanBn/original/BPEWmw.jpg');
    }
    else if(result >= 91 && result <= 95) {
        embed.setDescription('x1 Re-Roll (in-game)');
        embed.setImage('https://i.etsystatic.com/8968407/r/il/8d2faa/763047630/il_570xN.763047630_o18n.jpg');
    }
    else if(result >= 96 && result <= 99) {
        embed.setDescription('x1 Improved inspiration');
        embed.setImage('https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/tree-of-life-in-front-of-night-sky-cosmos-oliver-denker.jpg');
    }
    else if(result == 100) {
        embed.setDescription('Felicidades, el \"guion\" te dara poderes!!!');
        embed.setImage('https://media.discordapp.net/attachments/945153687930691646/983107529057914880/unknown.png');
    }
    else {
        embed.setDescription('Algo Malo Sucedio Con Este Poro');
        embed.setImage('https://i.ytimg.com/vi/uCDKXPMuvUs/maxresdefault.jpg')
    }

    return embed;
}

module.exports.pull = pull
module.exports.guion = guion