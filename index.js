var conversionFunctions = require("./conversionFunctions");

var typeEntered = process.argv[2];
// console.log(typeEntered)
var value = process.argv[3];
// console.log(value)
var r = parseInt(process.argv[3])
var g = parseInt(process.argv[4])
var b = parseInt(process.argv[5])


if(typeEntered === "hex"){
    console.log(conversionFunctions.hexToRgb(value))
}else{
    console.log(conversionFunctions.rgbToHex(r,g,b))
}