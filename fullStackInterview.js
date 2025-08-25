if ([] == true) {
    console.log("Husnain is absent");
} else {
    console.log("Husnain is present");
}
let obj = {
    a: {
        b : undefined
    }
};
console.log(obj?.a?.b?.c?.d??"husnain"); 

var abc = 10;
if(function f(){}) {
    abc = abc + typeof f
}
console.log(abc);