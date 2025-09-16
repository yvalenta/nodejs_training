function setUnion(a=[], b=[]) {
  return new Set(a).union(new Set(b));   
}
    
console.log(setUnion([1, 2, 3], [3, 4, 5]));

module.exports = { setUnion };
