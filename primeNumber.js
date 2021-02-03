
function isPrime(n){
    for( i= 2; i<n; i++){
        // console.log(i,n % i);
       if(n % i==0){ // divide by every num except 1, n
          return 'not prime';
     }
    }
     return 'prime number';
}
var result= isPrime(9);
console.log(result);
    
