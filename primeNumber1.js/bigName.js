function bigName(n){
    var bigLength=0;
    for(var i =0; i <n.length; i++){
       

        if(n[i]==''){
            return null;
        }
       
       

        if( n[i].length > bigLength){
            bigLength= n[i].length;
            var index=n[i];
            
        }
    }
    return index;
}
var friends=['Ali','Ahmer','Aliabdurrehman','Saniur','salahuddin','kamaruzzaman'];
var result=bigName(friends);
console.log(result);