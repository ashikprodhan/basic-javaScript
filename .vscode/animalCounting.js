/**  This is alternative program  and correct
 * 
 * var depth=20;
if(depth <=10){
    var animal=depth *10;
}
else if(depth <=20){
    var firstPart=10*50;
    var remaining=depth -10;
    var secondPart=remaining *100;
  var   animal=firstPart +secondPart;

}else{
    var firstPart=10*50;
    var secondPart=10*100;
    var remaining=depth -20;
    var thirdPart=remaining * 300;
    var animal=firstPart +secondPart +thirdPart;
}
console.log(animal);

*/
function animalCalculator(depth){
   
    if( depth <=10){
        animal=depth*50;
    }else if(depth<=20){
        firstPart=10*50;
        remaining=depth -firstPart;
        var secondPart=remaining *100;
        animal=firstPart +secondPart;

    }else{
        firstPart=10*50;
        secondPart=10 *100;
        remaining=depth -20;
        thirdPart=remaining *300;
        animal= firstPart +secondPart+thirdPart;
    }

return animal;

}
var count=animalCalculator(21);
console.log(count);