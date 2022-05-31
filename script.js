
const container = document.querySelector("section");

// setting the dimensions for the container
let params = {
    width: 500,
    height: 500
};

// `new` instantiation Two.js
const two = new Two(params);
// append to `container`
two.appendTo(container);

// 1st square to be moving
let shape = two.makeRectangle(250,250,450,450);

// PROPERTY: set fill of shape
shape.fill = "Cornsilk";
// METHOD: run method to remove stroke
shape.noStroke();

// rotate shape. Default is radians
shape.rotation = Math.PI * 0.25;

//2nd square to be moving
let shape2 = two.makeRectangle(250,250,400,400);

// PROPERTY: set fill of shape
shape2.fill = "grey";
// METHOD: run method to remove stroke
shape2.noStroke();

// rotate shape. Default is radians
shape2.rotation = Math.PI * 0.50;

// 3rd square to be moving
let shape3 = two.makeRectangle(250,250,350,350);

// PROPERTY: set fill of shape
shape3.fill = "yellow";
// METHOD: run method to remove stroke
shape3.noStroke();

// rotate shape. Default is radians
shape3.rotation = Math.PI * 0.25;

//4th square to be moving
let shape4 = two.makeRectangle(250,250,300,300);

// PROPERTY: set fill of shape
shape4.fill = "black";
// METHOD: run method to remove stroke
shape4.noStroke();

// rotate shape. Default is radians
shape4.rotation = Math.PI * 0.50;

// 5rd square to be moving
let shape5 = two.makeRectangle(250,250,250,250);

// PROPERTY: set fill of shape
shape5.fill = "blue";
// METHOD: run method to remove stroke
shape5.noStroke();

// rotate shape. Default is radians
shape5.rotation = Math.PI * 0.25;

//6th square to be moving
let shape6 = two.makeRectangle(250,250,200,200);

// PROPERTY: set fill of shape
shape6.fill = "grey";
// METHOD: run method to remove stroke
shape6.noStroke();

// rotate shape. Default is radians
shape6.rotation = Math.PI * 0.50;



//Note to self, New code to place above

// Bind to "Update" function
two.bind("update", () => {
  shape.rotation += 0.01,
  shape2.rotation += 0.01,
  shape3.rotation += 0.01,
  shape4.rotation += 0.01,
  shape5.rotation += 0.01,
  shape6.rotation += 0.01;
});

// Draw to page
two.play();