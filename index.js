// add solution here

function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty;
}

let i = 0;

function johnLennonFacts(facts) {
  var newFacts = [];
  while (newFacts.length < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i += 1;
  }
  return newFacts;
}