// function multiply(n1,n2){
//     var result= n1*n2;
//     return result;
// }
// var gun=  multiply(56,4);
// console.log(gun);

function largeNum(num){
    var largeNum=num[0];
    for(var i=0; i< num.length; i++){
        var element=num[i];
        console.log(element);
        if(element > largeNum){
            largeNum=element;
        }
    }
    return largeNum;

}

var num=[55,66,677,75,5];

var output =largeNum(num);
console.log('big number is:',output);