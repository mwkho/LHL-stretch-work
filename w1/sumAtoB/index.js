
const sum = function(fromN, toN) {
  //base case when its fromN
  if (toN === fromN) {
    return toN;
  }
  // recursive step of adding
  return toN + sum(fromN, toN - 1);
};

module.exports = sum;
