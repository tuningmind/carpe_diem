function shuffle(){
    //Fisher-Yates shuffle
    var currentIndex = this.cards.length
    var tempValue
    var randomIndex
    // while there remain elements to shuffle...
    while (0 !== currentIndex) {
        // pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        //swap it with the current element.
        tempValue = this.cards[currentIndex]
        this.cards[currentIndex] = this.cards[randomIndex]
        this.cards[randomIndex] = tempValue
    } 
} 

function range(start, end) {
    // returns a list of numbers from start to end-1
    var range_list = []
    for (var i = start; i < end; i++) {
       range_list[i] = i 
    } 
    return range_list
}

const suits = ['hearts', 'diamonds', 'clubs', 'spades']
const ranks = range(1, 14)

const suit_energies = {
    'hearts'  : '1',
    'diamonds': '0',
    'clubs'   : '-1',
    'spades'  : '-3'
}

const suit_tags = {
    'hearts'  : "&hearts;",
    'diamonds': "&diams;",
    'clubs'   : "&clubs;",
    'spades'  : "&spades;"
}

const face_points = {
    '1' : '50',
    '11': '10',
    '12': '20',
    '13': '30'
}

const facecard_names = {
    '1' : 'ace',
    '2' : '2',
    '3' : '3',
    '4' : '4',
    '5' : '5',
    '6' : '6',
    '7' : '7',
    '8' : '8',
    '9' : '9',
    '10': '10',
    '11': 'jack',
    '12': 'queen',
    '13': 'king'
}

const facecards = [1, 11, 12, 13]

function make_card(rank, suit) {
    // returns a card with suit, rank, energy, dollar value, points, is_facecard
    var facecard_points = face_points[rank] 
    var is_facecard = (facecard_points !== undefined)
    if (is_facecard) {
        dollar_value = -5
        points = facecard_points
    } else {
        dollars = rank
        points = 0
    }
    var card = {
        suit: suit,
        rank: rank,
        energy: suit_energies[suit],
        is_facecard: is_facecard,
        dollar_value: dollar_value,
        points: points
    }
    return card
}

function create_deck(suits) {
    var deck = [] 
    for (var suit_index = 0; suit_index < suits.length; suit_index++) {
        for ( var rank = 1; rank <= 13; rank++) {
            deck.push(make_card(rank, suits[suit_index]))
        }
    }
    return deck
}

var deck = create_deck(suits)
var card = deck[0]
console.log(suit_tags[card.suit])
document.getElementById('cardnode').innerHTML = suit_tags[card.suit]


