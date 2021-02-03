function isLeapYear(year){
    const remainder1= year % 4;
    const remainder2=year % 100;

    if (remainder1==0 && remainder2 !=0){
       return true;
    }
    else{ 
        return false;
    }
}
const check2000=isLeapYear(2004);
console.log(check2000);