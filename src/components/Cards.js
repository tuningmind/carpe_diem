const Cards = [
  /**HEARTS**/
  {
    suit: "♥",
    rank: 1,
    dollars: -5,
    energy: 1,
    victoryPoints: 50,
    index: "A",
    color: 'red index',
    classnames: 
          ['spotB3 red ace']
  },
  {
    suit: "♥",
    rank: 2,
    dollars: 2,
    energy: 1,
    victoryPoints: 0,
    index: 2,
    color: 'red index',
    classnames: 
          ['spotB1 red','spotB5 red']
  },
  {
    suit: "♥",
    rank: 3,
    dollars: 3,
    energy: 1,
    victoryPoints: 0,
    index: 3,
    color: 'red index',
    classnames: 
          ['spotB1 red','spotB3 red','spotB5 red']
  },
  {
    suit: "♥",
    rank: 4,
    dollars: 4,
    energy: 1,
    victoryPoints: 0,
    index: 4,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA5 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 5,
    dollars: 5,
    energy: 1,
    victoryPoints: 0,
    index: 5,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA5 red','spotB3 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 6,
    dollars: 6,
    energy: 1,
    victoryPoints: 0,
    index: 6,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 7,
    dollars: 7,
    energy: 1,
    victoryPoints: 0,
    index: 7,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 8,
    dollars: 8,
    energy: 1,
    victoryPoints: 0,
    index: 8,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotB4 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 9,
    dollars: 9,
    energy: 1,
    victoryPoints: 0,
    index: 9,
    color: 'red index',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red','spotA5 red','spotB3 red','spotC1 red', 'spotC2 red', 'spotC4 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 10,
    dollars: 10,
    energy: 1,
    victoryPoints: 0,
    index: 10,
    color: 'red index',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red', 'spotA5 red','spotB2 red', 'spotB4 red', 'spotC1 red', 'spotC2 red', 'spotC4 red', 'spotC5 red']
  },
  {
    suit: "♥",
    rank: 11,
    dollars: 0,
    energy: 1,
    victoryPoints: 10,
    index: 'J',
    color: 'red index',
    src: './img/jack.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    suit: "♥",
    rank: 12,
    dollars: 0,
    energy: 1,
    victoryPoints: 20,
    index: 'Q',
    color: 'red index',
    src: './img/queen.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    suit: "♥",
    rank: 13,
    dollars: 0,
    energy: 1,
    victoryPoints: 30,
    index: 'K',
    color: 'red index',
    src: './img/king.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },

  /****************CLUBS**********************************/

  {
    suit: "♣",
    rank: 1,
    dollars: -5,
    energy: -1,
    victoryPoints: 50,
    index: 'A',
    color: 'black index',
    classnames: 
          ['spotB3 ace']
  },
  {
    suit: "♣",
    rank: 2,
    dollars: 2,
    energy: -1,
    victoryPoints: 0,
    index: 2,
    color: 'black index',
    classnames: 
          ['spotB1','spotB5']
  },
  {
    suit: "♣",
    rank: 3,
    dollars: 3,
    energy: -1,
    victoryPoints: 0,
    index: 3,
    color: 'black index',
    classnames: 
          ['spotB1','spotB3','spotB5']
  },
  {
    suit: "♣",
    rank: 4,
    dollars: 4,
    energy: -1,
    victoryPoints: 0,
    index: 4,
    color: 'black index',
    classnames: 
          ['spotA1','spotA5','spotC1','spotC5']
  },
  {
    suit: "♣",
    rank: 5,
    dollars: 5,
    energy: -1,
    victoryPoints: 0,
    index: 5,
    color: 'black index',
    classnames: 
          ['spotA1','spotA5','spotB3','spotC1','spotC5']
  },
  {
    suit: "♣",
    rank: 6,
    dollars: 6,
    energy: -1,
    victoryPoints: 0,
    index: 6,
    color: 'black index',
    classnames: 
          ['spotA1','spotA3','spotA5','spotC1','spotC3','spotC5']
  },
  {
    suit: "♣",
    rank: 7,
    dollars: 7,
    energy: -1,
    victoryPoints: 0,
    index: 7,
    color: 'black index',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotC1','spotC3','spotC5']
  },
  {
    suit: "♣",
    rank: 8,
    dollars: 8,
    energy: -1,
    victoryPoints: 0,
    index: 8,
    color: 'black index',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotB4','spotC1','spotC3','spotC5']
  },
  {
    suit: "♣",
    rank: 9,
    dollars: 9,
    energy: -1,
    victoryPoints: 0,
    index: 9,
    color: 'black index',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4','spotA5','spotB3','spotC1', 'spotC2', 'spotC4','spotC5']
  },
  {
    suit: "♣",
    rank: 10,
    dollars: 10,
    energy: -1,
    victoryPoints: 0,
    index: 10,
    color: 'black index',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    suit: "♣",
    rank: 11,
    dollars: 0,
    energy: -1,
    victoryPoints: 10,
    index: 'J',
    color: 'black index',
    src: './img/jack.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    suit: "♣",
    rank: 12,
    dollars: 0,
    energy: -1,
    victoryPoints: 20,
    index: 'Q',
    color: 'black index',
    src: './img/queen.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    suit: "♣",
    rank: 13,
    dollars: 0,
    energy: -1,
    victoryPoints: 30,
    index: 'K',
    color: 'black index',
    src: './img/king.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },

  /**************** DIAMONDS *******************/

  {
    suit: "♦",
    rank: 1,
    dollars: -5,
    energy: 0,
    victoryPoints: 50,
    index: 'A',
    color: 'red index',
    classnames: 
          ['spotB3 red ace']
  },
  {
    suit: "♦",
    rank: 2,
    dollars: 2,
    energy: 0,
    victoryPoints: 0,
    index: 2,
    color: 'red index',
    classnames: 
          ['spotB1 red','spotB5 red']
  },
  {
    suit: "♦",
    rank: 3,
    dollars: 3,
    energy: 0,
    victoryPoints: 0,
    index: 3,
    color: 'red index',
    classnames: 
          ['spotB1 red','spotB3 red','spotB5 red']
  },
  {
    suit: "♦",
    rank: 4,
    dollars: 4,
    energy: 0,
    victoryPoints: 0,
    index: 4,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA5 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 5,
    dollars: 5,
    energy: 0,
    victoryPoints: 0,
    index: 5,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA5 red','spotB3 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 6,
    dollars: 6,
    energy: 0,
    victoryPoints: 0,
    index: 6,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 7,
    dollars: 7,
    energy: 0,
    victoryPoints: 0,
    index: 7,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 8,
    dollars: 8,
    energy: 0,
    victoryPoints: 0,
    index: 8,
    color: 'red index',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotB4 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 9,
    dollars: 9,
    energy: 0,
    victoryPoints: 0,
    index: 9,
    color: 'red index',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red','spotA5 red','spotB3 red','spotC1 red', 'spotC2 red', 'spotC4 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 10,
    dollars: 10,
    energy: 0,
    victoryPoints: 0,
    index: 10,
    color: 'red index',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red', 'spotA5 red','spotB2 red', 'spotB4 red', 'spotC1 red', 'spotC2 red', 'spotC4 red', 'spotC5 red']
  },
  {
    suit: "♦",
    rank: 11,
    dollars: 0,
    energy: 0,
    victoryPoints: 10,
    index: 'J',
    color: 'red index',
    src: './img/jack.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    suit: "♦",
    rank: 12,
    dollars: 0,
    energy: 0,
    victoryPoints: 20,
    index: 'Q',
    color: 'red index',
    src: './img/queen.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },
  {
    suit: "♦",
    rank: 13,
    dollars: 0,
    energy: 0,
    victoryPoints: 30,
    index: 'K',
    color: 'red index',
    src: './img/king.gif',
    classnames: 
          ['spotA1 red', 'spotC5 red']
  },

  /**************** SPADES *******************/

  {
    suit: "♠",
    rank: 1,
    dollars: -5,
    energy: -3,
    victoryPoints: 50,
    index: 'A',
    color: 'black index',
    classnames: 
          ['spotB3 ace']
  },
  {
    suit: "♠",
    rank: 2,
    dollars: 2,
    energy: -3,
    victoryPoints: 0,
    index: 2,
    color: 'black index',
    classnames: 
          ['spotB1','spotB5']
  },
  {
    suit: "♠",
    rank: 3,
    dollars: 3,
    energy: -3,
    victoryPoints: 0,
    index: 3,
    color: 'black index',
    classnames: 
          ['spotB1','spotB3','spotB5']
  },
  {
    suit: "♠",
    rank: 4,
    dollars: 4,
    energy: -3,
    victoryPoints: 0,
    color: 'black index',
    index: 4,
    classnames: 
          ['spotA1','spotA5','spotC1','spotC5']
  },
  {
    suit: "♠",
    rank: 5,
    dollars: 5,
    energy: -3,
    victoryPoints: 0,
    index: 5,
    color: 'black index',
    classnames: 
          ['spotA1','spotA5','spotB3','spotC1','spotC5']
  },
  {
    suit: "♠",
    rank: 6,
    dollars: 6,
    energy: -3,
    victoryPoints: 0,
    index: 6,
    color: 'black index',
    classnames: 
          ['spotA1','spotA3','spotA5','spotC1','spotC3','spotC5']
  },
  {
    suit: "♠",
    rank: 7,
    dollars: 7,
    energy: -3,
    victoryPoints: 0,
    index: 7,
    color: 'black index',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotC1','spotC3','spotC5']
  },
  {
    suit: "♠",
    rank: 8,
    dollars: 8,
    energy: -3,
    victoryPoints: 0,
    index: 8,
    color: 'black index',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotB4','spotC1','spotC3','spotC5']
  },
  {
    suit: "♠",
    rank: 9,
    dollars: 9,
    energy: -3,
    victoryPoints: 0,
    index: 9,
    color: 'black index',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4','spotA5','spotB3','spotC1', 'spotC2', 'spotC4','spotC5']
  },
  {
    suit: "♠",
    rank: 10,
    dollars: 10,
    energy: -3,
    victoryPoints: 0,
    index: 10,
    color: 'black index',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    suit: "♠",
    rank: 11,
    dollars: 0,
    energy: -3,
    victoryPoints: 10,
    index: 'J',
    color: 'black index',
    src: './img/jack.gif',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    suit: "♠",
    rank: 12,
    dollars: 0,
    energy: -3,
    victoryPoints: 20,
    index: 'Q',
    color: 'black index',
    src: './img/queen.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
  {
    suit: "♠",
    rank: 13,
    dollars: 0,
    energy: -3,
    victoryPoints: 30,
    index: 'K',
    color: 'black index',
    src: './img/king.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
]
module.exports = Cards
