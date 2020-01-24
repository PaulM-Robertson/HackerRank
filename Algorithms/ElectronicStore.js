function getMoneySpent(keyboards, drives, b) {
    let arr = [];
    let maxCost = 0;
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            arr.push(keyboards[i] + drives[j]);     
        }  
    }  
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i] > b) arr[i] = -1;
    }
    maxCost += Math.max(...arr);
    return maxCost;
}

(()=>{
    let keyboards = [3,1];
    let drives = [5,2,8];
    let b = 10
    console.log('getMoneySpent(keyboards, drives, b)', getMoneySpent(keyboards, drives, b))
})()