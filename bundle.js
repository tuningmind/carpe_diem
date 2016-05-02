/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var carpe_diem = __webpack_require__(1);

	carpe_diem();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	function carpe_diem() {
	    document.getElementById('content').innerHTML = "This future awesome page is\n    under development.<br/> Check back later for the optimization card game called Carpe Diem.";
	}

	module.exports = carpe_diem;

	var suit_energies = {
	    "hearts": "1",
	    "diamonds": "0",
	    "clubs": "-1",
	    "spades": "-3"
	};

	var face_points = {
	    "1": "50",
	    "11": "10",
	    "12": "20",
	    "13": "30"
	};

	var facenames = {
	    "1": "Ace",
	    "2": "2",
	    "3": "3",
	    "4": "4",
	    "5": "5",
	    "6": "6",
	    "7": "7",
	    "8": "8",
	    "9": "9",
	    "10": "10",
	    "11": "Jack",
	    "12": "Queen",
	    "13": "King"
	};

	function Card(rank, suit) {
	    this.rank = rank;
	    this.suit = suit;
	    this.energy = suit_energies[suit];
	    this.is_facecard = rank in [1, 11, 12, 13];
	    if (this.is_facecard) {
	        this.dollars = -5;
	        this.victory_points = face_points[rank];
	    } else {
	        this.dollars = this.rank;
	        this.victory_points = face_points[rank];
	    }
	    this.playable = true;
	    this.tired = false;
	    this.nsf = false;
	    this.time = 0;

	    this.toString = cardToString;
	    this.createNode = cardCreateNode;
	}

	function cardToString() {
	    var rank;
	    var suit;
	    var ranks = {
	        "A": "Ace",
	        "2": "Two",
	        "3": "Three",
	        "4": "Four",
	        "5": "Five",
	        "6": "Six",
	        "7": "Seven",
	        "8": "Eight",
	        "9": "Nine",
	        "10": "Ten",
	        "J": "Jack",
	        "Q": "Queen",
	        "K": "King"
	    };
	    var suits = {
	        "C": "Clubs",
	        "D": "Diamonds",
	        "H": "Hearts",
	        "S": "Spades"
	    };
	    rank = ranks[this.rank];
	    suit = suits[this.suit];
	    if (rank === null || suit === null) {
	        return "";
	    }
	    return rank + " of " + suit;
	}

	function Stack() {
	    // create an empty array of cards
	    this.cards = new Array();
	    this.makeDeck = stackMakeDeck;
	    this.shuffle = stackShuffle;
	    this.deal = stackDeal;
	    this.addCard = stackAddCard;
	}

	function stackMakeDeck() {
	    var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
	    var suits = new Array("H", "D", "C", "S");
	    var j, k;

	    // set array of cards
	    this.cards = new Array();

	    // fill the array with 52 cards in order
	    for (j = 0; j < suits.length; j++) {
	        for (k = 0; k < ranks.length; k++) {
	            card = new Card(ranks[k], suits[j]);
	            this.cards.push(card);
	        }
	    }
	}

	function stackShuffle() {
	    //Fisher-Yates shuffle
	    var currentIndex = this.cards.length;
	    var tempValue;
	    var randomIndex;
	    // while there remain elements to shuffle...
	    while (0 !== currentIndex) {
	        // pick a remaining element...
	        randomIndex = Math.floor(Math.random() * currentIndex);
	        currentIndex -= 1;
	        //swap it with the current element.
	        tempValue = this.cards[currentIndex];
	        this.cards[currentIndex] = this.cards[randomIndex];
	        this.cards[randomIndex] = tempValue;
	    }
	}

	function stackDeal() {
	    if (this.cards.length > 0) {
	        this.shuffle();
	        return this.cards.shift();
	    } else {
	        return null;
	    }
	}

	function stackAddCard(card) {
	    this.cards.push(card);
	}

	function cardCreateNode() {
	    var cardNode;
	    var frontNode;
	    var indexNode;
	    var spotNode;
	    var tempNode;
	    var textNode;

	    var indexStr;
	    var spotChar;

	    // This is the main node, a DIV tag.

	    cardNode = document.createElement("div");
	    cardNode.className = "card";

	    // Build the front of card.

	    frontNode = document.createElement("DIV");
	    frontNode.className = "front";

	    // todo: use object literals instead of switch to get card suit and font color

	    // Get proper character for card suit and change font color if necessary.
	    function spots(frontNode, suit) {
	        spotChar = " ";
	        var spotChars = {
	            "C": "♣",
	            "D": "♦",
	            "H": "♥",
	            "S": "♠"
	        };
	        if (suit === "D" || suit === "H") {
	            frontNode.className += " red";
	        }
	        return spotChars[suit];
	    }

	    spotChar = spots(frontNode, this.suit);

	    // Create and add the index (rank) to the upper-left
	    // corner of the card.

	    indexStr = this.rank;
	    if (this.toString() === "") {
	        indexStr = " ";
	    }
	    spotNode = document.createElement("DIV");
	    spotNode.className = "index";
	    textNode = document.createTextNode(indexStr);
	    spotNode.appendChild(textNode);
	    spotNode.appendChild(document.createElement("BR"));
	    textNode = document.createTextNode(spotChar);
	    spotNode.appendChild(textNode);
	    frontNode.appendChild(spotNode);

	    spotNode = document.createElement("DIV");
	    textNode = document.createTextNode(spotChar);
	    spotNode.appendChild(textNode);
	    if (this.rank === "A") {
	        spotNode.className = "ace";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }

	    // Create and add spots based on card rank (Ace through 10).

	    spotNode = document.createElement("DIV");
	    textNode = document.createTextNode(spotChar);
	    spotNode.appendChild(textNode);
	    if (this.rank === "A") {
	        spotNode.className = "ace";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "3" || this.rank === "5" || this.rank === "9") {
	        spotNode.className = "spotB3";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "2" || this.rank === "3") {
	        spotNode.className = "spotB5";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "4" || this.rank === "5" || this.rank === "6" || this.rank === "7" || this.rank === "8" || this.rank === "9" || this.rank === "10") {
	        spotNode.className = "spotA1";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotA5";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotC1";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotC5";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "6" || this.rank === "7" || this.rank === "8") {
	        spotNode.className = "spotA3";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotC3";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "7" || this.rank === "8" || this.rank === "10") {
	        spotNode.className = "spotB2";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "8" || this.rank === "10") {
	        spotNode.className = "spotB4";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }
	    if (this.rank === "9" || this.rank === "10") {
	        spotNode.className = "spotA2";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotA4";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotC2";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotC4";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }

	    // For face cards (Jack, Queen or King), create and add the proper image.

	    tempNode = document.createElement("IMG");
	    tempNode.className = "face";
	    if (this.rank === "J") {
	        tempNode.src = "images/jack.gif";
	    }
	    if (this.rank === "Q") {
	        tempNode.src = "images/queen.gif";
	    }
	    if (this.rank === "K") {
	        tempNode.src = "images/king.gif";
	    }

	    // For face cards, add suit characters to the upper left and lower right corners.

	    if (this.rank === "J" || this.rank === "Q" || this.rank === "K") {
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotA1";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	        spotNode.className = "spotC5";
	        tempNode = spotNode.cloneNode(true);
	        frontNode.appendChild(tempNode);
	    }

	    // Add front node to the card node.

	    cardNode.appendChild(frontNode);

	    // Return the card node.

	    return cardNode;
	}

/***/ }
/******/ ]);