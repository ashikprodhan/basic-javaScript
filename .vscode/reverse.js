/**
 * function reverseString(str){
    var reverse="";
    for( var i=0; i < str.length; i++ ){
        var char=str[i];
        var reverse=char +reverse;
    }
return reverse ;
}
var statement=" i am a student";
var result=reverseString(statement);
console.log(result);
 */
var sentence=" i am a student";
var reverse=sentence.split('').reverse().join("");
console.log(reverse);