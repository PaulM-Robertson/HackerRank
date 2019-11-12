let ar = [1,34,467,689,234,34,6];

arraySummation = function(ar){
    let sum = 0; 
    let n = ar.length
    for (let i = 0; i < n; i++) {
        sum += ar[i];
    }
    return sum;
}
