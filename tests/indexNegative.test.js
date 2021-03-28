const { getCoefficient, printAnswer, manageSolve, findRoots } = require('../index.js')

// Implementation tests of methods

// manageSolve
 test('manageSolve_(undefined, 0, 0)_false', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="aIndex"></div><div class="bIndex"></div><div class="cIndex"></div>' +
        '<div class="quadratic-equation-solver__roots"></div>'
    //initialize value
    document.getElementsByClassName("aIndex")[0].value = undefined
    document.getElementsByClassName("bIndex")[0].value = 0
    document.getElementsByClassName("cIndex")[0].value = 0
      
    expect(manageSolve()).toBe(false)
    })

// getCoefficient
test('getCoefficient_(1, 2, undefined)_undefined', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="aIndex"></div><div class="bIndex"></div><div class="cIndex"></div>' +
        '<div class="quadratic-equation-solver__roots"></div>'
    //initialize value
    document.getElementsByClassName("aIndex")[0].value = 1
    document.getElementsByClassName("bIndex")[0].value = 2
    document.getElementsByClassName("cIndex")[0].value = undefined
      
    expect(getCoefficient()).toBe(undefined)
  })

// findRoots
  test('findRoots_(0, 2, 3)_(-1.5)', () => {
    expect(findRoots(0, 2, 3)).toBe(-1.5)
  })

  test('findRoots_(0, 0, 3)_(null)', () => {
    expect(findRoots(0, 0, 3)).toBe(null)
  })

  test('findRoots_(0, 0, 0)_(Infinity)', () => {
    expect(findRoots(0, 0, 0)).toBe(Infinity)
  })