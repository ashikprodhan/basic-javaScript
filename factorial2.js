// 6!=1*2*3*4*5*6
// 5!=1*2*3*4*5
// 4!=1*2*3*4
function factorial(n){

var fact=1;

for(var i=1; i <= n; i++){
    fact=fact * i;
}
return fact;
}
var result=factorial(8);
console.log(result);
