var Chance = require('chance');
var chance = new Chance();

var roll = function() {
    return chance.integer({ min: 1, max: 100 })
}

var phos = function() {
    var result = roll();
    
    if(result >= 1 && result <= 10) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Driftglobe'
    }

    if(result >= 11 && result <= 20) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Bag of Holding'
    }

    if(result >= 21 && result <= 30) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Hat of Disguise'
    }

    if(result >= 31 && result <= 40) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Bracers of Archery'
    }

    if(result >= 41 && result <= 50) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Ring of Water Walking'
    }

    if(result >= 51 && result <= 60) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Eversmoking Bottle'
    }

    if(result >= 61 && result <= 70) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Gloves of Missile Snaring'
    }

    if(result >= 71 && result <= 80) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Flame Tongue'
    }

    if(result >= 81 && result <= 90) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Cape of the Mountebank'
    }

    if(result >= 91 && result <= 98) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Amulet of Health'
    }

    if(result == 99) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Ring of Regeneration'
    }

    if(result == 100) {
        return '» TABLE PHOS ROLL [' + result + '] «\n' + 'Gaia Fragment'
    }

    return '[' + result + ']\n' + 'Algo malo sucedio con este poro';

}

var pull = function() {

    var result = roll();

    if(result == 1 ) {
        return '[' + result + ']' + '\n' + 'x10 Gromps'
    }

    if(result >= 2 && result <= 20) {
        return '[' + result + ']' + '\n' + 'x2 Good Quality Rations'
    }

    if(result >= 21 && result <= 30) {
        return '[' + result + ']' + '\n' + 'x5 Silver Piece'
    }
    

    if(result >= 31 && result <= 40) {
        return '[' + result + ']' + '\n' + 'x2 Healing Potions'
    }
    

    if(result >= 41 && result <= 50) {
        return '[' + result + ']' + '\n' + '+1 Simple Weapon'
    }
    

    if(result >= 51 && result <= 60) {
        return '[' + result + ']' + '\n' + '+3 Shield'
    }
    

    if(result >= 61 && result <= 68) {
        return '[' + result + ']' + '\n' + 'x10 Gold Piece'
    }
    

    if(result == 69) {
        return '[' + result + ']' + '\n' + 'DM Special Prize / Table Phos roll'
    }
    

    if(result >= 70 && result <= 80) {
        return '[' + result + ']' + '\n' + 'x1 Advantage Roll'
    }
    

    if(result >= 81 && result <= 90) {
        return '[' + result + ']' + '\n' + 'x5 Inspiracion'
    }
    

    if(result >= 91 && result <= 99) {
        return '[' + result + ']' + '\n' + 'x1 re-roll (in-game)'
    }
    

    if(result == 100) {
        return '[100] !!!\n' + phos()
    }

    return '[' + result + ']\n' + 'Algo malo sucedio con este poro';
}

module.exports.roll = roll
module.exports.pull = pull
module.exports.phos = phos