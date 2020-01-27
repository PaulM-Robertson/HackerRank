function divisibleSumPairs(n, k, ar) {
    let cocks = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n+1; j++) {
            if ((ar[i] + ar[j]) % k === 0) cocks += 1;
        }
        return cocks;
    }
    console.log( cocks);
    
}

(()=>{
    let ar = [2,5,7,4,12];
    let n = ar.length;
    let k = 9;
    // output = 2
    console.log('divisibleSumPairs(n, k, ar)', divisibleSumPairs(n, k, ar))
})()