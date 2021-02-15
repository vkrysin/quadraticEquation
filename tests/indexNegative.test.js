const { getCoefficient, printAnswer, manageSolve, findRoots } = require('../index.js')

describe('negative input (aa, bb, cc)', () => {
    //load necessary dom
    document.body.innerHTML = '<div class="aIndex"></div><div class="bIndex"></div><div class="cIndex"></div>' +
        '<div class="quadratic-equation-solver__roots"></div>'
    //initialize value
    document.getElementsByClassName("aIndex")[0].value = 'aa'
    document.getElementsByClassName("bIndex")[0].value = 'bb'
    document.getElementsByClassName("cIndex")[0].value = 'cc'

    test('getCoefficients return undefined', () => {

        expect(getCoefficient()).toBeUndefined()
    })
    test('managesolve return false', () => {
        expect(manageSolve()).toBeFalsy()
    })
})