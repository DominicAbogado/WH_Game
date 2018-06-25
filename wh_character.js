var inquirer = require("inquirer");

function CharCreate(name, type, hp, atks, dmg, hit, wound, save){
    this.name = name.toString();
    this.type = type;
    this.hp = parseInt(hp) ? parseInt(hp): 10;
    this.atks = parseInt(atks) ? parseInt(atks): 2;
    this.dmg = parseInt(dmg) ? parseInt(dmg) : 1
    this.hit = parseInt(hit) ? parseInt(hit): 4;
    this.hit = parseInt(wound) ? parseInt(wound): 5;
    this.hit = parseInt(save) ? parseInt(save): 5
    
}

function ChooseChar(name, type, hp, atks, hit, wound, save){

    switch(type){
        //Standard Character basic Stats
        case "Liberator":
            return new CharCreate(name, type, 10, 2, 1, 4, 5, 5);

        // More powerful character, worse save more damage
        case "Ork-Brute":
        return new CharCreate(name, type, 12, 3, 2, 5, 5, 6);

        case "Witch-Elf":
        return new CharCreate(name, type, 8, 6, 1, 6, 4, 6);

        cas
    }
}