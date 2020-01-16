function sockMerchant(n, ar) {
    let pairs = 0;
    let sorted = ar.sort((a,b) => {return a-b});
    for (let i = 0; i < (n - 1); i++) {
        if (sorted[i] === sorted[i + 1])  pairs += 1, sorted[i + 1] = 'paired';
    }
    return pairs;
}

(()=>{
    let n = 9;
    let ar = [10, 10, 10, 10, 20, 20, 20, 30, 50];

    console.log('sockMerchant(n, ar)', sockMerchant(n, ar))
})()