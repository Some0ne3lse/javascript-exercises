const convertToCelsius = function (temp) {
  let celsTemp = (temp - 32) * (5 / 9)
  let finalTemp = Math.round(celsTemp * 10) / 10;
  return finalTemp;
};

const convertToFahrenheit = function (temp) {
  let farhTemp = temp * (9 / 5) + 32
  let finalTemp = Math.round(farhTemp * 10) / 10;
  return finalTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
