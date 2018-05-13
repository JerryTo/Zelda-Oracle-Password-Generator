function test() {
    return "test";
}

var symbols = [
    'B', 'D', 'F', 'G', 'H', 'J', 'L', 'M', '♠', '♥', '♦', '♣', '#',
    'N', 'Q', 'R', 'S', 'T', 'W', 'Y', '!', '●', '▲', '■', '+', '-',
    'b', 'd', 'f', 'g', 'h', 'j',      'm', '$', '*', '/', ':', '~',
    'n', 'q', 'r', 's', 't', 'w', 'y', '?', '%', '&', '(', '=', ')',
    '2', '3', '4', '5', '6', '7', '8', '9', '↑', '↓', '←', '→', '@'
];

var cipher = [
    21, 35, 46,  4, 13, 63, 26, 16,
    58, 47, 30, 32, 15, 62, 54, 55,
    9, 41, 59, 49,  2, 22, 61, 56,
    40, 19, 52, 50,  1, 11, 10, 53,
    14, 27, 18, 44, 33, 45, 37, 48,
    25, 42,  6, 57, 60, 23, 51, 24
];


// Default values
var game = "Ages";
var gameID = 10494;
var heroName = convertStringToBinary("Link");
var childName = convertStringToBinary("Child");
var animal = 5;
var behavior = 0;
var isLinkedGame = false;
var isHeroQuest = false;

var memory = "";
var isReturnSecret = true;

var wasGivenFreeRing = true;

var unknown58 = false;
var unknown59 = false;
var unknown88 = true;

var rings;

function getAnimal(animal) {
    switch (animal) {
        case "Ricky":
            return 3;
        case "Dimitri":
            return 4;
        case "Moosh":
            return 5;
    }
}

function getBehavior(behavior) {
    switch (behavior) {
        case "Infant":
            return 0;
        case "BouncyA":
            return 1;
        case "BouncyB":
            return 2;
        case "BouncyC":
            return 3;
        case "BouncyD":
            return 4;
        case "BouncyE":
            return 5;
        case "ShyA":
            return 6;
        case "ShyB":
            return 7;
        case "ShyC":
            return 8;
        case "ShyD":
            return 9;
        case "ShyE":
            return 10;
        case "HyperA":
            return 11;
        case "HyperB":
            return 12;
        case "HyperC":
            return 13;
        case "HyperD":
            return 14;
        case "HyperE":
            return 15;
    }
}

function getMemory(memory) {
    switch (memory) {
        case "ClockShopKingZora":
            return 0;
        case "GraveyardFairy":
            return 1;
        case "SubrosianTroy":
            return 2;
        case "DiverPlen":
            return 3;
        case "SmithLibrary":
            return 4;
        case "PirateTokay":
            return 5;
        case "TempleMamamu":
            return 6;
        case "DekuTingle":
            return 7;
        case "BiggoronElder":
            return 8;
        case "RuulSymmetry":
            return 9;
    }
}

