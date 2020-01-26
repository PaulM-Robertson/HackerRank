function divisibleSumPairs(n, k, ar) {
    let cocks = 0;
    for (let i = 0; i < k.length; i++) {
        for (let j = 1; j < k.length; j++) {
            if (ar[i] + ar[j] % k === 0) cocks += 1;
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