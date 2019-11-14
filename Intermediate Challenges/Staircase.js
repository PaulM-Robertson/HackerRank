'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    if( n > 0 && n <= 100 && typeof n === 'number' && n === parseInt( n, 0 )){
        for( let i = 1; i < n; i++) {
            let blanks = [ ...[], ...Array(n-1) ].map( r => ' ');
            let hashes = [ ...[], ...Array(n-(n-1))].map( r => '#');
            console.log([
                ...blanks,
                ...hashes
            ].join(''));
        }
    }
}    

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
