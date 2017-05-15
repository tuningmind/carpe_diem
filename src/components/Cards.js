const Cards = [
  /**HEARTS**/
  {
    suit: "♥",
    rank: 1,
    dollars: -5,
    energy: 1,
    victoryPoints: 50,
    corner: "A",
    color: 'red corner',
    classnames: 
          ['spotB3 red ace']
  },
  {
    suit: "♥",
    rank: 2,
    dollars: 2,
    energy: 1,
    victoryPoints: 0,
    corner: 2,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB5 red']
  },
  {
    suit: "♥",
    rank: 3,
    dollars: 3,
    energy: 1,
    victoryPoints: 0,
    corner: 3,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB3 red','spotB5 red']
  },
  {
    suit: "♥",
    rank: 4,
    dollars: 4,
    energy: 1,
    victoryPoints: 0,
    corner: 4,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 5,
    dollars: 5,
    energy: 1,
    victoryPoints: 0,
    corner: 5,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotB3 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 6,
    dollars: 6,
    energy: 1,
    victoryPoints: 0,
    corner: 6,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 7,
    dollars: 7,
    energy: 1,
    victoryPoints: 0,
    corner: 7,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 8,
    dollars: 8,
    energy: 1,
    victoryPoints: 0,
    corner: 8,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotB4 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 9,
    dollars: 9,
    energy: 1,
    victoryPoints: 0,
    corner: 9,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red','spotA5 red','spotB3 red','spotC1 red', 'spotC2 red', 'spotC4 red','spotC5 red']
  },
  {
    suit: "♥",
    rank: 10,
    dollars: 10,
    energy: 1,
    victoryPoints: 0,
    corner: 10,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red', 'spotA5 red','spotB2 red', 'spotB4 red', 'spotC1 red', 'spotC2 red', 'spotC4 red', 'spotC5 red']
  },
  {
    suit: "♥",
    rank: 11,
    dollars: 0,
    energy: 1,
    victoryPoints: 10,
    corner: 'J',
    color: 'red corner',
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
    corner: 'Q',
    color: 'red corner',
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
    corner: 'K',
    color: 'red corner',
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
    corner: 'A',
    color: 'black corner',
    classnames: 
          ['spotB3 ace']
  },
  {
    suit: "♣",
    rank: 2,
    dollars: 2,
    energy: -1,
    victoryPoints: 0,
    corner: 2,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB5']
  },
  {
    suit: "♣",
    rank: 3,
    dollars: 3,
    energy: -1,
    victoryPoints: 0,
    corner: 3,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB3','spotB5']
  },
  {
    suit: "♣",
    rank: 4,
    dollars: 4,
    energy: -1,
    victoryPoints: 0,
    corner: 4,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA5','spotC1','spotC5']
  },
  {
    suit: "♣",
    rank: 5,
    dollars: 5,
    energy: -1,
    victoryPoints: 0,
    corner: 5,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA5','spotB3','spotC1','spotC5']
  },
  {
    suit: "♣",
    rank: 6,
    dollars: 6,
    energy: -1,
    victoryPoints: 0,
    corner: 6,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotC1','spotC3','spotC5']
  },
  {
    suit: "♣",
    rank: 7,
    dollars: 7,
    energy: -1,
    victoryPoints: 0,
    corner: 7,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotC1','spotC3','spotC5']
  },
  {
    suit: "♣",
    rank: 8,
    dollars: 8,
    energy: -1,
    victoryPoints: 0,
    corner: 8,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotB4','spotC1','spotC3','spotC5']
  },
  {
    suit: "♣",
    rank: 9,
    dollars: 9,
    energy: -1,
    victoryPoints: 0,
    corner: 9,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4','spotA5','spotB3','spotC1', 'spotC2', 'spotC4','spotC5']
  },
  {
    suit: "♣",
    rank: 10,
    dollars: 10,
    energy: -1,
    victoryPoints: 0,
    corner: 10,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    suit: "♣",
    rank: 11,
    dollars: 0,
    energy: -1,
    victoryPoints: 10,
    corner: 'J',
    color: 'black corner',
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
    corner: 'Q',
    color: 'black corner',
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
    corner: 'K',
    color: 'black corner',
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
    corner: 'A',
    color: 'red corner',
    classnames: 
          ['spotB3 red ace']
  },
  {
    suit: "♦",
    rank: 2,
    dollars: 2,
    energy: 0,
    victoryPoints: 0,
    corner: 2,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB5 red']
  },
  {
    suit: "♦",
    rank: 3,
    dollars: 3,
    energy: 0,
    victoryPoints: 0,
    corner: 3,
    color: 'red corner',
    classnames: 
          ['spotB1 red','spotB3 red','spotB5 red']
  },
  {
    suit: "♦",
    rank: 4,
    dollars: 4,
    energy: 0,
    victoryPoints: 0,
    corner: 4,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 5,
    dollars: 5,
    energy: 0,
    victoryPoints: 0,
    corner: 5,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA5 red','spotB3 red','spotC1 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 6,
    dollars: 6,
    energy: 0,
    victoryPoints: 0,
    corner: 6,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 7,
    dollars: 7,
    energy: 0,
    victoryPoints: 0,
    corner: 7,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 8,
    dollars: 8,
    energy: 0,
    victoryPoints: 0,
    corner: 8,
    color: 'red corner',
    classnames: 
          ['spotA1 red','spotA3 red','spotA5 red','spotB2 red','spotB4 red','spotC1 red','spotC3 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 9,
    dollars: 9,
    energy: 0,
    victoryPoints: 0,
    corner: 9,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red','spotA5 red','spotB3 red','spotC1 red', 'spotC2 red', 'spotC4 red','spotC5 red']
  },
  {
    suit: "♦",
    rank: 10,
    dollars: 10,
    energy: 0,
    victoryPoints: 0,
    corner: 10,
    color: 'red corner',
    classnames: 
          ['spotA1 red', 'spotA2 red', 'spotA4 red', 'spotA5 red','spotB2 red', 'spotB4 red', 'spotC1 red', 'spotC2 red', 'spotC4 red', 'spotC5 red']
  },
  {
    suit: "♦",
    rank: 11,
    dollars: 0,
    energy: 0,
    victoryPoints: 10,
    corner: 'J',
    color: 'red corner',
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
    corner: 'Q',
    color: 'red corner',
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
    corner: 'K',
    color: 'red corner',
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
    corner: 'A',
    color: 'black corner',
    classnames: 
          ['spotB3 ace']
  },
  {
    suit: "♠",
    rank: 2,
    dollars: 2,
    energy: -3,
    victoryPoints: 0,
    corner: 2,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB5']
  },
  {
    suit: "♠",
    rank: 3,
    dollars: 3,
    energy: -3,
    victoryPoints: 0,
    corner: 3,
    color: 'black corner',
    classnames: 
          ['spotB1','spotB3','spotB5']
  },
  {
    suit: "♠",
    rank: 4,
    dollars: 4,
    energy: -3,
    victoryPoints: 0,
    color: 'black corner',
    corner: 4,
    classnames: 
          ['spotA1','spotA5','spotC1','spotC5']
  },
  {
    suit: "♠",
    rank: 5,
    dollars: 5,
    energy: -3,
    victoryPoints: 0,
    corner: 5,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA5','spotB3','spotC1','spotC5']
  },
  {
    suit: "♠",
    rank: 6,
    dollars: 6,
    energy: -3,
    victoryPoints: 0,
    corner: 6,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotC1','spotC3','spotC5']
  },
  {
    suit: "♠",
    rank: 7,
    dollars: 7,
    energy: -3,
    victoryPoints: 0,
    corner: 7,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotC1','spotC3','spotC5']
  },
  {
    suit: "♠",
    rank: 8,
    dollars: 8,
    energy: -3,
    victoryPoints: 0,
    corner: 8,
    color: 'black corner',
    classnames: 
          ['spotA1','spotA3','spotA5','spotB2','spotB4','spotC1','spotC3','spotC5']
  },
  {
    suit: "♠",
    rank: 9,
    dollars: 9,
    energy: -3,
    victoryPoints: 0,
    corner: 9,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4','spotA5','spotB3','spotC1', 'spotC2', 'spotC4','spotC5']
  },
  {
    suit: "♠",
    rank: 10,
    dollars: 10,
    energy: -3,
    victoryPoints: 0,
    corner: 10,
    color: 'black corner',
    classnames: 
          ['spotA1', 'spotA2', 'spotA4', 'spotA5','spotB2', 'spotB4', 'spotC1', 'spotC2', 'spotC4', 'spotC5']
  },
  {
    suit: "♠",
    rank: 11,
    dollars: 0,
    energy: -3,
    victoryPoints: 10,
    corner: 'J',
    color: 'black corner',
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
    corner: 'Q',
    color: 'black corner',
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
    corner: 'K',
    color: 'black corner',
    src: './img/king.gif',
    classnames: 
          ['spotA1', 'spotC5']
  },
]
module.exports = Cards
