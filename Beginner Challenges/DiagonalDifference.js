function diagonalDifference(arr) {
    let sumLeft = 0, sumRight = 0, n = arr.length;
    for( let i = 0, j = 0; i < n; i++, j--){
        sumLeft += arr[i][i];
        sumRight += arr[i][j];
    }
    return Math.abs(sumLeft-sumRight);
}

// debugging my code:
// (()=>{
//     let arr = [11,2,4,4,5,6,10,8,-12]
//     console.log('diagonal difference: ' , diagonalDifference(arr))
// })()