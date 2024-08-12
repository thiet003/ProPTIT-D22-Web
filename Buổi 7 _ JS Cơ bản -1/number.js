
var a = 10;
var b = 10 / 0;
var tmp = "string"
var c = a / tmp;
var d = 10.55555;
console.log(b)
console.log(typeof b)
console.log("b is NaN? : ", isNaN(b))

console.log("c: ", c, ".typeof: ", typeof c)
console.log("c is NaN? : ", isNaN(c))


console.log("d: ", d.toFixed())