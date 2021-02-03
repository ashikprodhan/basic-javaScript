function fibonacci(fibo){
   

    var sum=0;
    for(var i=0; i < fibo.length; i++){
         sum=sum + fibo[i];
    }
   return sum;
    

}
 var fibo=[1,2,3,4,5];

var result=fibonacci(fibo);
console.log(result);