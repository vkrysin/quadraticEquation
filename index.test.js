const { getCoefficient, printAnswer, manageSolve, sum, findRoots} = require('./index.js')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('(1,5,4)={-1,-4}', () => {
  test('check findRoots', () => {
    const a = document.getElementsByClassName("aIndex")[0] //вот так можно в дум валью прокинуть
    const roots = findRoots(1, 5, 4)
    
    expect(findRoots(1,5,4)).toEqual({
      x1: -1,
      x2: -4
    })
  })
})