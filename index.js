function theBeatlesPlay(musicians, instruments) {
  let beatlesArray = [];

  for(let i = 0; i < musicians.length; i ++) {
    beatlesArray.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beatlesArray;
}

 const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts) {
  let count = facts;
  while (count < facts) { 
  count++;
  }
  return facts + '!!!';
}
