function getRandom(min, max) {
  return Math.random() * (max - min);
}


function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  if (min>=max) {
    return undefined;
  }
  return Math.round(getRandom(min, max)) + min;
}

function getRandomFloatInclusive(min, max, digitsCount) {
  if (min>=max) {
    return undefined;
  }
  return Math.round((getRandom(min, max) + min) * 10 ** digitsCount) / 10 ** digitsCount;
}

document.writeln(getRandomIntInclusive(0,5));
document.writeln(getRandomFloatInclusive(0.1,0.11,3));

