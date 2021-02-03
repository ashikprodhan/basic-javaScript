function getFullName(fName, lname){
let fullName ='';
for(let i =0;i < arguments.length; i++){
    const namePart =arguments[i];
    fullName =fullName +' ' +namePart;
    
}
return fullName;
}
const myName =getFullName('Mohammad','Abubakar','siddik','Ashik');
console.log(myName);