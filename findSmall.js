function small(n1){

    smallNum=n1[0];

    for(var i=0; i< n1.length; i++){
        var element=n1[i];

        if( element < smallNum){
            smallNum=element;
        }
    }
    return smallNum;
}

var output=small([55,55,32,11,45,5]);
console.log(output);