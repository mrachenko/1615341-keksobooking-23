function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return min>=max ? 'Цифры нужно ввести наоборот' : Math.floor(Math.random() * (max - min + 1)) + min;
}
document.writeln(getRandomIntInclusive(0,5));


function getRandomFloatInclusive(min, max, sign) {
  return Math.round((Math.random() * (max - min) + min)* Math.pow(10, sign))/Math.pow(10, sign);
}

document.writeln(getRandomFloatInclusive(0.1,0.11,3));
