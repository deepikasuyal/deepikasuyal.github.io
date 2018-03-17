var FIRST_NAME = {
    "a": "Captain",
    "b": "Dirty",
    "c": "Squidlips",
    "d": "Bowman",
    "e": "Buccaneer",
    "f": "Two Toes",
    "g": "Sharkbait",
    "h": "Old",
    "i": "Peg Leg",
    "j": "Fluffbucket",
    "k": "Scallyway",
    "l": "Bucko",
    "m": "Dead man",
    "n": "Matey",
    "o": "Jolly",
    "p": "Stinky",
    "q": "Bloody",
    "r": "Miss",
    "s": "Mad",
    "t": "Red",
    "u": "Lady",
    "v": "Bretheren",
    "w": "Rapscallion",
    "x": "Landlubber",
    "y": "Wench",
    "z": "Freebooter",
};

var MIDDLE_NAME = {
    "a": "Creeper",
    "b": "Jim",
    "c": "Storm",
    "d": "John",
    "e": "George",
    "f": "O'",
    "g": "Rat",
    "h": "Jack",
    "i": "Legs",
    "j": "Head",
    "k": "Cackle",
    "l": "Patch",
    "m": "Bones",
    "n": "Plank",
    "o": "Greedy",
    "p": "Sea",
    "q": "Mama",
    "r": "Spike",
    "s": "Squiffy",
    "t": "Gold",
    "u": "Yellow",
    "v": "Felony",
    "w": "Eddie",
    "x": "Bay",
    "y": "Thomas",
    "z": "Spot",
};

var LAST_NAME = {
    "a": "From the west",
    "b": "Byrd",
    "c": "Jackson",
    "d": "Sparrow",
    "e": "Of the Coast",
    "f": "Jones",
    "g": "Ned Head",
    "h": "Bart ",
    "i": "O'Fish",
    "j": "Kidd",
    "k": "O'Mally",
    "l": "Barnacle",
    "m": "Holystone",
    "n": "Hornswaggle",
    "o": "McStinky",
    "p": "Swashbuckler",
    "q": "Sea Wolf",
    "r": "Beard",
    "s": "Chumbucket",
    "t": "Rivers",
    "u": "Morgan",
    "v": "Tuna Breath",
    "w": "Three Gates",
    "x": "Baily",
    "y": "Of Atlantis",
    "z": "Of Dark Water",
};

function reset() {
    $('.success').removeClass('active').hide();
    $('.ship').removeClass('active').hide();
    $('.error').hide();
}

reset();

function showError() {
    $('.success').hide();
    $('.error').show();
}

function validate() {
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();

    if (firstName.length === 0 || lastName.length === 0) {
        $('.success').hide();
        $('.error').show();
        return false;
    }
    return true;
}

function showPirateName() {
    var firstName = $("#firstName").val();
    var middleName = $("#middleName").val();
    var lastName = $("#lastName").val();

    var firstPirateName = FIRST_NAME[firstName[0].toLowerCase()];
    var middlePirateName = MIDDLE_NAME[(middleName[0] || '').toLowerCase()] || '';
    var lastPirateName = LAST_NAME[lastName[0].toLowerCase()];

    var pirateName = firstPirateName + " " + middlePirateName + " " + lastPirateName;

    $("#pirateName").text(pirateName);
    $('.success').show().addClass('active');
    $('.ship').show().addClass('active');
    $('.error').hide();
}
