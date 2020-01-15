// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    arr = arr.sort(function(a, b){return a-b})
    let uniques = [... new Set(arr)];
    let counts = [];
    for (let i = 0; i < uniques.length; i++) {
        counts.push(0);
    }
    for (let i = 0; i < uniques.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (uniques[i] === arr[j]) {
                counts[i]++;
            }
        }
    }
    return uniques[counts.indexOf(Math.max(... counts))];
}

(()=>{
    let arr = [5,2,2,2,4,1,1,2,4,2,2,2,4,1,2,4,1,2,4,4,3,2,3,1,3,3,4,3,5,2,5,3,4,1,3,2,3,3,3,5,2,4,1,5,4,5,4,4,4,5,3,2,1,1,3,1,1,5,5,3,5,2,2,4,5,2,4,3,2,4,4,5,3,2,3,2,4,5,2,2,3,5,2,3,1,3,3,2,4,3,5,4,3,1,3,3,2,4,4,3,5,3,3,3,5,1,3,5,5,2,5,2,3,4,3,3,2,1,3,1,2,3,2,4,2,3,3,3,3,4,3,3,1,1,5,1,3,4,5,5,3,3,1,5,5,5,5,2,3,1,3,2,3,5,5,1,1,3,4,1,1,2,4,4,4,1,2,3,3,2,1,5,3,1,1,2,2,1,5,2,1,1,4,2,4,5,2,2,2,1,1,1,3,2,4,5,1,4,4,1,5,2,1,4,3,5,4,2,1,5,5,5,2,1,4,5,2,2,1,2,4,3,2,4,3,3,5,3,5,1,4,1,2,4,2,1,5,5,1,1,5,5,1,3,5,2,5,4,1,1,2,1,5,2,3,3,1,1,2,2,5,2,1,3,5,5,4,2,5,5,4,2,1,3,3,1,2,5,5,1,4,4,5,4,3,2,4,5,1,4,1,2,2,4,5,3,3,5,1,4,2,5,1,5,3,3,2,4,3,5,1,2,4,2,3,4,4,4,4,3,4,5,1,2,3,1,5,2,2,3,5,4,5,3,2,3,3,3,1,4,2,3,3,4,4,3,2,2,2,2,1,4,2,3,1,4,4,5,4,1,3,1,2,3,4,3,2,2,3,2,3,5,2,3,3,1,1,3,4,1,2,3,3,4,5,3,2,4,2,2,3,1,3,1,3,1,2,1,1,4,3,3,1,3,4,1,4,4,5,5,2,5,4,2,5,4,1,3,1,2,2,5,4,4,2,2,5,4,2,3,5,5,1,3,1,2,1,2,1,2,5,4,5,4,3,5,1,4,5,1,5,5,2,3,2,3,5,1,1,4,4,5,5,5,4,5,2,4,2,3,3,2,4,2,5,2,3,3,2,4,3,5,3,4,5,5,2,1,4,5,2,1,2,5,1,1,3,3,5,5,4,2,4,3,1,3,1,4,3,1,2,2,4,5,4,4,3,5,5,4,4,4,2,2,5,4,4,1,1,4,5,4,3,4,3,3,2,3,2,3,5,5,5,5,2,1,1,5,3,4,3,2,1,3,4,2,4,2,4,1,3,5,3,3,1,1,3,3,2,3,2,4,4,5,2,1,4,1,1,3,2,1,5,2,2,1,4,4,2,1,2,5,3,2,2,2,1,2,3,4,3,2,2,3,3,4,2,2,5,4,2,1,2,5,1,2,1,2,3,5,3,2,5,3,3,1,5,5,5,5,5,2,4,2,5,2,2,4,3,3,3,1,2,5,1,2,1,3,1,5,3,2,4,1,3,5,5,5,3,2,3,4,1,5,5,5,1,4,1,2,4,4,3,1,4,1,1,5,5,3,4,5,1,2,2,4,2,4,4,5,4,3,5,1,2,5,1,4,2,5,3,2,1,5,5,3,4,2,2,4,2,4,3,3,5,1,1,4,2,1,3,2,3,1,3,1,4,4,3,2,5,2,5,4,2,3,5,4,5,2,5,4,1,5,5,4,4,2,4,5,4,1,4,2,2,5,5,3,1,4,2,1,1,5,3,2,4,1,5,5,4,5,4,5,5,3,1,4,4,3,2,4,2,4,5,4,2,5,5,3,5,4,1,1,1,3,4,3,2,1,2,3,5,2,5,1,1,4,3,5,3,3,4,3,1,1,1,3,2,5,2,3,1,1,4,2,3,3,3,3,4,2,2,2,3,4,5,1,4,1,4,2,2,2,4,4,5,3,3,3,5,1,1,1,1,3,2,3,3,5,5,3,5,2,2,4,3,4,3,2,1,1,1,2,5,4,3,1,3,4,2,1,2,4,5,5,5,4,2,4,4,5,2,2,2,4,5,2,5,3,5,3,1,2,4,2,2,2,5,2,2,2,5,5,4,2,2,4,4,2,3,2,1,2,1,1,4,5,4,3,1,1,4,2,1,5,5,2,4,2,5,2,3,5,5,1,4,5,3,2,1,2,4,2,3,3,2,4,3,5,4,2,3,1,2,4,2,5,3,1,2,5,5,1,4,4,5,5,5,1,1,4,3,5,5,2,5,2,4,5,2,5,2,1,2,4,2,2,4,4,4,2,3,5,5,2,1,5,4,1,4,5,3,5,4,2,5,3,1,4,3,4,5,1,5,5,1,5,4,1,1,1,1,2,3,2,4,1,3,3,1,5,4,3,5,3,2,3,4,3,2,1,3,4,4,5,4,5,2,2,1,5,3,5,5,4,4,1,4,1,3,3,5,4,5,4,1,3,5,3,1,5,2,5,5,4,3,2,5,1,2,5,2,5,4,4,5,3,5,1,1,3,3,4,4,4,4,4,2,2,3,5,4,4,1,2,2,2,1,4,5,5,5,3,5,2,1,5,2,3,1,5,2,4,1,2,3,2,3,3,2,3,5,2,1,5,3,5,1,5,3,4,5,4,2,1,2,2,5,4,1,1,3,3,3,5,2,4,3,1,1,1,1,1,5,2,1,3,3,5,5,4,3,2,5,4,5,5,3,4,4,1,1,4,3,2,3,1,4,1,2,2,5,3,4,3,4,4,5,1,1,5,4,4,5,1,2,1,2,5,1,1,5,2,2,2,5,1,4,1,4,4,3,4,2,1,1,5,4,5,5,3,4,2,3,2,5,1,3,2,5,1,2,2,5,5,1,1,1,4,1,5,1,1,4,4,2,5,5,3,4,3,5,2,4,3,4,5,2,1,2,3,2,1,3,4,1,1,2,5,5,1,4,4,5,2,2,5,5,5,5,5,3,3,4,1,3,5,1,4,5,4,4,1,5,3,1,4,3,4,5,1,3,4,4,2,1,2,3,1,4,5,1,4,1,5,4,5,5,2,1,5,4,4,1,5,5,4,5,1,5,5,5,5,4,5,4,2,3,2,5,5,2,5,5,2,2,2,2,2,5,1,1,3,5,3,1,2,1,1,2,5,1,1,4,4,1,3,3,3,5,4,1,5,4,4,3,5,4,2,3,2,1,1,1,4,5,2,5,2,3,3,2,1,1,4,1,4,4,3,2,3,4,2,5,1,2,3,4,2,3,3,2,4,4,3,4,4,3,4,2,4,2,2,4,1,2,5,5,3,4,2,1,1,2,1,4,2,4,3,2,5,1,3,2,1,2,5,2,1,5,4,4,3,5,1,3,5,1,3,4,2,3,1,1,4,4,4,2,2,4,2,3,4,1,4,3,2,5,5,1,3,2,1,4,3,4,1,4,1,1,4,1,5,2,2,5,2,1,2,5,1,5,4,4,2,1,2,2,1,3,4,5,5,2,3,3,4,3,2,5,3,3,2,4,4,5,1,1,1,2,4,2,4,3,3,2,2,1,1,3,2,4,1,5,1,3,2,4,2,4,4,1,4,5,5,2,1,4,1,1,5,1,1,1,5,2,4,5,1,2,3,5,2,5,1,1,5,5,2,1,4,3,3,1,2,1,5,1,2,2,3,3,3,1,1,4,2,2,2,3,1,5,2,3,1,5,5,2,5,5,3,3,3,2,2,2,4,5,3,1,4,4,2,4,1,2,2,2,3,4,2,5,4,1,2,1,5,4,5,4,2,4,1,2,3,3,2,3,1,4,2,4,5,3,2,3,3,4,4,2,5,3,4,4,3,1,1,3,2,5,3,2,1,5,2,5,1,3,1,3,4,4,4,1,5,4,5,2,1,4,2,2,5,1,5,3,1,2,5,2,3,2,1,2,3,1,4,1,1,5,1,4,2,3,4,5,1,4,4,2,1,4,2,3,3,2,1,2,4,1,2,3,5,4,3,2,1,5,4,1,4,3,1,5,4,5,4,4,3,5,2,1,1,1,3,3,1,4,4,4,3,1,3,1,3,4,4,4,5,4,5,1,5,4,2,2,3,5,1,5,1,5,3,1,1,2,1,4,1,5,4,1,4,2,5,2,1,5,5,4,3,1,3,2,4,5,1,5,1,3,1,1,4,2,5,4,4,3,5,2,4,5,5,5,3,2,5,4,3,5,4,4,1,3,2,1,3,2,3,5,3,2,4,1,5,3,4,2,5,1,4,5,3,3,2,5,4,1,3,5,3,1,4,4,5,3,5,5,5,1,4,2,2,1,2,2,2,3,2,3,2,5,3,4,1,1,1,5,5,1,4,5,2,5,3,4,3,2,3,2,5,1,4,4,1,4,5,5,1,2,1,4,1,5,2,5,2,4,2,5,3,4,5,1,3,4,2,5,3,1,4,1,5,5,4,2,5,4,2,2,1,3,2,5,5,4,5,4,3,1,4,2,5,4,2,4,2,4,4,4,5,4,3,1,2,2,5,3,4,4,2,1,3,5,3,5,4,3,3,3,3,4,1,1,3,1,3,1,2,3,2,3,1,2,3,5,2,5,3,3,4,2,5,4,3,4,5,4,5,5,1,2,3,5,2,1,3,3,3,5,3,3,5,4,3,3,5,3,4,1,3,2,4,5,5,2,3,3,1,3,2,2,3,2,1,4,1,1,4,2,2,3,3,2,5,3,1,5,1,5,1,5,4,3,3,2,2,3,2,1,5,2,2,2,2,2,3,5,4,1,4,1,1,1,1,2,2,2,3,4,1,5,2,1,3,1,2,5,4,2,5,2,3,4,2,3,4,3,2,4,5,4,4,4,5,1,3,3,5,1,3,2,2,1,3,5,5,1,2,5,1,5,3,5,5,5,3,2,3,3,5,3,2,5,4,2,1,1,2,3,5,2,1,4,5,3,1,4,4,5,3,5,4,4,4,4,2,5,5,4,5,3,4,1,2,3,1,5,4,4,3,4,3,3,3,5,3,5,2,2,1,3,3,4,1,4,3,4,4,4,1,1,5,1,2,5,3,1,5,2,4,2,4,1,4,3,3,5,4,3,3,1,4,5,1,3,2,1,4,5,5,4,3,3,2,5,2,3,3,2,5,1,3,4,4,4,1,4,2,1,2,2,1,4,3,2,1,4,5,2,4,3,3,4,2,1,2,2,3,3,3,2,2,1,4,4,5,3,1,3,5,5,2,1,3,4,2,3,5,4,2,2,5,4,1,1,5,4,5,4,5,2,1,1,5,5,1,4,5,4,3,2,1,1,5,5,3,5,5,4,4,3,1,5,5,1,1,2,5,2,2,2,5,1,4,3,3,2,2,3,3,3,2,5,2,3,5,1,3,3,2,3,3,4,1,1,1,4,3,3,2,1,5,3,1,5,5,3,4,2,2,5,3,2,3,5,5,2,4,5,2,2,3,2,3,4,2,5,3,3,3,1,2,1,3,1,4,4,4,4,3,3,3,5,5,2,5,2,2,3,5,4,3,2,5,1,4,4,2,4,1,1,5,3,2,3,4,5,1,2,4,5,3,5,4,1,3,4,3,5,4,4,2,3,4,2,1,3,5,2,4,3,1,4,1,4,4,3,2,2,5,1,4,3,4,5,1,1,5,1,3,3,4,3,2,3,2,3,5]
    console.log('migratoryBirds(arr)' , migratoryBirds(arr))
})()


