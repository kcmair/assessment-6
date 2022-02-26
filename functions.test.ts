const {shuffleArray} = require('./utils')
const {bots} = require('./data')

describe('shuffleArray should', () => {
    test('be an array', () => {
        expect(Array.isArray(shuffleArray(bots))).toBe(true)
    })

    it('be the same length as the bots array', () => {
        expect(shuffleArray(bots).length).toBe(bots.length)
    })
})