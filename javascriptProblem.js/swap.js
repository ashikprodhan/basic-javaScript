var a =5;
var b=7;
//console.log('before swap : a=', a ,'b=',b);
// jehetu ami swap korbo tain temp var nei . R temp er vitore a er man rakhi. er temp vitore rakhar por a khali hoye jay .tokhon ami b er man ta  a er vitore rakhi . akhon a purno  ache , tobe b khali , akhon temp er man b er vitore rakhbo . tahlei swap hoye jabe 

var temp=a;
a=b;
b= temp;
//console.log('after swap : a =', a,'b = ',b
//);

var x =8;
var y =9;
//console.log('before swap x:',x,'y:',y);
var x=x+y;//ekhane x er man 17
var y=x-y;// ekhane y er man 8, karon x er 17 theke y 9 bad dile 8 hoy;

var x=x-y;// ekhane x er man 17 theke y er 8 bad dile , 9 hoy
//console.log('after swap x:',x,'y:',y);

var p=7;
var q=6;
[p,q]=[q,p];
console.log('after swap p:',p,'q:',q);
