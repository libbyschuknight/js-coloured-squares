function rand8BitInt () {
  return Math.floor(Math.random() * 256);
}

function randPoint () {
  return Math.random();
}

function randRGB () {
  return 'rgb(' + rand8BitInt() + ',' + rand8BitInt() + ',' + rand8BitInt() + ',' + randPoint() + ')';
}
