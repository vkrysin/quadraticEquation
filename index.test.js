const { before } = require('lodash');
const { getCoefficient, printAnswer, manageSolve, sum, findRoots} = require('./index.js')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe('(1,5,4)={-1,-4}', () => {
  //load necessary dom
  document.body.innerHTML = '<div class="aIndex"></div><div class="bIndex"></div><div class="cIndex"></div>' +
                            '<div class="quadratic-equation-solver__roots"></div>'
  //initialize value
  document.getElementsByClassName("aIndex")[0].value = 1
  document.getElementsByClassName("bIndex")[0].value = 5
  document.getElementsByClassName("cIndex")[0].value = 4
  test('find right roots', () => {
    const roots = findRoots(1, 5, 4)
    
    expect(findRoots(1,5,4)).toEqual({
      x1: -1,
      x2: -4
    })
  })
  test('get right coefficiens', () => {

    expect(getCoefficient()).toEqual({
      a: 1,
      b: 5,
      c: 4
    })
  })
  test('solve Manager return true', () => {
    expect(manageSolve()).toBeTruthy()
  })
  test('print Answer get right value', () => {
    expect(printAnswer(-1, -4)).toEqual({
      x1: -1,
      x2: -4
    })
  })
})
