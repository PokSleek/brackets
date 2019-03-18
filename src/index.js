module.exports = function check(str, bracketsConfig) {
  let arrBrackets = str.split("");

  for (let i = 0; i < arrBrackets.length; i++) {
    let firstBracket = arrBrackets[i];
    let secondBracket = arrBrackets[i + 1];
    bracketsConfig.forEach(configBrackets => {
      if (
        firstBracket == configBrackets[0] &&
        secondBracket == configBrackets[1]
      ) {
        arrBrackets.splice(i, 2);
        i -= 2;
      }
    });
  }

  if (arrBrackets.length === 0) {
    return true;
  } else {
    return false;
  }
};
