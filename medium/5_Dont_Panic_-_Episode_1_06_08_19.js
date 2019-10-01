/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const nbFloors = parseInt(inputs[0]); // number of floors
const width = parseInt(inputs[1]); // width of the area
const nbRounds = parseInt(inputs[2]); // maximum number of rounds
const exitFloor = parseInt(inputs[3]); // floor on which the exit is found
const exitPos = parseInt(inputs[4]); // position of the exit on its floor
const nbTotalClones = parseInt(inputs[5]); // number of generated clones
const nbAdditionalElevators = parseInt(inputs[6]); // ignore (always zero)
const nbElevators = parseInt(inputs[7]); // number of elevators
let liftLog = {}; //log of the lifts (floor: position)


for (let i = 0; i < nbElevators; i++) {
    var inputs = readline().split(' ');
    const elevatorFloor = parseInt(inputs[0]); // floor on which this elevator is found
    const elevatorPos = parseInt(inputs[1]); // position of the elevator on its floor
    liftLog[elevatorFloor] = elevatorPos;  //log of the lifts (floor: position)
}

// game loop
while (true) {

    for (let key in liftLog) {
        console.error(`floor - ${key} liftPos - ${liftLog[key]}`);
    }
    var inputs = readline().split(' ');
    const cloneFloor = parseInt(inputs[0]); // floor of the leading clone
    const clonePos = parseInt(inputs[1]); // position of the leading clone on its floor
    const direction = inputs[2]; // direction of the leading clone: LEFT or RIGHT
    console.error(direction);
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');



    (cloneFloor == exitFloor) ? goToTarget(exitPos) : goToTarget(liftLog[cloneFloor]); // choise target of direction

    function goToTarget(target) { // the function of motion in a given direction 

        if (direction == "LEFT" && target < clonePos) {
            return console.log('WAIT');
        } else if (direction == "RIGHT" && target > clonePos) {
            return console.log('WAIT');
        } else if (direction == "LEFT" && target > clonePos) {
            return console.log('BLOCK');
        } else if (direction == "RIGHT" && target < clonePos) {
            return console.log('BLOCK');
        } else {
            return console.log('WAIT');
        }
    }
}







