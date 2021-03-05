// Example 1: Loaded Dice

function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  /* your code here */
  let i = 0;
  return function() {
    let result = list[i];
    i++;
    return result;
  }
  
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6


// Example 2: Countdown

const countdownGenerator = function (x) {
  let timer = x;
  return (function (){
    if (timer > 0){
      console.log('T-minus ', timer)
      timer -- ;
    } else if (timer === 0){
      console.log('Blast Off!');
      timer--
    } else{
      console.log('Rockets already gone, bub!');
    }
    console.log()
  })
  /* your code here */
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!