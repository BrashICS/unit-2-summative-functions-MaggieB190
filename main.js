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

document.getElementById("cube_volume_button").addEventListener("click", cube_volume);
document.getElementById("cube_area_button").addEventListener("click", cube_area);

document.getElementById("rect_prism_volume_button").addEventListener("click", rect_prism_volume);
document.getElementById("rect_prism_area_button").addEventListener("click", rect_prism_area);

document.getElementById("triangle_prism_volume_button").addEventListener("click", triangle_prism_volume);
document.getElementById("triangle_prism_area_button").addEventListener("click", triangle_prism_area);

document.getElementById("pyramid_volume_button").addEventListener("click", pyramid_volume);
document.getElementById("pyramid_area_button").addEventListener("click", pyramid_area);

document.getElementById("sphere_area_button").addEventListener("click", sphere_area);
document.getElementById("sphere_volume_button").addEventListener("click", sphere_volume);

document.getElementById("cylinder_area_button").addEventListener("click", cylinder_area);
document.getElementById("cylinder_volume_button").addEventListener("click", cylinder_volume);

document.getElementById("user_slope_points_button").addEventListener("click", user_slope);
document.getElementById("user_length_points_button").addEventListener("click", user_length);
document.getElementById("user_midpoint_button").addEventListener("click", midpoint);

document.getElementById("zeros_button").addEventListener("click", zeros);
document.getElementById("vertex_button").addEventListener("click", vertex);
document.getElementById("aos_button").addEventListener("click", aos);
document.getElementById("y_intercept_button").addEventListener("click", y_intercept);

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

//Cube volume
function cube_volume() {
    let base_cube =  Number(document.getElementById("base_cube").value);
    let cube_v = round_user(base_cube ** 3);
    document.getElementById("cube_volume_answer").textContent = `The volume for the cube is: ${cube_v}`;
}

//cube area
function cube_area() {
    let base_cube = Number(document.getElementById("base_cube").value);
    let cube_a = round_user(6 *(base_cube ** 2));
    document.getElementById("cube_area_answer").textContent = `The surface area for the cube is: ${cube_a}`;
}

//Part 1.7
function rect_prism_volume() {
    //have to tell where to get variables from and give it a label (let statement), then make it do the math, then output
    //the .value means it it takes what the user inputs and turns it into a value that can be used in math
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let rect_volume = round_user(length * width * height);
    document.getElementById("rect_prism_volume_answer").textContent = `The volume for the rectangular prism is: ${rect_volume}`;
}

//Part 1.8
function rect_prism_area() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let rect_area = round_user(2 *((length * width) + (length * height) + (height * width)));
    document.getElementById("rect_prism_area_answer").textContent = `The surface area for the rectangular prism is: ${rect_area}`;
}

//Square Pyramid volume
function pyramid_volume() {
    let base_pyramid = Number(document.getElementById("base_pyramid").value);
    let height_pyramid = Number(document.getElementById("height_pyramid").value);
    let pyramid_v = round_user(1 / 3 *(base_pyramid **2 *(height_pyramid)));
    document.getElementById("pyramid_volume_answer").textContent = `The volume for the square-based pyramid is: ${pyramid_v}`;
}

//triangular prism volume
function triangle_prism_volume() {
    let length_trig = Number(document.getElementById("length_trig").value);
    let base_trig = Number(document.getElementById("base_trig").value);
    let height_trig = Number(document.getElementById("height_trig").value);
    let triangle_v = round_user((length_trig * base_trig * height_trig) / 2);
    document.getElementById("triangle_prism_volume_answer").textContent = `The volume for the triangular prism is: ${triangle_v}`;
}

//triangular prism area
function triangle_prism_area() {
    let length_trig = Number(document.getElementById("length_trig").value);
    let base_trig = Number(document.getElementById("base_trig").value);
    let height_trig = Number(document.getElementById("height_trig").value);
    let triangle_a = round_user((base_trig * height_trig) + (base_trig * length_trig) + (length_trig * height_trig));
    document.getElementById("triangle_prism_area_answer").textContent = `The surface area for the triangular prism is: ${triangle_a}`;
}

