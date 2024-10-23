/**
 * Unit 2 Summative Task - Geometry Helper
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 **/ 

// Follow the rules
'use strict';

/*** Event Listeners ***/

// volume button is the id in html to decide when to listen, click is what to listen for, volume is the function done
document.getElementById("rect_prism_volume_button").addEventListener("click",rect_prism_volume);
document.getElementById("rect_prism_area_button").addEventListener("click",rect_prism_area);

document.getElementById("sphere_area_button").addEventListener("click", sphere_area);
document.getElementById("sphere_volume_button").addEventListener("click", sphere_volume);

document.getElementById("user_slope_points_button").addEventListener("click", user_slope);
document.getElementById("user_length_points_button").addEventListener("click", user_length);
document.getElementById("user_midpoint_button").addEventListener("click", midpoint);

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

//Part 1.7
function rect_prism_volume() {
    //have to tell where to get variables from and give it a label (let statement), then make it do the math, then output
    //the .value means it it takes what the user inputs and turns it into a value that can be used in math
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let rect_volume = round_user(length * width * height);
    document.getElementById("rect_prism_volume_answer").textContent = `The volume for the rectangular prism is: ${rect_volume}.`;
}

//Part 1.8
function rect_prism_area() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let rect_area = round_user(2 *((length * width) + (length * height) + (height * width)));
    document.getElementById("rect_prism_area_answer").textContent = `The surface area for the rectangular prism is: ${rect_area}.`;
}

//Part 1.9

//function sphere volume
function sphere_volume() {
    let radius = Number(document.getElementById("radius").value);
    let sphere_v = Number(4 / 3 *(Math.PI *(radius ** 3)));
    document.getElementById("sphere_volume_answer").textContent = `The volume of the sphere is: ${sphere_v}.`;
}

//function sphere area
function sphere_area() {
    let radius = Number(document.getElementById("radius").value); 
    let sphere_a = Number(4 * (Math.PI * (radius ** 2)));
    document.getElementById("sphere_area_answer").textContent = `The area of the sphere is: ${sphere_a}.`;
}

//1.11 

function user_slope() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let user_m = Number(round_user(delta(y2, y1) / delta(x2, x1)));
    document.getElementById("user_slope_points_answer").textContent = `The slope of the two points is: ${user_m}.`;
}

function user_length() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let user_length = round_user(Math.sqrt((delta(y2, y1) ** 2) + (delta(x2, x1) ** 2)));
    document.getElementById("user_length_points_answer").textContent = `The length between the two points is: ${user_length}.`;
}

function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y1 = Number(document.getElementById("y1").value);
    let y2 = Number(document.getElementById("y2").value);
    let user_mid_x = Number(average(x1, x2));
    let user_mid_y = Number(average(y1, y2));
    document.getElementById("user_midpoint_answer").textContent = `The midpoint of the two points is: (${user_mid_x}, ${user_mid_y}).`; 
}


// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    let y = Number((a * (x ** 2)) + (b * x) + c);
    return y;
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
//when y=o then find x's

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a_vertex = Number(document.getElementById("a").value);
    let b_vertex = Number(document.getElementById("b").value);
    let c_vertex = Number(document.getElementById("c").value);
    let x_vertex = Number(round_user((-b_vertex) / (2 * a_vertex)));
    let y_vertex = round_user(y_quad(a_vertex, b_vertex, c_vertex, x_vertex));
    console.log(`(${x_vertex}, ${y_vertex})`);
    document.getElementById("quadratic_output").textContent = `The vertex of this function is: (${x_vertex}, ${y_vertex}).`; 
}

