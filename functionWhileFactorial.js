
// 6!=1*2*3*4*5*6
// 5!=1*2*3*4*5
// 4!=1*2*3*4


function factorial(n){
    var i=1;
fact=1;
while(i <= n){
    fact=fact* i;
    i++;
   
    
}
return fact;

}
var result = factorial(6);
console.log(result);
