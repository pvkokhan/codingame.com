//Medium - 1

 // https://www.codingame.com/ide/puzzle/shadows-of-the-knight-episode-1

var inputs = readline().split(' ');
const W = parseInt(inputs[0]); // width of the building.
const H = parseInt(inputs[1]); // height of the building.
const N = parseInt(readline()); // maximum number of turns before game over.
var inputs = readline().split(' ');
const X0 = parseInt(inputs[0]);
const Y0 = parseInt(inputs[1]);
var X=X0, Y=Y0, maxX=W, maxY=H, minX=0, minY=0, n=0;
var i=0; logX=[], logY=[], logSide=[];
// game loop
while (true) {
    const bombDir = readline(); // the direction of the bombs from batman's current location (U, UR, R, DR, D, DL, L or UL)
   i++;
     
   console.error(bombDir);
    switch (bombDir){
        case 'U':
            maxY=Y;
            if (logSide[i-1] ==logSide[i-2] ){
            Y-=Math.round((Y-minY)*3/4);}
            else{
            Y-=Math.round((Y-minY)/2);}
            
            
            break;
        
        case 'D':
            minY=Y;
            Y+= Math.round((maxY-minY)/2);
            break;
        
        case 'L':
            maxX=X;
            X-=Math.round(X/2);
            break;
        
        case 'R':
            X+= Math.round((maxX-X)/2);
            break;
            
        case 'UR':
            //if (logSide[i-1] == 'DL'){maxY=logY[i-1];}
            minX=X;
            maxY=Y;
            min = Math.round(Math.min((maxX-minX)/2, Y/2));
            X+=min; Y-= min;
            break;
        
        case 'DL':
           // if (logSide[i-1] == 'UR'){maxX=logX[i-1];}
            minY=Y;
            maxX=X;
            min = Math.round(Math.min(X/2,(maxY-minY)/2));
            X-=min; Y+=min;
            break;
        case 'UL':
             //if (logSide[i-1] == 'DR'){maxX=logX[i-1]; maxY=logY[i-1];}
            
            maxX=X; maxY=Y;
            
            if (logSide[i-1] == bombDir){
            min = Math.round(Math.min((X-minX)/1, (Y-minY)/1));
            }else{ min = Math.round(Math.min((X-minX)/2, (Y-minY)/2));}
            console.error(min);
            X-=min; Y-= min;
            break;
        
        case 'DR':
            //if (logSide[i-1] == 'UL'){maxX=logX[i-1]}
            minX=X; minY=Y;
             min = Math.round(Math.min((maxX-minX)/2,(maxY-minY)/2));
            console.error(min);
            X+=min; Y+=min;
            break;
            
            
            
            
            
} 
   logX[i]=X; logY[i]=Y; logSide[i] = bombDir;

    
    
    console.log(X+' '+Y);
}
