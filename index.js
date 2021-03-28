const { isNumber } = require("lodash");
const {sqrt, pow, complex, add, multiply, floor} = require("./node_modules/mathjs");


function manageSolve() {

    let coefficients = getCoefficient()
    
    if (coefficients === undefined) {
        alert('Enter all coefficients')
        return false
    }

    let roots = findRoots(coefficients.a, coefficients.b, coefficients.c)

    printAnswer(roots)

    return true
}

function findRoots(a, b, c) {
    if ( a == 0 ) {
        if ( b == 0) {
            if ( c == 0) {
                return Infinity
            } else {
                return null
            }
        }
        else {
            return c / b
        }
    }
    else {
        //calc roots with discriminant formula
        //functions multiply,sqrt,add - can work with complex numbers
        return {
            x1: floor(multiply(add((-1 * b), sqrt(pow(b, 2) - 4 * a * c)), 1 / (2 * a)), 2),
            x2: floor(multiply(add((-1 * b), multiply(-1, sqrt(pow(b, 2) - 4 * a * c))), 1 / (2 * a)), 2)
        }
    }
}

function printAnswer(roots) {
    let answer
    if ( roots === Infinity ) {
        answer = "Infinity"
    }
    else if ( roots === null) {
        answer = "no"
    }
    else if ( isNumber(roots) ) {
        answer = `x = ${roots}`
    }
    else if ( typeof roots.x1 !== 'undefined') {
        answer = `${roots.x1}` + "; " + `${roots.x2}`
    }
    document.getElementsByClassName(
        "quadratic-equation-solver__roots")[0].textContent = `Roots: ${answer}`
}

function getCoefficient() {

    let coefficients = new Object()   

    coefficients.a = document.getElementsByClassName("aIndex")[0].value
    coefficients.b = document.getElementsByClassName("bIndex")[0].value
    coefficients.c = document.getElementsByClassName("cIndex")[0].value
    
    if(coefficients.a === ""  ||
       coefficients.b === ""  ||
       coefficients.c === ""  ||
       
       isNaN(coefficients.a) ||
       isNaN(coefficients.b) ||
       isNaN(coefficients.c)) 
       {
            return
       }        

    return coefficients
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Not part of module.exports but still appearing in terminal, why?');
    let buttonSolver = document.getElementsByClassName("quadratic-equation-solver__button")[0]
    buttonSolver.addEventListener("click", () => manageSolve())
})

module.exports = {
    findRoots,
    getCoefficient,
    printAnswer,
    manageSolve
}
