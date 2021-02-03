 
var num=[1,2,3,4,5,3,4,1];
function removeDupli(num){
    var uncommon=[];
for(var i =0; i < num.length; i++){
    var element =num[i];
    var index=uncommon.indexOf(element);
    if(index == -1){
        uncommon.push(element);
        
    }
}
return uncommon;
}
var result=removeDupli(num);
console.log(result);


var num1=[44,33,44,33,22,11,22,33,44]
var result1=removeDupli(num1);
console.log(result1);
