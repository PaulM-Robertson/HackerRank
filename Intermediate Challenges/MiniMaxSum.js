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
    let newArr = [];
    let sum = 0;
    for( let i = 0; i < 5; i++ ){
        sum += arr[i];
    }
    newArr.push(sum-arr[0]);
    newArr.push(sum-arr[1]);
    newArr.push(sum-arr[2]);
    newArr.push(sum-arr[3]);
    newArr.push(sum-arr[4]);
    console.log( Math.min(...newArr),Math.max(...newArr) );
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
