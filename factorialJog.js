function add(n){
    var sum=0;
    for( var i=1; i <= n; i++){
        sum=sum + i;

    }
    return sum;
}
var total=add(6);
console.log(total);