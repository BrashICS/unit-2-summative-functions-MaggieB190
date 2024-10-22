/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/
document.getElementById("zeros").addEventListener("click", zeros);
document.getElementById("vertex").addEventListener("click", vertex);

/*** Functions ***/

// Round to the user's number of decimals
function round_user(value) {
    // Get the number of decimals from the "rounding" box
    let decimals = Number(document.getElementById("rounding").value);
    let number_rounded = Math.round(value * 10**decimals) / 10**decimals;
    return number_rounded
}


//ON YOUR MARK, GET SET, GO pls

//Part 1.1
function delta(a, b) {
    return a - b;
}

//Part 1.2
function slope(x1, y1, x2, y2) {
    let m = delta(y2, y1) / delta(x2, x1);
    return m;
}

//Part 1.3
function average(n1, n2) {
    return (n1 + n2) / 2;
}

//Part 1.5
function length(x1, y1, x2, y2) {
    let l_coordinates = Math.sqrt((delta(y2, y1) ** 2) + (delta(x2, x1) ** 2));
    return l_coordinates;
}

//Part 1.6



// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {

}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {

}

