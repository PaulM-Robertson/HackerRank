

function countingValleys(n, s) {
    let arr = s.split('');
    let down = 0,
        up = 0,
        valleys = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "D") {
            down += 1;
        } else {
            up += 1;
        }
    }
    console.log(elevation);
}

(()=>{
    let n = 24;
    let s = 'DDUUUUUUDDDUUDDUUUDDDDUU';
    console.log('countingvalleys(n, s)' , countingValleys(n, s))
})()
//        /\
//       /  \  /\ 
//      /    \/  \
//_    /          \    _
// \  /            \  / 
//  \/              \/   