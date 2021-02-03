



function getArraySum(prices){

    sum=0;
for( var i =0 ; i < prices.length; i++){
    sum += prices[i];
}
return sum;
}

var price1=[1,2,3,4,5];
var result=getArraySum(price1);
console.log(result);

var prices=[1,2,3,4,5,6,7,8,9,10];
var result1=getArraySum(prices);
console.log(result1);