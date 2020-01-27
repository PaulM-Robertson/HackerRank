function divisibleSumPairs(n, k, ar) {
    let cocks = 0;
    for (let i = 0; i < n; i++) {
        for (let j = (i+1); j <= n; j++) {
            let a = 0;
            if (j > i) a = ar[i] + ar[j];
            if (a % k === 0) cocks++;
        }
    }
    return cocks;
}

(()=>{
    let ar = [2,4,6];
    let n = ar.length;
    let k = 2;
    // output = 3
    console.log('divisibleSumPairs(n, k, ar)', divisibleSumPairs(n, k, ar))
})()