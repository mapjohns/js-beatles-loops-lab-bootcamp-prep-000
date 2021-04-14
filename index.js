// add solution here
function theBeatlesPlay(musicians, instruments) {
  let newArray = []
  let i = 0
  for (i = 0; i<musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(facts) {
  let i = 0
  let newArray = []
  while (i < facts.length) {
    newArray.push(facts[i].concat("!!!"))
    i++
  }
  return newArray
}
