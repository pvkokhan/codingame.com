//https://www.codingame.com/ide/puzzle/horse-racing-duals

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline());
var listOfHorsesStr = [], difference = [];

for (let j = 0; j < N; j++) {
    const pi = parseInt(readline());
    // form an array containing the values of the strength of the horses
    listOfHorsesStr[j] = pi;
}

// sort array elements in ascending order
listOfHorsesStr.sort(function (a, b) {
    return b - a;
});

for (let i = 0; i < (listOfHorsesStr.length - 1);i++) {
    //since the array is sorted - just find the difference between its neighboring elements
    difference[i] = Math.abs(listOfHorsesStr[i+1] - listOfHorsesStr[i]);
}

//output the minimum array element to the console
console.log(Math.min.apply(null, difference));
