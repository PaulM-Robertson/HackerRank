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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    let sum1=0;
    for( let i = 0; i < 5; i++ ){
        sum1 += arr[i]-arr[0];
        
        
        // sum = [
        //     arr[i]-arr[0],
        //     // arr[i]-arr[1],
        //     // arr[i]-arr[2],
        //     // arr[i]-arr[3],
        //     // arr[i]-arr[4]
        // ]; 
    }
    return arr;
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