export function getRings(ringName) {
    var ring = {};
    switch (ringName) {
        case "None":
            ring.value = 0;
            break;
        case "All":
            ring.value = 0xFFFFFFFFFFFFFFFF;
            break;
        case "FriendshipRing":
            ring.name = "Friendship Ring";
            ring.description = "Symbol of a meeting";
            ring.value = 0x1;
            break;
        case "PowerRingL1":
            ring.name = "Power Ring L-1";
            ring.description = "Sword damage ▲\nDamage taken ▲";
            ring.value = 0x2;
            break;
        case "PowerRingL2":
            ring.name = "Power Ring L-2";
            ring.description = "Sword damage ▲▲\nDamage taken ▲▲";
            ring.value = 0x4;
            break;
        case "PowerRingL3":
            ring.name = "Power Ring L-3";
            ring.description = "Sword damage ▲▲▲\nDamage taken ▲▲▲";
            ring.value = 0x8;
            break;
        case "ArmorRingL1":
            ring.name = "Armor Ring L-1";
            ring.description = "Sword Damage ▼\nDamage taken ▼";
            ring.value = 0x10;
            break;
        case "ArmorRingL2":
            ring.name = "Armor Ring L-2";
            ring.description = "Sword Damage ▼▼\nDamage taken ▼▼";
            ring.value = 0x20;
            break;
        case "ArmorRingL3":
            ring.name = "Armor Ring L-3";
            ring.description = "Sword Damage ▼▼▼\nDamage taken ▼▼▼";
            ring.value = 0x40;
            break;
        case "RedRing":
            ring.name = "Red Ring";
            ring.description = "Sword Damage x2";
            ring.value = 0x80;
            break;
        case "BlueRing":
            ring.name = "Blue Ring";
            ring.description = "Damage taken reduced by 1/2";
            ring.value = 0x100;
            break;
        case "GreenRing":
            ring.name = "Green Ring";
            ring.description = "Damage taken down by 25%\nSword damage up by 50%";
            ring.value = 0x200;
            break;
        case "CursedRing":
            ring.name = "Cursed Ring";
            ring.description = "1/2 sword damage\nx2 damage taken";
            ring.value = 0x400;
            break;
        case "ExpertsRing":
            ring.name = "Expert's Ring";
            ring.description = "Punch when unequipped";
            ring.value = 0x800;
            break;
        case "BlastRing":
            ring.name = "Blast Ring";
            ring.description = "Bomb damage ▲";
            ring.value = 0x1000;
            break;
        case "RangRingL1":
            ring.name = "Rang Ring L-1";
            ring.description = "Boomerang damage ▲";
            ring.value = 0x2000;
            break;
        case "GBATimeRing":
            ring.name = "GBA Time Ring";
            ring.description = "Life Advanced!";
            ring.value = 0x4000;
            break;
        case "MaplesRing":
            ring.name = "Maple's Ring";
            ring.description = "Maple meetings ▲";
            ring.value = 0x8000;
            break;
        case "SteadfastRing":
            ring.name = "Steadfast Ring";
            ring.description = "Get knocked back less";
            ring.value = 0x10000;
            break;
        case "PegasusRing":
            ring.name = "Pegasus Ring";
            ring.description = "Lengthen Pegasus Seed effect";
            ring.value = 0x20000;
            break;
        case "TossRing":
            ring.name = "Toss Ring";
            ring.description = "Throwing distance ▲";
            ring.value = 0x40000;
            break;
        case "HeartRingL1":
            ring.name = "Heart Ring L-1";
            ring.description = "Slowly recover lost Hearts";
            ring.value = 0x80000;
            break;
        case "HeartRingL2":
            ring.name = "Heart Ring L-2";
            ring.description = "Recover lost Hearts";
            ring.value = 0x100000;
            break;
        case "SwimmersRing":
            ring.name = "Swimmer's Ring";
            ring.description = "Swimming speed ▲";
            ring.value = 0x200000;
            break;
        case "ChargeRing":
            ring.name = "Charge Ring";
            ring.description = "Spin Attack charges quickly";
            ring.value = 0x400000;
            break;
        case "LightRingL1":
            ring.name = "Light Ring L-1";
            ring.description = "Sword beams at -2 Hearts";
            ring.value = 0x800000;
            break;
        case "LightRingL2":
            ring.name = "Light Ring L-2";
            ring.description = "Sword beams at -3 Hearts";
            ring.value = 0x1000000;
            break;
        case "BombersRing":
            ring.name = "Bomber's Ring";
            ring.description = "Set two Bombs at once";
            ring.value = 0x2000000;
            break;
        case "GreenLuckRing":
            ring.name = "Green Luck Ring";
            ring.description = "1/2 damage from traps";
            ring.value = 0x4000000;
            break;
        case "BlueLuckRing":
            ring.name = "Blue Luck Ring";
            ring.description = "1/2 damage from beams";
            ring.value = 0x8000000;
            break;
        case "GoldLuckRing":
            ring.name = "Gold Luck Ring";
            ring.description = "1/2 damage from falls";
            ring.value = 0x10000000;
            break;
        case "RedLuckRing":
            ring.name = "Red Luck Ring";
            ring.description = "1/2 damage from spiked floors";
            ring.value = 0x20000000;
            break;
        case "GreenHolyRing":
            ring.name = "Green Holy Ring";
            ring.description = "No damage from electricity";
            ring.value = 0x40000000;
            break;
        case "BlueHolyRing":
            ring.name = "Blue Holy Ring";
            ring.description = "No damage from Zora's fire";
            ring.value = 0x80000000;
            break;
        case "RedHolyRing":
            ring.name = "Red Holy Ring";
            ring.description = "No damage from small rocks";
            ring.value = 0x100000000;
            break;
        case "SnowshoeRing":
            ring.name = "Snowshoe Ring";
            ring.description = "No sliding on ice";
            ring.value = 0x200000000;
            break;
        case "RocsRing":
            ring.name = "Roc's Ring";
            ring.description = "Cracked floors don't crumble";
            ring.value = 0x400000000;
            break;
        case "QuicksandRing":
            ring.name = "Quicksand Ring";
            ring.description = "No sinking in quicksand";
            ring.value = 0x800000000;
            break;
        case "RedJoyRing":
            ring.name = "Red Joy Ring";
            ring.description = "Beasts drop double Rupees";
            ring.value = 0x1000000000;
            break;
        case "BlueJoyRing":
            ring.name = "Blue Joy Ring";
            ring.description = "Beasts drop double Hearts";
            ring.value = 0x2000000000;
            break;
        case "GoldJoyRing":
            ring.name = "Gold Joy Ring";
            ring.description = "Find double items";
            ring.value = 0x4000000000;
            break;
        case "GreenJoyRing":
            ring.name = "Green Joy Ring";
            ring.description = "Find double Ore Chunks";
            ring.value = 0x8000000000;
            break;
        case "DiscoveryRing":
            ring.name = "Discovery Ring";
            ring.description = "Sense soft earth nearby";
            ring.value = 0x10000000000;
            break;
        case "RangRingL2":
            ring.name = "Rang Ring L-2";
            ring.description = "Boomerang damage ▲▲";
            ring.value = 0x20000000000;
            break;
        case "OctoRing":
            ring.name = "Octo Ring";
            ring.description = "Become an Octorok";
            ring.value = 0x40000000000;
            break;
        case "MoblinRing":
            ring.name = "Moblin Ring";
            ring.description = "Become a Moblin";
            ring.value = 0x80000000000;
            break;
        case "LikeLikeRing":
            ring.name = "Like Like Ring";
            ring.description = "Become a Like-Like";
            ring.value = 0x100000000000;
            break;
        case "SubrosianRing":
            ring.name = "Subrosian Ring";
            ring.description = "Become a Subrosian";
            ring.value = 0x200000000000;
            break;
        case "FirstGenRing":
            ring.name = "First Gen Ring";
            ring.description = "Become something";
            ring.value = 0x400000000000;
            break;
        case "SpinRing":
            ring.name = "Spin Ring";
            ring.description = "Double Spin Attack";
            ring.value = 0x800000000000;
            break;
        case "BombproofRing":
            ring.name = "Bombproof Ring";
            ring.description = "No damage from your own Bombs";
            ring.value = 0x1000000000000;
            break;
        case "EnergyRing":
            ring.name = "Energy Ring";
            ring.description = "Beam replaces Spin Attack";
            ring.value = 0x2000000000000;
            break;
        case "DoubleEdgeRing":
            ring.name = "Dbl. Edge Ring";
            ring.description = "Sword damage ▲ but you get hurt";
            ring.value = 0x4000000000000;
            break;
        case "GBANatureRing":
            ring.name = "GBA Nature Ring";
            ring.description = "Life Advanced!";
            ring.value = 0x8000000000000;
            break;
        case "SlayersRing":
            ring.name = "Slayer's Ring";
            ring.description = "1000 beasts slain";
            ring.value = 0x10000000000000;
            break;
        case "RupeeRing":
            ring.name = "Rupee Ring";
            ring.description = "10;000 Rupees collected";
            ring.value = 0x20000000000000;
            break;
        case "VictoryRing":
            ring.name = "Victory Ring";
            ring.description = "The Evil King Ganon defeated";
            ring.value = 0x40000000000000;
            break;
        case "SignRing":
            ring.name = "Sign Ring";
            ring.description = "100 signs broken";
            ring.value = 0x80000000000000;
            break;
        case "HundredthRing":
            ring.name = "100th Ring";
            ring.description = "100 rings appraised";
            ring.value = 0x100000000000000;
            break;
        case "WhispRing":
            ring.name = "Whisp Ring";
            ring.description = "No effect from jinxes";
            ring.value = 0x200000000000000;
            break;
        case "GashaRing":
            ring.name = "Gasha Ring";
            ring.description = "Grow great Gasha Trees";
            ring.value = 0x400000000000000;
            break;
        case "PeaceRing":
            ring.name = "Peace Ring";
            ring.description = "No explosion if holding Bomb";
            ring.value = 0x800000000000000;
            break;
        case "ZoraRing":
            ring.name = "Zora Ring";
            ring.description = "Dive without breathing";
            ring.value = 0x1000000000000000;
            break;
        case "FistRing":
            ring.name = "Fist Ring";
            ring.description = "Punch when not equipped";
            ring.value = 0x2000000000000000;
            break;
        case "WhimsicalRing":
            ring.name = "Whimsical Ring";
            ring.description = "Sword damage ▼ Sometimes deadly";
            ring.value = 0x4000000000000000;
            break;
        case "ProtectionRing":
            ring.name = "Protection Ring";
            ring.description = "Damage taken is always one Heart";
            ring.value = 0x8000000000000000;
            break;
    }

    return ring;
}

