function forLoop(array){
for (var i = 1; i < 25; 1++) {
  if (i===0) {array.push(I am ${i} strange loop.)
    array.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`)
}

describe('forLoop(array)', () => {
    it('adds `"I am ${i} strange loop${i === 0 ? \'\' : \'s\'}."` to an array 25 times', () => {
      const [array, t] = makeArray()
      const strangeArray = forLoop(array)
      const testArray = strangeArray.slice(array.length)

      let first = "I am 1 strange loop."
      let rest = "I am 24 strange loops."
        
      expect(strangeArray[11]).to.equal(first)
      expect(strangeArray[34]).to.equal(rest)
      expect(strangeArray.length).to.equal(t + 25)
    })
  })