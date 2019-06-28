

 // https://www.codingame.com/ide/puzzle/aneo

const speed = parseInt(readline());
const lightCount = parseInt(readline());
var S=[], T=[], maxSpeed, currentSpeed = speed, lightColor=[];


for (let i = 0; i < lightCount; i++) {
    var inputs = readline().split(' ');
    const distance = parseInt(inputs[0]);
    const duration = parseInt(inputs[1]);
    S[i] = distance;
    T[i] = duration;
}


for (;currentSpeed>0;){
if (ledRow()){break}else{currentSpeed--}
} 
console.log(maxSpeed);

function ledRow () {

    for (let i = 0; i < S.length; i++){

    let countCiklesLed = S[i]/(currentSpeed*1000/3600)/T[i];
        
    if ( (Math.ceil(countCiklesLed)-countCiklesLed) < 0.00001){countCiklesLed = Math.ceil(countCiklesLed)}
    
    if ( Number.isInteger(countCiklesLed)){countCiklesLed++}else{countCiklesLed = Math.ceil(countCiklesLed)}
        
    if ( countCiklesLed%2 === 0) {lightColor.splice(0,lightColor.length); return false;}
    }  
    
    maxSpeed = currentSpeed;
    return true;
   
    
    }
    
    


    
    

    



