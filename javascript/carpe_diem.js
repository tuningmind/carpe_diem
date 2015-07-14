function shuffle(array){
    //Fisher-Yates shuffle
    var currentIndex = array.length; 
    var tempValue; 
    var randomIndex;
    // while there remain elements to shuffle...
    while (0 !== currentIndex) {
        // pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        //swap it with the current element.
        tempValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = tempValue;
    } // end of while-loop over array.length
    return array;
} // end of function shuffle()

var suitEnergies = {
    hearts: 1,
    diamonds: 0,
    clubs: -1,
    spades: -3
}; 

var facePoints = {
    '1': 10,
    '11': 20,
    '12': 30,
    '13': 40
}; 

var faceNames = {
    '1': 'Ace',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '7',
    '8': '8',
    '9': '9',
    '10': '10',
    '11': 'Jack',
    '12': 'Queen',
    '13': 'King'
};

function makecard(rank, suit) {
    var dollarValue;
    var victoryPoints;
    var playable;
    var tired;
    var nsf;
    var time;
    var facepoints = facePoints[rank];
    var isFacecard = (facepoints !== undefined);
    if (isFacecard) {
        dollarValue = -5;
        victoryPoints = facepoints;
    } 
    else {
        dollarValue = rank;
        victoryPoints = 0;
    } 
    var card = {
        suit: suit,
        rank: rank,
        energy: suitEnergies[suit],
        isFacecard: isFacecard,
        dollarValue: dollarValue,
        victoryPoints: victoryPoints,
        points: 1,
        // todo: do playable, tired, etc, make sense in javascript
        playable: true,
        tired: false,
        nsf: false,
        time: 0
    }; 
    return card;
} 

function createDeck() {
    var deck = [];
    var suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    for (var suitIndex = 0; suitIndex < suits.length; suitIndex++) {
        for (var rank = 1; rank <= 13; rank++) {
            deck.push(makecard(rank, suits[suitIndex]));
        } // end of for-loop over ranks
    } // end of for-loop over suits
    return deck;
} 

var deck = createDeck();

var suitTags = {
    hearts: "&hearts;",
    diamonds: "&diams;",
    clubs: "&clubs;",
    spades: "&spades;"
};


var Game = function(deck) {
    this.deck = deck;
    this.energy = 3;
    this.dollars = 8;
    this.day = 1;
    this.points = 0;
    this.victoryPoints = 0;
    this.hand = [];
    this.keepGoing = true; 

    this.exit = function() {
        Game.keepGoing = false;
    };

    this.makeHand = function() {
        if (this.deck) {
            shuffle(this.deck);
            for (var i=1; i <= 4; i++){
                card = this.deck.pop();
                this.hand.push(card);
                this.deck.splice((this.deck.indexOf(card)),1);
                this.time = this.hand.indexOf(card);
            } // end of for loop to create hand
        } // end of if-statment to check presence of deck
    }; // end of function makeHand()

} // end of Game object


var loadShowCard = function(){ 
    showCard();
}

var showCard = function() {
    var iStr = ["1", "2", "3", "4"];
    j = (game.hand.length-1);
    for (var i = 0; i <= j; i++) {
        cardname = "card" + iStr[i];
        points = "points" + iStr[i];
        suitname = "suitof" + iStr[i];
        colorname = "color" + iStr[i];
        document.getElementById(cardname).textContent = game.hand[i].rank + " of " + game.hand[i].suit;
        document.getElementById(suitname).innerHTML = suitTags[game.hand[i].suit];
        if ((game.hand[i].suit == "diamonds") || (game.hand[i].suit == "hearts")) {
            document.getElementById(suitname).className = "suit red";
        } // end of if statement
        document.getElementById(points).innerHTML = "victory points: " + game.hand[i].victoryPoints;
    }; // end of for loop
} // end of function showCard()


var game = new Game(deck);

game.makeHand();
var loadNewHand = function(game) {
    console.log(game);
    game.makeHand();
}

