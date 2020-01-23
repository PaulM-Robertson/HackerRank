// Complete the birthday function below.
function birthday(s, d, m) {
   let total = 0;
   for (i = 0; i <= (s.length)-m; i++) {
      let sum = 0;
      for (j = 0; j < m; j++) {
         sum += s[i+j]; 
      }
      if (sum === d) total++;
   }
   return total;
}



(()=>{
   let s = [1,4,2,3];
   let d = 5;
   let m = 2;
   console.log('birthday(s, d, m)' , birthday(s, d, m))
})()