export function updateProperties(newGame, newGameID, newHeroName, newChildName, newAnimal, newBehavior, newIsLinkedGame, newIsHeroQuest) {
    game         = newGame;
    gameID       = Number(newGameID);
    heroName     = convertStringToBinary(newHeroName);
    childName    = convertStringToBinary(newChildName);
    animal       = getAnimal(newAnimal);
    behavior     = getBehavior(newBehavior);
    isLinkedGame = newIsLinkedGame;
    isHeroQuest  = newIsHeroQuest;

    memory = "";
    isReturnSecret = true;

    wasGivenFreeRing = true;

    // Main Secret
    var passwords = [convertIntegersToSymbols(toBytes())];

    // Push Memory Secrets
    for (var i = 0; i < 10; i++) {
        memory = i;
        passwords.push(convertIntegersToSymbols(toBytesMemorySecret()).join(""));
    }

    return passwords;
}

function formatSecret(arr) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (i % 10 === 0) {
            arr[i] = "<br>" + arr[i];
            continue;
        }
        if (i % 5 === 0) {
            arr[i] = " " + arr[i];
        }
    }

    return arr.join('');
}

function convertStringToSymbolIndex(str) {
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(symbols.indexOf(str[i]));
    }

    return arr;
}

/* Converts string into binary. Used in generating passwords */
function convertStringToBinary(str) {

    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i).toString(2));
    }

    // Pad the binary
    while (arr.length < 5) {
        arr.push("0000000");
    }

    return arr;
}

