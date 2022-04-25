//package detailing
customerList = [
//customer 1
 {100:1.00,
  1000:0.50,
  10000:0.25,
  100000:0.10},
//customer 2 
 {50:1.00,
  1000:0.40,
  100000:0.25,
  100001:0.05}
];

//npm install prompt-sync helps with user input and lets user exit the code ;
const prompt = require('prompt-sync')({sigint: true});

// getting the info from customer
let gbsConsumed = prompt ("Enter the GBs used: "); //1500
let id = prompt ("Enter the customer ID: ");


//variables to check to help with the calculations
let bill = 0;
let tier = 0;
let index = 0;
let range = 0;
let customerId = Object.keys(customerList[id-1]);

//loop to calculate the pricing of customer
do{
    range = parseInt(customerId[index])-range
    tier = parseInt(customerId[index])
    //console.log(range,tier);
    if(gbsConsumed>=range){
        bill += customerList[id-1][tier]*range;
        gbsConsumed -= range;
        index++;
    }else{
        bill += customerList[id-1][tier]*gbsConsumed;
        gbsConsumed = 0;
    }
}while(gbsConsumed>0);


//precision of 2 decimal places
function precision(x){
    return x.toPrecision(4);
}

//prints the result
console.log(`Your bill is : ${bill} dollars`)







//for test purposes

//console.log("The bill is: "+precision(bill));
//console.log(Object.keys(customerList[1])[1]);
//console.log(Object.values.customerList[0].length);