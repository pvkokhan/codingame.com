/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
const N = parseInt(inputs[0]); // the total number of nodes in the level, including the gateways
const L = parseInt(inputs[1]); // the number of links
const E = parseInt(inputs[2]); // the number of exit gateways

var arr = []; exit = [];
var activeExit;
for (let i = 0; i < L; i++) {
    var inputs = readline().split(' ');
    const N1 = parseInt(inputs[0]); // N1 and N2 defines a link between these nodes
    const N2 = parseInt(inputs[1]);
    arr[i] = [N1, N2];
    
}
for (let i = 0; i < E; i++) {
    var EI = parseInt(readline()); // the index of a gateway node
    exit[i] = EI;
    activeExit = EI;

}

// game loop
while (true) {
    var SI = parseInt(readline()); // The index of the node on which the Skynet agent is positioned this turn

      // выбираем "активный выход", к которому ближе всего вирус
    for (let j=0; j<exit.length;j++){
        if (findInArr (exit[j], SI) === true){
            activeExit = exit[j];
            break;
        }else if(findInArr (SI,exit[j]) === true){
            activeExit = exit[j];
            break;
    }
    }
    
      // проверяем наличие линии вирус-выход и если она есть убираем 
    if (findInArr(SI, activeExit) === true){
        console.log(`${SI} ${activeExit}`);
        }else if(findInArr(activeExit, SI) === true){
            console.log(`${activeExit} ${SI}`);
        } else{
      //иначе убираем по списку соединения активного выхода с другими точками
            for (let i=0; i<arr.length; i++){
             if (arr[i].indexOf(activeExit) != -1){
                 console.log(`${arr[i][0]} ${arr[i][1]}`);
                 arr.splice(i, 1)
                 break;
             }
            }
}
   
  
}


//так как indexOf() в многомерном массиве не работает
//пишем функцию аналог IndexOf() для многомерного массива
function findInArr (X, Y) {

  for (let i = 0; i < arr.length; i++) {
      if (arr[i][0] == X && arr[i][1] == Y){
        return true;
      }

      } return false;
    }
