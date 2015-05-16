import random
import sys
import time
import os


def clear_screen():
    os.system('cls' if os.name == 'nt' else 'clear')

suit_energies = {
    "hearts": 1,
    "diamonds": 0,
    "clubs": -1,
    "spades": -3
}

face_points = {
    1: 50,
    11: 10,
    12: 20,
    13: 30
}

facenames = {
        1: 'Ace',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9',
        10: '10',
        11: 'Jack',
        12: 'Queen',
        13: 'King'
}

class Card(object):
    def __init__(self, rank, suit):
        self.suit = suit
        self.rank = rank
        self.energy = suit_energies[suit]
        self.is_facecard = rank in [1, 11, 12, 13]
        if self.is_facecard:
            self.dollars = -5
            self.victory_points = face_points[rank]
        else:
            self.dollars = rank
            self.victory_points = 0
        self.playable = True
        self.tired = False
        self.nsf = False
        self.time = 0


def create_deck():
    ranks = range(1, 14) 
    suits = ['hearts', 'diamonds', 'clubs', 'spades']
    deck = [Card(rank, suit) for rank in ranks for suit in suits]
    return deck


class Game(object):
    def __init__(self):
        self.energy = 3
        self.dollars = 8
        self.day = 1
        self.points = 0
        self.victory_points = 0

        self.deck = create_deck()
        self.used_cards = []
        self.hand = []
        self.time = 0

    def exit(self):
        self.display_final_points()
        sys.exit()

    def make_hand(self):
        self.hand = []
        while self.deck and (len(self.hand) < 4):
            random.shuffle(self.deck)
            card = self.deck.pop()
            self.hand.append(card)

    def display_choices(self):
        height_spacer = 13 - game.day
        print "\n" * height_spacer
        print "-----------------------------------------------------------------------"
        print "                             Carpe Diem"
        print "-----------------------------------------------------------------------"
        print "     You have {} energy, {} dollars, and {} day(s) left to play.\n".format(
                game.energy, game.dollars, 14-game.day
                )
        print "------------------------------ Day {:2} ---------------------------------\n".format(
                game.day
                )
        print "\n{:>16}{:>17}{:>11}{:>9}".format(
                'card', 'energy', 'dollars', 'time'
                )
        time = 0
        for card in self.hand:
            time += 1
            print "\n({}){:>5} of {:8}{:10}{:11}{:11}".format(
                     self.hand.index(card)+1, facenames[card.rank], card.suit, card.energy, card.dollars, time
                     )

    def choose_card(self):
        choice = raw_input("\nWhich card do you choose? (1, 2, 3, 4 or (q)uit):  ")
        while choice not in ['quit', 'q', '1', '2', '3', '4']:
            print "Your choice was not one of the options available. Try again."
            choice = raw_input("\nWhich card do you choose? (1, 2, 3, 4, or (q)uit?)  ")
        if choice == 'q':
            print "Game ended.\n"
            self.exit()
        choices = {
                '1': self.hand[0],
                '2': self.hand[1],
                '3': self.hand[2],
                '4': self.hand[3]
        }
        card = choices[choice]
        print "\n{:>20}{:>13}{:>11}{:>9}{:>18}".format(
                'you will have', 'energy', 'dollars', 'time', 'victory points'
                )
        print "\n{:>8} of {:8}{:10}{:11}{:11}{:13}".format(
                    facenames[card.rank], 
                    card.suit, 
                    self.energy + card.energy - 1, 
                    self.dollars + card.dollars - 4, 
                    4 - self.hand.index(card), 
                    self.victory_points + card.victory_points
                    )
        return card

    def exchange_time(self, card):
        # import pudb; pudb.set_trace()
        freetime = 4 - self.hand.index(card)
        timeleft = freetime
        while timeleft:
            change = raw_input("\nDo you want to (r)ecuperate or (w)ork freelance? (or (q)uit)    ".format(freetime))
            if change == 'q':
                self.exit()
            elif change == 'r':
                timeleft = self.recuperate(timeleft)
            elif change == 'w':
                timeleft = self.freelance(timeleft)
            else:
                print "You must have entered a stray character. Try again.  " 


    def recuperate(self, freetime):
        exchange = int(raw_input("\nHow much time do you want to exchange for energy? {} available     ".format(freetime)))
        while exchange > freetime:
            exchange = raw_input(
                    "That's more time than you have available.\n"
                    "Enter a value equal to or lower than {}.   (q to quit)   ".format(freetime)
                    )
            if exchange == 'q':
                self.exit()
            exchange = int(exchange)
        self.energy += exchange
        freetime -= exchange
        if freetime:
            print "\nYou still have {} time left to exchange.".format(freetime)
        return freetime

    def freelance(self, freetime):
        exchange = int(raw_input("\nHow much time do you want to exchange for dollars? {} available     ".format(freetime)))
        while exchange > freetime:
            exchange = raw_input(
                    "That's more time than you have available.\n"
                    "Enter a value equal to or lower than {}.   (q to quit)     ".format(freetime)
                    )
            if exchange == 'q':
                self.exit()
            exchange = int(exchange)
        self.dollars += exchange
        freetime -= exchange
        if freetime:
            print "\nYou still have {} time left to exchange.".format(freetime)
        return freetime

    def check_playability(self):
        # if all cards in hand are not playable, playability is False 
        playablehand = True 
        deadcard = 0
        for card in self.hand:
            if (self.energy + card.energy - 1) < 0:
                card.playable = False
                card.tired = True
            if (self.dollars + card.dollars - 4) < 0:
                card.playable = False
                card.nsf = True
            if not card.playable:
                deadcard += 1
            if deadcard == 4:
                playablehand = False
        return playablehand

    def apply_card(self, card):
        self.energy += card.energy  - 1
        self.dollars += card.dollars - 4
        self.points += card.victory_points
        self.victory_points += card.victory_points
        card.time = 4 - self.hand.index(card)

    def display_final_points(self):
        self.points += self.dollars  
        for string, attribute in [('Energy',self.energy), ('Dollars',self.dollars), ('Victory Points', self.victory_points)]:
            print "\n{:>10}:{:>5}".format(string, attribute) 
        print "\n--------------------------Your point tally:----------------------------"
        for i in range(3):
            time.sleep(.1)
            print "-----------------------------------------------------------------------"
        print "                                 {}\n\n".format(self.points)

    def get_different_card(self, card):
        if card.tired and card.nsf:
            print "\nUnfortunately, that card is not playable because energy and dollars would be negative."
        elif card.nsf:
            print "\nUnfortunately, that card is not playable because dollars would be negative."
        else:
            # card.tired
            print "\nUnfortunately, that card is not playable because energy would be negative."
        card = self.choose_card()
        self.check_playability()
        return card


game = Game()

while game.day <= 13:
    game.make_hand()
    clear_screen()
    playable = game.check_playability()
    if not playable:
        time.sleep(1)
        print "Unfortunately, none of the cards in your last hand were playable. Game ended. Here are your points:"
        game.exit()
    game.display_choices()
    card = game.choose_card()
    while not card.playable:
        card = game.get_different_card(card)
    game.apply_card(card)
    game.exchange_time(card)
    game.day += 1

game.display_final_points()




    
    
