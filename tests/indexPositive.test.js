const { getCoefficient, printAnswer, manageSolve, findRoots} = require('../index.js')


// Implementation tests of methods

// manageSolve
 test('manageSolve_(1, 2, 3)_true', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="aIndex"></div><div class="bIndex"></div><div class="cIndex"></div>' +
        '<div class="quadratic-equation-solver__roots"></div>'
    //initialize value
    document.getElementsByClassName("aIndex")[0].value = '1'
    document.getElementsByClassName("bIndex")[0].value = '2'
    document.getElementsByClassName("cIndex")[0].value = '3'
      
    expect(manageSolve()).toBe(true)
    })
// getCoefficient
  test('getCoefficient_(1, 2, 3)_(1, 2, 3)', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="aIndex"></div><div class="bIndex"></div><div class="cIndex"></div>' +
        '<div class="quadratic-equation-solver__roots"></div>'
    //initialize value
    document.getElementsByClassName("aIndex")[0].value = 1
    document.getElementsByClassName("bIndex")[0].value = 2
    document.getElementsByClassName("cIndex")[0].value = 3
      
    expect(getCoefficient()).toEqual({
      "a": 1,
      "b": 2,
      "c": 3
    })
  })

// printAnswer
  test('printAnswer_Infinity_Roots: Infinity', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="quadratic-equation-solver__roots"></div>'
    
    printAnswer(Infinity)

    expect(document.
      getElementsByClassName("quadratic-equation-solver__roots")[0].textContent).toBe("Roots: Infinity")
  })

  test('printAnswer_null_Roots: no', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="quadratic-equation-solver__roots"></div>'
    
    printAnswer(null)

    expect(document.
      getElementsByClassName("quadratic-equation-solver__roots")[0].textContent).toBe("Roots: no")
  })  
  test('printAnswer_32_Roots: 32', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="quadratic-equation-solver__roots"></div>'
    
    printAnswer(32)

    expect(document.
      getElementsByClassName("quadratic-equation-solver__roots")[0].textContent).toBe("Roots: x = 32")
  })   

  test('printAnswer_(1,2)_Roots: 1; 2', () => {
   //load necessary dom
    document.body.innerHTML = '<div class="quadratic-equation-solver__roots"></div>'
    
    printAnswer({
      "x1": 1,
      "x2": 2
    })

    expect(document.
      getElementsByClassName("quadratic-equation-solver__roots")[0].textContent).toBe("Roots: 1; 2")
  })  

  // findRoots
  test('findRoots_(1, 2, 3)_(-1 - i*sqrt(2), -1 + i*sqrt(2))', () => {
    expect(findRoots(1, 2, 3)).toHaveProperty('x2.re', -1)
    expect(findRoots(1, 2, 3)).toHaveProperty('x1.re', -1)

    expect(findRoots(1, 2, 3)).toHaveProperty('x2.im', -1.42)
    expect(findRoots(1, 2, 3)).toHaveProperty('x1.im', 1.41)
  })

    test('findRoots_(1, 4, 3)_(-1, -3)', () => {
    expect(findRoots(1, 4, 3)).toHaveProperty('x2', -3)
    expect(findRoots(1, 4, 3)).toHaveProperty('x1', -1)
  })