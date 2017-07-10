This game was designed by Zvi Mowshowitz as described in https://thezvi.wordpress.com/2015/03/17/carpe-diem-the-optimization-game-level-1/

## Tools used
This JavaScript, HTML and Sass app was built with React using create-react-app to bootstrap. 
Sass was managed using node-sass, and github pages are managed by gh-pages.

## Game Rules:
Carpe Diem is an optimization game illustrating the trade-offs between time,
    energy, and money.

You begin with 3 energy and 8 dollars.

To gain or lose time:
   -  You have 5 time each turn.
   -  Each turn, which is equal to one day, you get 4 cards from a deck of playing cards.
   -  1st card costs 1 time to play
   -  2nd card costs 2 time to play
   -  3rd card costs 3 time to play
   -  4th card costs 4 time to play

To gain or lose energy:
   -  Hearts give +1 Energy
   -  Diamonds give 0 Energy
   -  Clubs give -1 Energy
   -  Spades give -3 Energy
   -  Recuperation: Unused time can be traded for 1 Energy per time
   -  Daily expenses: each day costs 1 energy

To gain or lose money:
   -  Play number cards to gain that much money. (e.g.: 9 of hearts gives $9)
   -  Freelancing: unused time can be traded for 1 dollar per time
   -  Face cards cost $5, and grant victory points of:
       *  10 (Jack),
       *  20 (Queen),
       *  30 (King),
       *  50 (Ace).
   -  Daily expenses: each day costs 4 dollars

Victory points:
   -  Victory points are added directly to the point total and cannot be lost or spent.

End of each turn (daily expenses, mentioned above):
   -  -1 Energy
   -  -4 Dollars

You may not make a move that will result in negative values.

Play till you run out of cards or no cards are playable. Game lasts up to 13 days.

## License
Copyright (c) 2015 tuningmind, Zvi Mowshowitz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

Except as contained in this notice, the name(s) of the above copyright holders
shall not be used in advertising or otherwise to promote the sale, use or other
dealings in this Software without prior written authorization.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
