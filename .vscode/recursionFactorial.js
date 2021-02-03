/**  nicher program ta correct 
 function factorial(num){
    var fact=1;
    for(var i=1; i <=num; i++){
        fact= fact * i;
        
    }
    return fact;
}
var result=factorial(6);
console.log(result);
 */

 function factorial(num){
     if(num==1){
         return 1;
     }
     else{
         return num *factorial(num -1); 
     }
 }
 var result=factorial(6);
 console.log(result);