function convertBinaryToIntegers(str) {
    var arr = str.match(/.{6}/g);
    arr = arr.map(x => parseInt(x, 2));

    return arr;
}

/* Converts an array of integers into in-game password. */
function convertIntegersToSymbols(arr) {
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(symbols[arr[i]]);
    }

    return newArray;
}

//internal protected byte[] EncodeBytes(byte[] data)
function encodeBytes(data)
{
    var cipherKey = (data[0] >> 3);
    var cipherPosition = cipherKey * 4;

    var secret = [];
    for (var i = 0; i < data.length; ++i) {
        secret[i] = data[i] ^ cipher[cipherPosition++];
    }

    secret[0] = (secret[0] & 7 | (cipherKey << 3));

    return secret;
}

function decodeBytes(secret) {
    var cipherKey = (secret[0] >> 3);
    var cipherPosition = cipherKey * 4;

    var decodedBytes = [];

    for (var i = 0; i < secret.length; ++i) {
        decodedBytes[i] = secret[i] ^ cipher[cipherPosition++];
    }

    decodedBytes[0] = (decodedBytes[0] & 7 | (cipherKey << 3));

    return decodedBytes;
}

/* Calculate Checksum used in passwords. */
function calculateChecksum(bytesArray) {
    // Sum the array
    var reducer = (accumulator, currentValue) => accumulator + currentValue;
    var sum = bytesArray.reduce(reducer);

    return sum & 0x0F;
}

