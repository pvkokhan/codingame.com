/**
 * Don't let the machines win. You are humanity's last hope...
 **/

const width = parseInt(readline()); // the number of cells on the X axis
const height = parseInt(readline()); // the number of cells on the Y axis

var arr = [], answer = '';

for (let i = 0; i < height; i++) {
    const line = readline(); // width characters, each either 0 or .
    arr[i] = line.split('');
}

   for (let i=0; i<height; i++){
        for (var j=0; j<width; ) {
                findNeighbors(i,j);
        }
    }


function findNeighbors (a, b) {  //функция ищет соседей для ячейки со значением "0"

    if (arr[a][b] == '0') {
        answer += (`${b} ${a}`);
    } else{
        return j++;
    
    } 

    for (let c = 1; c <= width;){
        if (arr[a][b+c] == '0'){
            answer += ` ${b+c} ${a}`;
            break;
        }else if(b+c == width){
            answer += ' -1 -1';
            break;
        }else if(arr[a][b+c] == '.'){
            c++;
        }
    }
    
      if (a+1 == height){
        answer += ' -1 -1';
        j++;
        console.log(answer);
        answer = '';
         return;
        }
     
     for (let c = 1; c <height ; ){
          if (arr[a+c][b] == '0'){
            answer += ` ${b} ${a+c}`;
            break;
        } else if (arr[a+c][b] == '.'){
            c++;
            if (a+c == height){
        answer += ' -1 -1';
        break;
        }
        }
    }
    j++;
    console.log(answer);
    answer = '';
}   
