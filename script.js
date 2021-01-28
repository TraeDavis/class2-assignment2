// Get info from customer
let product = prompt('Please select from the following: Apple $2(each), Bannana $1(each), or Orange $1.50(each)').toLowerCase();

let quantity = prompt('How many would you like?');
// Prices for items and tax
var apple = 2;
var bannana = 1;
var orange = 1.50;
var tax = .0825;
// Functions to calculate price
function totalA(apple, quantity, tax){
    return (apple * quantity) + (apple * tax);
}

function totalB(bannana, quantity, tax){
    return (bannana * quantity) + (bannana * tax);
}

function totalO(orange, quantity, tax){
    return (orange * quantity) + (orange * tax);
}
// total price to the 100th place
var totalApple = totalA(apple, quantity, tax);

var totalBannana = totalB(bannana, quantity, tax);

var totalOrange = totalO(orange, quantity, tax);

// conditional to display order
if(product == 'apple' || product == 'apples'){
    console.log(`Your order is: 
    ${quantity} x Apples : $${quantity*apple}
    tax: $${apple*tax}
    For a total of:
    $${totalApple.toFixed(2)}`);
}else if(product == 'bannana' || product == 'bannanas'){
    console.log(`Your order is: 
    ${quantity} x Bannanas : $${quantity*bannana}
    tax: $${bannana*tax}
    For a total of:
    $${totalBannana.toFixed(2)}`);
}else if(product == 'orange' || product == 'oranges'){
    console.log(`Your order is: 
    ${quantity} x Oranges : $${quantity*orange}
    tax: $${orange*tax}
    For a total of:
    $${totalOrange.toFixed(2)}`);
}else{
    console.log("I'm sorry something went wrong please try again.")
}













// if(product == 'apple' && quantity == '1'){
//     console.log(`Your total is: $${apple + (apple * tax)}`);
// }else if(product == 'apple' && quantity == '2'){
//     console.log((apple*2) + (apple * tax));
// }else if(product == 'apple' && quantity == '3'){
//     console.log((apple*3) + (apple * tax));
// }else if(product == 'apple' && quantity == '4'){
//     console.log((apple*4) + (apple * tax));
// }else if(product == 'apple' && quantity == '5'){
//     console.log((apple*5) + (apple * tax));
// }else if(product == 'bannana' && quantity == '1'){
//     console.log(bannana + (bannana * tax));
// }else if(product == 'bannana' && quantity == '2'){
//     console.log((bannana*2) + (bannana * tax));
// }else if(product == 'bannana' && quantity == '3'){
//     console.log((bannana*3) + (bannana * tax));
// }else if(product == 'bannana' && quantity == '4'){
//     console.log((bannana*4) + (bannana * tax));
// }else if(product == 'bannana' && quantity == '5'){
//     console.log((bannana*5) + (bannana * tax));
// }else if(product == 'orange' && quantity == '1'){
//     console.log(orange + (orange * tax));
// }else if(product == 'orange' && quantity == '2'){
//     console.log((orange*2) + (orange * tax));
// }else if(product == 'orange' && quantity == '3'){
//     console.log((orange*3) + (orange * tax));
// }else if(product == 'orange' && quantity == '4'){
//     console.log((orange*4) + (orange * tax));
// }else if(product == 'orange' && quantity == '5'){
//     console.log((orange*5) + (orange * tax));
// }else{
//     console.log('Sorry you entered a quantity that we do not have. *Please enter 1-5*')
// }