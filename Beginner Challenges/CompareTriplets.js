// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let scores = [0,0];
    for( let i = 0; i < a.length; i++ ) {
        if( a[i] > b[i] ) {
            scores[0]++
        } else if( a[i] < b[i] ) {
            scores[1]++
        }

    }
    return scores;
}

