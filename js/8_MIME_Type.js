//https://www.codingame.com/ide/puzzle/mime-type

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
let mimeList= {}, fnameTypes = [];

for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0]; // file extension
    const MT = inputs[1]; // MIME type.
    mimeList[EXT.toLowerCase()] = MT;  // create a MIME list (.toLowerCase!!)
}
   
for (let i = 0; i < Q; i++) {
    const FNAME = readline();
    if (FNAME.lastIndexOf('.') == -1){ // check the condition when there is no symbol "."
    fnameTypes[i] = 'UNKNOWN'; 
    }else if (mimeList[FNAME.slice(FNAME.lastIndexOf('.')+1, FNAME.length).toLowerCase()] !== undefined){ 
    //this condition is met if the MIME type is known
    fnameTypes[i] = mimeList[FNAME.slice(FNAME.lastIndexOf('.')+1, FNAME.length).toLowerCase()];
    }else{
    //this condition is met if the MIME type is not known
    fnameTypes[i] = 'UNKNOWN';
    }
    console.log(fnameTypes[i]);
}
 
    
// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.
//console.log('UNKNOWN');
