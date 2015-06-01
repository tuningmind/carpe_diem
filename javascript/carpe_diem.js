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
        // todo: do playable, tired, etc, make sense in javascript:
        // also: why did vim highlight when I wrote "todo" in caps?
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

function createhand(deck) {
    if (deck) {
        shuffle(deck);
        var hand = [];
        for (var i=1; i <= 4; i++){
            card = deck.pop();
            hand.push(card);
            deck.splice((deck.indexOf(card)),1);
            time = hand.indexOf(card);
        } // end of for loop to create hand
        return hand;
    } // end of if-statment to check presence of deck
} // end of function createhand()

hand = createhand(deck);

var suitTags = {
    hearts: "&hearts;",
    diamonds: "&diams;",
    clubs: "&clubs;",
    spades: "&spades;"
};

function showCard() {
    var iStr = ["1", "2", "3", "4"];
    for (var i = 0; i < hand.length; i++) {
        cardname = "card" + iStr[i];
        suitname = "suit" + iStr[i];
        colorname = "color" + iStr[i];
        console.log("cardname: " + cardname + "   rank: " + hand[i].rank + "   suit:" + hand[i].suit)
        document.getElementById(cardname).innerHTML = hand[i].rank + " of " + hand[i].suit;
        document.getElementById(suitname).innerHTML = suitTags[hand[i].suit];
        if ((hand[i].suit == "diamonds") || (hand[i].suit == "hearts")) {
            document.getElementById(suitname).className = "suit red";
        }
    }
}
