// Complete the plusMinus function below.
function plusMinus(arr) {
    let zeroFraction = 0, 
        negFraction = 0, 
        posFraction = 0, 
        n = arr.length;
    if( n > 0 && n <= 100 ) {
        arr.map((value) => {
            if( value > 0 ) {
                posFraction++;
            } else if ( value < 0 ) {
                negFraction++;
            } else {
                zeroFraction++;
            }
            return value;
        }); 
    }
    return(
        (posFraction/n)
        (negFraction/n)
        (zeroFraction/n)
    );
}