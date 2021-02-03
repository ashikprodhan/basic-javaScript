var num1=.2;
var num2=.4;

// if postion not fixed  it shows result 0.6000000000000001

add=num1+num2;
console.log(add);

total=num1+num2;
// postion fixed function
total=total.toFixed(3);
console.log(total);
