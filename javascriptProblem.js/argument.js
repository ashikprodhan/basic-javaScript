function arguments(num1,num2){
    var sum=0;
    

    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum+=num;
         }
        
    function logInfo(message){
        console.log(message);
        }
    logInfo("Good morning");
    var double=sum *2;
    

    return double;
}
var result=arguments(33,54,22,67);
console.log(result);