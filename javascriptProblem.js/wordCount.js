
function wordCount(n){
    count=0;

for( var i=0 ; i < n.length ; i++){
    var char= n[i];
    if( char==' ' && speech[i-1] !=' '){
        count++;
    }
}
count++;
return count;

}
var speech ="i am   a good person. i don't snore at night";
var result=wordCount(speech);
console.log(result);