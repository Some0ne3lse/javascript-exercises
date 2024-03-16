const removeFromArray = function (addToArray, ...removeItem) {
  let array = [];
  array.push(...addToArray);
  return array.filter(val => !removeItem.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
