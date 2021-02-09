import {sqrt, pow, complex, add, multiply, floor} from "mathjs";

function solve() {

    let coefficients = getCoefficient()
     //short alias for coefficients
    let a,b,c

    try {
        a = Number(coefficients.a)
        b = Number(coefficients.b)
        c = Number(coefficients.c)   
    } catch (error) {
        alert("Enter all coefficients!")
        return
    }

    let roots = {
            //calc roots with discriminant formula
            //functions multiply,sqrt,add - can work with complex numbers
            x1: floor( multiply( add((-1 * b),sqrt(pow(b, 2) - 4 * a * c)),  1 / ( 2 * a)), 2),
            x2: floor( multiply( add((-1 * b), multiply(-1, sqrt(pow(b, 2) - 4 * a * c))),  1 / ( 2 * a)), 2)
        }

    document.getElementsByClassName(
        "quadratic-equation-solver__roots")[0].textContent = "Roots: " + roots.x1 + "; " + roots.x2
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

let buttonSolver = document.getElementsByClassName("quadratic-equation-solver__button")[0]
buttonSolver.addEventListener("click", () => solve())

