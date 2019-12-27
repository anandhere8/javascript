var str = "Ajay kumar garg kumar garg kumar garg";
var arr = str.replace(/Kumar/, "Bimar");
var brr = str.replace(/Kumar/i, "Bimar");
var mul = str.replace(/kumar/g,"bimar");
console.log(arr);
console.log(brr);
console.log(mul);