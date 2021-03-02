let reverse = function() {
  const args = process.argv;
  const length = args.length;
  if (length === 2) {// if no arguments passed in
    console.log(undefined);
  } else {
    for (let j = 2; j < length; j++) {
      let param = args[j];
      let msg = '';
      for (let i = param.length - 1; i > -1; i--) {
        msg += param[i];
      }
      console.log(msg);
    }
  }
};

reverse();