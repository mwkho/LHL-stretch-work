const loopyLighthouse = function(range, multiples, words) {
  if (range.length < 1) {
    return;
  }
  if (multiples.length < 1) {
    return;
  }
  if (words.length < 1) {
    return;
  }
  let start = range[0];
  let end = range[1];
  let mult1 = multiples[0];
  let mult2 = multiples[1];
  for (let i = start; i <= end; i++) {
    if (i % (mult1 * mult2) === 0) {
      console.log(words[0] + words[1]);
    } else if (i % mult2 === 0) {
      console.log(words[1]);
    } else if (i % mult1 === 0) {
      console.log(words[0]);
    } else {
      console.log(i);
    }
  }
};


loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([], [2, 5], ["Batty", "Beacon"]);
loopyLighthouse([15, 90], [], ["Batty", "Beacon"]);
loopyLighthouse([15, 90], [2,5], []);
loopyLighthouse([0,25], [5,2], ["Batty", "Beacon"]);
loopyLighthouse([0,25], [100,150], ["Batty", "Beacon"]);



