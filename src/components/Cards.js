const Cards = [
  /**HEARTS**/
  {
    index: 0,
    suit: "♥",
    rank: 1,
    dollars: -5,
    energy: 1,
    victory: 50,
    corner: "A",
    color: 'red corner',
    classnames: 
          ['spotB3 red ace']
  },
  {
    index: 1,
    suit: "♥",
    rank: 2,
    dollars: 2,
    energy: 1,
    victory: 0,
    corner: 2,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB5 red']
  },
  {
    index: 2,
    suit: "♥",
    rank: 3,
    dollars: 3,
    energy: 1,
    victory: 0,
    corner: 3,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB3 red','spotB5 red']
  },
  {
    index: 3,
    suit: "♥",
    rank: 4,
    dollars: 4,
    energy: 1,
    victory: 0,
    corner: 4,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotC1 red','spotC5 red']
  },
  {
    index: 4,
    suit: "♥",
    rank: 5,
    dollars: 5,
    energy: 1,
    victory: 0,
    corner: 5,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotB3 red','spotC1 red','spotC5 red']
  },
  {
    index: 5,
    suit: "♥",
    rank: 6,
    dollars: 6,
    energy: 1,
    victory: 0,
    corner: 6,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    index: 6,
    suit: "♥",
    rank: 7,
    dollars: 7,
    energy: 1,
    victory: 0,
    corner: 7,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    index: 7,
    suit: "♥",
    rank: 8,
    dollars: 8,
    energy: 1,
    victory: 0,
    corner: 8,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotB4 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    index: 8,
    suit: "♥",
    rank: 9,
    dollars: 9,
    energy: 1,
    victory: 0,
    corner: 9,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red','spotA5 red','spotB3 red','spotC1 red', 'spotC2 red', 'spotC4 red','spotC5 red']
  },
  {
    index: 9,
    suit: "♥",
    rank: 10,
    dollars: 10,
    energy: 1,
    victory: 0,
    corner: 10,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red', 'spotA5 red','spotB2 red', 'spotB4 red', 'spotC1 red', 'spotC2 red', 'spotC4 red', 'spotC5 red']
  },
  {
    index: 10,
    suit: "♥",
    rank: 11,
    dollars: 0,
    energy: 1,
    victory: 10,
    corner: 'J',
    color: 'red corner',
    src: './img/jack.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    index: 11,
    suit: "♥",
    rank: 12,
    dollars: 0,
    energy: 1,
    victory: 20,
    corner: 'Q',
    color: 'red corner',
    src: './img/queen.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    index: 12,
    suit: "♥",
    rank: 13,
    dollars: 0,
    energy: 1,
    victory: 30,
    corner: 'K',
    color: 'red corner',
    src: './img/king.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },

  /****************CLUBS**********************************/

  {
    index: 13,
    suit: "♣",
    rank: 1,
    dollars: -5,
    energy: -1,
    victory: 50,
    corner: 'A',
    color: 'black corner',
    classnames: 
          ['spotB3 ace']
  },
  {
    index: 14,
    suit: "♣",
    rank: 2,
    dollars: 2,
    energy: -1,
    victory: 0,
    corner: 2,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB5']
  },
  {
    index: 15,
    suit: "♣",
    rank: 3,
    dollars: 3,
    energy: -1,
    victory: 0,
    corner: 3,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB3','spotB5']
  },
  {
    index: 16,
    suit: "♣",
    rank: 4,
    dollars: 4,
    energy: -1,
    victory: 0,
    corner: 4,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA5','spotC1','spotC5']
  },
  {
    index: 17,
    suit: "♣",
    rank: 5,
    dollars: 5,
    energy: -1,
    victory: 0,
    corner: 5,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA5','spotB3','spotC1','spotC5']
  },
  {
    index: 18,
    suit: "♣",
    rank: 6,
    dollars: 6,
    energy: -1,
    victory: 0,
    corner: 6,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotC1','spotC3','spotC5']
  },
  {
    index: 19,
    suit: "♣",
    rank: 7,
    dollars: 7,
    energy: -1,
    victory: 0,
    corner: 7,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotC1','spotC3','spotC5']
  },
  {
    index: 20,
    suit: "♣",
    rank: 8,
    dollars: 8,
    energy: -1,
    victory: 0,
    corner: 8,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotB4','spotC1','spotC3','spotC5']
  },
  {
    index: 21,
    suit: "♣",
    rank: 9,
    dollars: 9,
    energy: -1,
    victory: 0,
    corner: 9,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4','spotA5','spotB3','spotC1', 'spotC2', 'spotC4','spotC5']
  },
  {
    index: 22,
    suit: "♣",
    rank: 10,
    dollars: 10,
    energy: -1,
    victory: 0,
    corner: 10,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    index: 23,
    suit: "♣",
    rank: 11,
    dollars: 0,
    energy: -1,
    victory: 10,
    corner: 'J',
    color: 'black corner',
    src: './img/jack.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    index: 24,
    suit: "♣",
    rank: 12,
    dollars: 0,
    energy: -1,
    victory: 20,
    corner: 'Q',
    color: 'black corner',
    src: './img/queen.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    index: 25,
    suit: "♣",
    rank: 13,
    dollars: 0,
    energy: -1,
    victory: 30,
    corner: 'K',
    color: 'black corner',
    src: './img/king.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },

  /**************** DIAMONDS *******************/

  {
    index: 26,
    suit: "♦",
    rank: 1,
    dollars: -5,
    energy: 0,
    victory: 50,
    corner: 'A',
    color: 'red corner',
    classnames: 
          ['spotB3 red ace']
  },
  {
    index: 27,
    suit: "♦",
    rank: 2,
    dollars: 2,
    energy: 0,
    victory: 0,
    corner: 2,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB5 red']
  },
  {
    index: 28,
    suit: "♦",
    rank: 3,
    dollars: 3,
    energy: 0,
    victory: 0,
    corner: 3,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB3 red','spotB5 red']
  },
  {
    index: 29,
    suit: "♦",
    rank: 4,
    dollars: 4,
    energy: 0,
    victory: 0,
    corner: 4,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotC1 red','spotC5 red']
  },
  {
    index: 30,
    suit: "♦",
    rank: 5,
    dollars: 5,
    energy: 0,
    victory: 0,
    corner: 5,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotB3 red','spotC1 red','spotC5 red']
  },
  {
    index: 31,
    suit: "♦",
    rank: 6,
    dollars: 6,
    energy: 0,
    victory: 0,
    corner: 6,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    index: 32,
    suit: "♦",
    rank: 7,
    dollars: 7,
    energy: 0,
    victory: 0,
    corner: 7,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    index: 33,
    suit: "♦",
    rank: 8,
    dollars: 8,
    energy: 0,
    victory: 0,
    corner: 8,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotB4 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    index: 34,
    suit: "♦",
    rank: 9,
    dollars: 9,
    energy: 0,
    victory: 0,
    corner: 9,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red','spotA5 red','spotB3 red','spotC1 red', 'spotC2 red', 'spotC4 red','spotC5 red']
  },
  {
    index: 35,
    suit: "♦",
    rank: 10,
    dollars: 10,
    energy: 0,
    victory: 0,
    corner: 10,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red', 'spotA5 red','spotB2 red', 'spotB4 red', 'spotC1 red', 'spotC2 red', 'spotC4 red', 'spotC5 red']
  },
  {
    index: 36,
    suit: "♦",
    rank: 11,
    dollars: 0,
    energy: 0,
    victory: 10,
    corner: 'J',
    color: 'red corner',
    src: './img/jack.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    index: 37,
    suit: "♦",
    rank: 12,
    dollars: 0,
    energy: 0,
    victory: 20,
    corner: 'Q',
    color: 'red corner',
    src: './img/queen.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    index: 38,
    suit: "♦",
    rank: 13,
    dollars: 0,
    energy: 0,
    victory: 30,
    corner: 'K',
    color: 'red corner',
    src: './img/king.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },

  /**************** SPADES *******************/

  {
    index: 39,
    suit: "♠",
    rank: 1,
    dollars: -5,
    energy: -3,
    victory: 50,
    corner: 'A',
    color: 'black corner',
    classnames: 
          ['spotB3 ace']
  },
  {
    index: 40,
    suit: "♠",
    rank: 2,
    dollars: 2,
    energy: -3,
    victory: 0,
    corner: 2,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB5']
  },
  {
    index: 41,
    suit: "♠",
    rank: 3,
    dollars: 3,
    energy: -3,
    victory: 0,
    corner: 3,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB3','spotB5']
  },
  {
    index: 42,
    suit: "♠",
    rank: 4,
    dollars: 4,
    energy: -3,
    victory: 0,
    color: 'black corner',
    corner: 4,
    classnames: 
          ['spotA1','spotA5','spotC1','spotC5']
  },
  {
    index: 43,
    suit: "♠",
    rank: 5,
    dollars: 5,
    energy: -3,
    victory: 0,
    corner: 5,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA5','spotB3','spotC1','spotC5']
  },
  {
    index: 44,
    suit: "♠",
    rank: 6,
    dollars: 6,
    energy: -3,
    victory: 0,
    corner: 6,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotC1','spotC3','spotC5']
  },
  {
    index: 45,
    suit: "♠",
    rank: 7,
    dollars: 7,
    energy: -3,
    victory: 0,
    corner: 7,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotC1','spotC3','spotC5']
  },
  {
    index: 46,
    suit: "♠",
    rank: 8,
    dollars: 8,
    energy: -3,
    victory: 0,
    corner: 8,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotB4','spotC1','spotC3','spotC5']
  },
  {
    index: 47,
    suit: "♠",
    rank: 9,
    dollars: 9,
    energy: -3,
    victory: 0,
    corner: 9,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4','spotA5','spotB3','spotC1', 'spotC2', 'spotC4','spotC5']
  },
  {
    index: 48,
    suit: "♠",
    rank: 10,
    dollars: 10,
    energy: -3,
    victory: 0,
    corner: 10,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    index: 49,
    suit: "♠",
    rank: 11,
    dollars: 0,
    energy: -3,
    victory: 10,
    corner: 'J',
    color: 'black corner',
    src: './img/jack.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    index: 50,
    suit: "♠",
    rank: 12,
    dollars: 0,
    energy: -3,
    victory: 20,
    corner: 'Q',
    color: 'black corner',
    src: './img/queen.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    index: 51,
    suit: "♠",
    rank: 13,
    dollars: 0,
    energy: -3,
    victory: 30,
    corner: 'K',
    color: 'black corner',
    src: './img/king.gif',
    classnames: 
          ['spotA1', 'spotC5']
  }
]
module.exports = Cards