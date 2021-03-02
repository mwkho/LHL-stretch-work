let pigLatin = function() {
  const args = process.argv;
  if (args.length === 2) {
    return undefined;
  } else {
    let msg = '';
    msg += modify(args[2]);
    for (let word of args.slice(3)) {
      let cpy = modify(word);
      msg += ` ${cpy}`;
    }
    return msg;
  }
};

let modify = function(str) {
  let modStr = `${str.slice(1)}${str[0]}ay`;
  return  modStr;
};

console.log(pigLatin());