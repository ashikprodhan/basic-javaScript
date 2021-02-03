function add(num1,num2){
    var result =num1*2;
    // result er value ta function er kache return korbe
    return result;
 }

// result ta nicher function k return dibe & first er vitore store hobe 
 var first=add(6); 
 
//  nicher function er result ta second er vitore add hobe karon ekhane result return korche function er kache tai .
// parameter mane input neya  
var second=add(8);
 total=first + second;
 console.log(total);