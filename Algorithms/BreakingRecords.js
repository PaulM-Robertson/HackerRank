const breakingRecords = (scores) => {
    let maxIncrease = 0,
        minDecrease = 0,
        max = scores[0],
        min = scores[0];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > max)  maxIncrease += 1, max = scores[i];
        if (scores[i] < min)  minDecrease += 1, min = scores[i]; 
    }
    return [maxIncrease, minDecrease];
}

(()=>{
    let scores = [12,13,9,5,23,3,34];
    console.log('breakingRecords(scores)' , breakingRecords(scores))
})()

    let scores2 = [12,13,9,5,23,3,34];
    console.log('breakingRecords(scores2)' , breakingRecords(scores2))

