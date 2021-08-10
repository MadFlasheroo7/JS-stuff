var listPrice = 299;
var sellingPrice = 199;
var discount = (listPrice - sellingPrice) / listPrice * 100;

console.log(discount + "%");

var roundUPCount = Math.round(discount);
console.log(roundUPCount);