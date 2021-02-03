
//fibo[2]=fibo[2-1] +fibo[2-2];
//fibo[3]=fibo[3-1] +fibo[3-2];
//fibo[4]=fibo[4-1] +fibo[4-2];
//fibo[n]=fibo[n-1] +fibo[n-2];
//fibo[i]=fibo[i-1] +fibo[i-2];

var fibonacci=[0,1];

for( var i =2; i <=10; i++){
    fibonacci[i]=fibonacci[i-1] +fibonacci[i-2];
    console.log(fibonacci[i], fibonacci[i-1],fibonacci[i-2],i);

} 
console.log(fibonacci);