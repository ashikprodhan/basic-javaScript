function isPrime(n){
    for( var i = 2; i < n; i++){
      // console.log(n %i,i);
        if (n % i== 0){
            return ' not prime';
        }
    }
     return 'prime number';  
}


var result=isPrime(8);
console.log(result);