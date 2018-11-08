function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = [];

  for(let i = 0; i < musicians.length; i ++) {
    beatlesArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatlesArray;
}
