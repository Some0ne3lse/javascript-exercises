const sumAll = function (a, b) {
  let x = 0;
  if (a < 0 || b < 0 || typeof a != 'number' || typeof b != 'number') {
    return 'ERROR';
  } else if (a < b) {
    for (i = a; i <= b; i++) {
      x += i;
    }
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      x += i;
    }
  }
  return x;
};

// Do not edit below this line
module.exports = sumAll;
