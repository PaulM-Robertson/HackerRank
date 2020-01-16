

function countingValleys(n, s) {
    let arr = s.split(''),
        valley = 0,
        elev = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ("D") && elev === 0) {
            valley += 1;
        }
        if (arr[i] === "U") {
            elev += 1;
        } else {
            elev += (-1);
        }  
    }
    return valley;
}

(()=>{
    let n = 8;
    let s = 'DUUDDUUD';
    console.log('countingValleys(n, s)' , countingValleys(n, s))
})()
//      
//       
//        
//_  /\  /\_ 
// \/  \/             
//                  