function callBack(name,age,task){
    console.log("Name:",name);
    console.log("Age:",age);
    task();
}
function takeShower(){
   console.log('Go take shower'); 
}
function washHand(){
    console.log("Please wash hand with soap");
}
function scrollFB(){
    console.log('scroll fb but do not  like any post ');
}


callBack('Ashik',21,scrollFB);
callBack('Ranga',21,washHand);
callBack('Abid',14,takeShower);