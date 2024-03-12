//AND operators//
var num1 = 3;
var num2 = 4;
console.log(num1 == 3 && num2 == 4);
//Answer True//
console.log(num1 == 4 && num2 == 3);
//Answer False//
//OR operators//
var num3 = 5;
var num4 = 6;
console.log(num3 == 5 || num3 == num3);
//Answer True//
console.log(num3 == 6 || num3 == num3);
//Answer True//
console.log(num3 == 5 || num3 == num4);
//Answer True//
console.log(num3 == 6 || num3 == num4);
//Answer False//
//NOT operator//
var num5 = 7;
var num6 = 8;
console.log(!(num5 == num6));
//Answer True//
console.log(!(num5 == num5));
//Answer False//
//if , else statement//
var num7 = 10;
if (num7 == 10)
    console.log("I am mudassir");
//Answer I am mudassir//
var num8 = 10;
if (num8 == 5) {
    console.log(" hello i am mudassir ");
}
else {
    console.log(" under else");
}
//Answer under else//
var isRaining = true;
if (isRaining) {
    console.log("wear a raincoat");
}
else {
    console.log("wear sunglasses");
}
//Answer wear a raincoat//
var num9 = 10;
if (num9 == 6) {
    console.log("number is 6");
    //start if se hota hai end else pe hoga mid me hamesha else if aega//
}
else if (num9 == 8) {
    console.log("Number is not 8");
}
else {
    console.log("number is above");
}
