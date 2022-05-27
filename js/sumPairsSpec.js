var sp = require("./sumPairs");

// Don't forget to add your tests :)
console.log(sp.sumPairs([1,2,3,4,5], 9) == JSON.stringify([[4,5]]));
console.log(sp.sumPairs([1,2,2,3,4,5], 4) == JSON.stringify([[1,3], [2,2]]));
console.log(sp.sumPairs([1,2,2,3,4,5], 0) == 'unable to find pairs'); 
