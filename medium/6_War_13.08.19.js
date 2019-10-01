/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

let winner = 0, count = 0;
let strengthOfCards = {
    "2" : 2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "10":10, "J":11, "Q":12, "K":13, "A":14 
}
let player1Cards = [], player2Cards = [], warPl1 = []; warPl2 = [];

const n = parseInt(readline()); // the number of cards for player 1
for (let i = 0; i < n; i++) {
    const cardp1 = readline(); // [n] cards of player 1
    //translate cards into numerical values and written to the array
    player1Cards.push(strengthOfCards[cardp1.slice(0, -1)]);
}

const m = parseInt(readline()); // the number of cards for player 2

for (let i = 0; i < m; i++) {
    const cardp2 = readline(); // [m] cards of player 2
    //translate cards into numerical values and written to the array
    player2Cards.push(strengthOfCards[cardp1.slice(0, -1)]);
}


let j = 0; // count of while

while (winner == 0) { //cycle emulating the game
    j++;
    if (player1Cards[0] == undefined) {
        winner = 2;
    } else if (player2Cards[0] == undefined) {
        winner = 1;
    } else if (j == 3000) { //condition when the game does not end
        winner = "PAT";
    }
    fight(player1Cards, player2Cards);
}

(winner == "PAT") ? console.log(winner) : console.log(winner + " " + count);


function fight(arr1, arr2) {
    if (arr1[0] > arr2[0]) {

        if (warPl2[0] !== undefined) {
            arr1.push(...warPl1);
            arr1.push(arr1[0]);
            arr1.push(...warPl2);
            arr1.push(arr2[0]);
            arr1.splice(0, 1);
            arr2.splice(0, 1);
            count++
            warPl1 = [], warPl2 = [];
        } else {
            arr1.push(arr1[0]);
            arr1.push(arr2[0]);
            arr1.splice(0, 1);
            arr2.splice(0, 1);
            count++
        }
    } else if (arr1[0] < arr2[0]) {
        if (warPl2[0] !== undefined) {
            arr2.push(...warPl1);
            arr2.push(arr1[0]);
            arr2.push(...warPl2);
            arr2.push(arr2[0]);
            arr1.splice(0, 1);
            arr2.splice(0, 1);
            count++
            warPl1 = [], warPl2 = [];
        } else {
            arr2.push(arr1[0]);
            arr2.push(arr2[0]);
            arr1.splice(0, 1);
            arr2.splice(0, 1);
            count++
        }
    } else if (arr1[0] == arr2[0]) { //play war
        if (arr1.length < 4 || arr2.length < 4) {
            return winner = "PAT";
        }
        //create arrow of war
        warPl1.push(...arr1.slice(0, 4));
        warPl2.push(...arr2.slice(0, 4));

        arr1.splice(0, 4);
        arr2.splice(0, 4);
    }
}
