function factorial(n){
    var factorial=1;
    for(var i=1; i <= n; i++){
        factorial=factorial * i;
    }
return factorial;

}
var result=fact(8);
console.log(result);