var name=[3,34,45,4,4,3,2,7,8,8,9,65,9];
var uniqueName=[];
for( var i= 0; i  < name.length; i++){
    var element=name[i];
    var index=uniqueName.indexOf(element);
    if(index==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName);