//Square Pyramid area
function pyramid_area() {
    let base_pyramid = Number(document.getElementById("base_pyramid").value);
    let height_pyramid = Number(document.getElementById("height_pyramid").value);
    let pyramid_a = round_user(2 *(height_pyramid * base_pyramid *(base_pyramid ** 2)));
    document.getElementById("pyramid_area_answer").textContent = `The surface area for the square-based pyramid is: ${pyramid_a}`;
}

//cylinder volume
function cylinder_volume() {
    let radius_cylinder = Number(document.getElementById("radius_cylinder").value);
    let height_cylinder = Number(document.getElementById("height_cylinder").value);
    let cylinder_v = round_user(height_cylinder *(Math.PI *(radius_cylinder ** 2)));
    document.getElementById("cylinder_volume_answer").textContent = `The volume of the cylinder is: ${cylinder_v}`;
}

//cylinder area
function cylinder_area() {
    let radius_cylinder = Number(document.getElementById("radius_cylinder").value);
    let height_cylinder = Number(document.getElementById("height_cylinder").value);
    let cylinder_a = round_user((2 *(Math.PI *(radius_cylinder * height_cylinder))) + (2 *(Math.PI *(radius_cylinder ** 2))));
    document.getElementById("cylinder_area_answer").textContent = `The surface area of the cylinder is: ${cylinder_a}`;
}

//Part 1.9

//function sphere volume
function sphere_volume() {
    let radius = Number(document.getElementById("radius").value);
    let sphere_v = Number(round_user(4 / 3 *(Math.PI *(radius ** 3))));
    document.getElementById("sphere_volume_answer").textContent = `The volume of the sphere is: ${sphere_v}`;
}

//function sphere area
function sphere_area() {
    let radius = Number(document.getElementById("radius").value); 
    let sphere_a = Number(round_user(4 * (Math.PI * (radius ** 2))));
    document.getElementById("sphere_area_answer").textContent = `The area of the sphere is: ${sphere_a}`;
}

//1.11 

function user_slope() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let user_m = Number(round_user(slope(x1, y1, x2, y2)));
    document.getElementById("user_slope_points_answer").textContent = `The slope of the two points is: ${user_m}`;
}

function user_length() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let user_length = Number(round_user(length(x1, y1, x2, y2)));
    document.getElementById("user_length_points_answer").textContent = `The length between the two points is: ${user_length}`;
}

function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y1 = Number(document.getElementById("y1").value);
    let y2 = Number(document.getElementById("y2").value);
    let user_mid_x = Number(round_user(average(x1, x2)));
    let user_mid_y = Number(round_user(average(y1, y2)));
    document.getElementById("user_midpoint_answer").textContent = `The midpoint of the two points is: (${user_mid_x}, ${user_mid_y})`; 
}


// Calculate the y-value of a parabola from standand form
function y_quad(a, b, c, x) {
    let y = Number((a * (x ** 2)) + (b * x) + c);
    return y;
}

// Determine the zeros of a quadratic using user-inputs for a, b, and c
function zeros() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x1 = round_user(((-b) +(Math.sqrt((b ** 2) - (4 * a * c))))/ (2 * a));
    let x2 = round_user(((-b) -(Math.sqrt((b ** 2) - (4 * a * c))))/ (2 * a));
    console.log(`(${x1}, 0), (${x2}, 0)`);
    document.getElementById("quadratic_output_zeros").textContent = `The zeros of this parabola are: (${x1}, 0) and (${x2}, 0)`; 
}

// Determine the vertex of a quadratic using user-inputs for a, b, and c
function vertex() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = Number(document.getElementById("c").value);
    let x = Number(round_user((-b) / (2 * a)));
    let y = round_user(y_quad(a, b, c, x));
    console.log(`(${x}, ${y})`);
    document.getElementById("quadratic_output_vertex").textContent = `The vertex of this parabola is: (${x}, ${y})`; 
}

//find axis of symmetry
function aos() {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let x = Number(round_user((-b) / (2 * a)));
    document.getElementById("quadratic_output_aos").textContent = `The axis of symmetry of this parabola is: ${x}`; 
}

//find y-intercept
function y_intercept() {
        let c = Number(document.getElementById("c").value);
        document.getElementById("quadratic_output_y_intercept").textContent = ` The y-intercept of this parabola is: (0, ${c})`;
}