var marks=[66,66,7,7,75,1,3,2,5];
var min=marks[0];
for( var i =0; i < marks.length; i++){
    var element=marks[i];
    if(element < min){
        min =element;
    }
}
console.log(min);