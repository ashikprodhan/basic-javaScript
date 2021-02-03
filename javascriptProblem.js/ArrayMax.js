var marks=[56,65,4,99,5,34,98,6];
var max=marks[0];
for( var i=0; i < marks.length; i++){
    var element= marks[i];// ekhane element gulo age ber korbe array theke 
    // niche ese element gulo check hobe , jodi element er value max er chaite boro hoy tahle present element er value ta max er vitore set kore dibe . tahlei max value ta amra peye jabo.

    if(element > max ){
        max =element;
    }
}
console.log(max);