//factorial 
//0!=1
///1!=1
//2!=1*2
//!3=1*2*3
//4!=3!*4 or (4-1)!*4
//5!=(5-1)!*5
//6!=(6-1)!*6
//7!=(7-1)!*7
//8!=(8-1)!*8
//9!=(9-1)!*9
//n!=(n-1)!*n

function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

var result=factorial(6);
console.log(result);