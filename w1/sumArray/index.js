function sumItems(array) {
  // Sum all the numbers in the array
  let total = 0;
  for (let item of array){
    total += item;
    if (! Array.isArray(item)){
      total += item;
    } else{
  
      total += sumItems(item)
    }
  }
  // for not array
  
  
  return total;
};
module.exports = sumItems;