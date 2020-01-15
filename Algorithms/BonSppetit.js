
function bonAppetit(bill, k, b) {
    //add bill array together
    //subtract item k
    //check if bill-k === b
    //if yes, print "bon appetit"
    //if no, print difference 
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        total += Number(bill[i]);
    }
    if (((total - bill[k])/2) === b) {
        console.log('Bon Appetit'); 
    } else {
        console.log(b - ((total - bill[k])/2)); 
    }
    

}


(()=>{
    let bill = [12,4,8];
    let k = 1;
    let b = 12;
    console.log('bonappetit(bill, k, b)' , bonAppetit(bill, k, b))
})()