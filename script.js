
const container = document.querySelector("section");

// setting the dimensions for the container
let params = {
    width: 500,
    ehight: 500
};

// `new` instantiation Two.js
const two = new Two(params);
// append to `container`
two.appendTo(container);

// shape to be moving
let shape = two.makeRectangle(250,250,100,100);

// PROPERTY: set fill of shape
shape.fill = "Cornsilk";
// METHOD: run method to remove stroke
shape.noStroke();

// rotate shape. Default is radians
shape.rotation = Math.PI * 0.25;

//New Shape
// shape to be moving
let shape2 = two.makeRectangle(250,250,50,50);

// PROPERTY: set fill of shape
shape2.fill = "black";
// METHOD: run method to remove stroke
shape2.noStroke();

// Bind to "Update" function
two.bind("update", () => {
  shape.rotation += 0.01;
});

// Draw to page
two.play();