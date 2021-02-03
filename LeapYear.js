function leapYear(year) {

   const remainder=year % 4;
   const remainder1=year %100;
   if(remainder ==0 && remainder1!=0 ){
       return true;
   }
   else{
       return  false;
   }
  
}
const first = leapYear(2004);
console.log(first);