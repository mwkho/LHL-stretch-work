const charShift = (letter, key) =>{
  let code = letter.charCodeAt() + key;
  if (letter === ' ') {
    return letter;
  }
  if (code < 97) {
    code += 26;
  } else if (code > 122) {
    {
      code = code - 26;
    }
  }
  return String.fromCharCode(code);
};

const encrypt = function(plaintext, key) {
  key = key % 26;
  let encrypted = '';
  let shifted;
  for (let char of plaintext) {
    shifted = charShift(char.toLowerCase(),key);
    if (char === char.toUpperCase()) {
      shifted = shifted.toUpperCase();
    }
    encrypted += shifted;
  }
  return encrypted;
};

module.exports = {encrypt};