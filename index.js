const {sqrt, pow, complex, add, multiply, floor} = require("./node_modules/mathjs");


function manageSolve() {

    let coefficients = getCoefficient()
    
    if (coefficients === undefined) {
        alert('Enter all coefficients')
        return false
    }

    let roots = findRoots(coefficients.a, coefficients.b, coefficients.c)

    printAnswer(roots.x1, roots.x2)

    return true
}

function findRoots(a, b, c) {
    //calc roots with discriminant formula
    //functions multiply,sqrt,add - can work with complex numbers
    return {
        x1: floor(multiply(add((-1 * b), sqrt(pow(b, 2) - 4 * a * c)), 1 / (2 * a)), 2),
        x2: floor(multiply(add((-1 * b), multiply(-1, sqrt(pow(b, 2) - 4 * a * c))), 1 / (2 * a)), 2)
    }
}

function printAnswer(x1, x2) {
    document.getElementsByClassName(
        "quadratic-equation-solver__roots")[0].textContent = "Roots: " + x1 + "; " + x2
    return {x1, x2}
}

function getCoefficient() {

    let coefficients = new Object()   

    coefficients.a = document.getElementsByClassName("aIndex")[0].value
    coefficients.b = document.getElementsByClassName("bIndex")[0].value
    coefficients.c = document.getElementsByClassName("cIndex")[0].value
    
    if(coefficients.a === ""  ||
       coefficients.b === ""  ||
       coefficients.c === "") 
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


function sum(a, b) {
  return a + b;
}

module.exports = {
    findRoots,
    getCoefficient,
    printAnswer,
    manageSolve,
    sum
}
