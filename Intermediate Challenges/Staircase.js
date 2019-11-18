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
    for( let r =  1; r <= n; r++ ) {
        let blanks = [...Array(n-r)].map( r => ' ');
        let hashes = [...Array(n-(n-r))].map( r => '#');
        console.log([...hashes, ...blanks].join(''));
    }
}
    

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}