/* New Game Secret. Returns an array of integers. */
function toBytes() {
    var cipherKey = ((gameID >> 8) + (gameID & 255)) & 7;
    var unencodedSecret = reverseStr(cipherKey.toString(2).padStart(3, '0'));

    unencodedSecret += "00"; // game = 0
    unencodedSecret += reverseStr(gameID.toString(2).padStart(15, '0'));
    unencodedSecret += isHeroQuest ? "1" : "0";
    unencodedSecret += game === "Ages" ? "0" : "1";
    unencodedSecret += reverseStr(heroName[0].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(childName[0].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(heroName[1].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(childName[1].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(behavior.toString(2).padStart(8, '0')).substr(0,4);
    unencodedSecret += unknown58 ? "1" : "0"; // TODO: This
    unencodedSecret += unknown59 ? "1" : "0"; // TODO: This
    unencodedSecret += reverseStr(heroName[2].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(childName[2].toString(2).padStart(8, '0'));
    unencodedSecret += wasGivenFreeRing ? "1" : "0";
    unencodedSecret += reverseStr(heroName[3].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(animal.toString(2).padStart(8, '0')).substr(0,3);
    unencodedSecret += unknown88 ? "1" : "0"; // TODO: This
    unencodedSecret += reverseStr(heroName[4].toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(childName[3].toString(2).padStart(8, '0'));
    unencodedSecret += isLinkedGame ? "1" : "0";
    unencodedSecret += reverseStr(childName[4].toString(2).padStart(8, '0'));

    var unencodedBytes = convertBinaryToIntegers(unencodedSecret);
    unencodedBytes[19] = calculateChecksum(unencodedBytes);
    var secret = encodeBytes(unencodedBytes);

    return secret;
}

/* Memory Secret. Returns an array of integers. */
function toBytesMemorySecret() {

    var cipher = 0;
    if (game === "Ages") {
        cipher = isReturnSecret ? 3 : 0;
    } else {
        cipher = isReturnSecret ? 1 : 2;
    }

    cipher |= ((memory & 1) << 2);
    cipher = ((gameID >> 8) + (gameID & 255) + cipher) & 7;
    cipher = reverseStr(cipher.toString(2).padStart(3, '0'));

    var unencodedSecret = cipher.toString(2).padStart(3, '0');

    unencodedSecret += "11"; // memory secret

    unencodedSecret += reverseStr(gameID.toString(2).padStart(15, '0'));
    unencodedSecret += reverseStr(memory.toString(2).padStart(4, '0'));

    var mask = 0;

    if (game === "Ages") {
        mask = isReturnSecret ? 3 : 0;
    } else {
        mask = isReturnSecret ? 2 : 1;
    }

    var unencodedBytes = convertBinaryToIntegers(unencodedSecret);
    unencodedBytes[4] = calculateChecksum(unencodedBytes) | (mask << 4);
    var secret = encodeBytes(unencodedBytes);

    return secret;
}

function toBytesRingSecret() {

    var ring1 = rings;
    var ring2 = rings >> 8;
    var ring3 = rings >> 16;
    var ring4 = rings >> 24;
    var ring5 = rings >> 32;
    var ring6 = rings >> 40;
    var ring7 = rings >> 48;
    var ring8 = rings >> 56;

    var cipherKey = ((gameID >> 8) + (gameID & 255)) & 7;
    var unencodedSecret = reverseStr(cipherKey.toString(2).padStart(3, '0'));

    unencodedSecret += "01"; // ring secret

    unencodedSecret += reverseStr(gameID.toString(2).padStart(15, '0'));
    unencodedSecret += reverseStr(ring2.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring6.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring8.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring4.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring1.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring5.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring3.toString(2).padStart(8, '0'));
    unencodedSecret += reverseStr(ring7.toString(2).padStart(8, '0'));

    var unencodedBytes = convertBinaryToIntegers(unencodedSecret);
    unencodedBytes[14] = calculateChecksum(unencodedBytes);
    var secret = encodeBytes(unencodedBytes);

    return secret;
}

function reverseStr(str) {
    return str.split('').reverse().join('');
}

/* For Internet Explorer */
if (!String.prototype.repeat) {
    String.prototype.repeat = function(count) {
        'use strict';
        if (this == null) {
            throw new TypeError('can\'t convert ' + this + ' to object');
        }
        var str = '' + this;
        count = +count;
        if (count != count) {
            count = 0;
        }
        if (count < 0) {
            throw new RangeError('repeat count must be non-negative');
        }
        if (count == Infinity) {
            throw new RangeError('repeat count must be less than infinity');
        }
        count = Math.floor(count);
        if (str.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        var rpt = '';
        for (var i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    }
}

/* For Internet Explorer */
if (!String.prototype.padStart) {
    String.prototype.padStart = function padStart(targetLength,padString) {
        targetLength = targetLength>>0; //truncate if number or convert non-number to 0;
        padString = String((typeof padString !== 'undefined' ? padString : ' '));
        if (this.length > targetLength) {
            return String(this);
        }
        else {
            targetLength = targetLength-this.length;
            if (targetLength > padString.length) {
                padString += padString.repeat(targetLength/padString.length); //append to original to ensure we are longer than needed
            }
            return padString.slice(0,targetLength) + String(this);
        }
    };
}