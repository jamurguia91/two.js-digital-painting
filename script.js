
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



//Note to self, New code to place above

// Bind to "Update" function
two.bind("update", () => {
  shape.rotation += 0.01,
  shape2.rotation += 0.01,
  shape3.rotation += 0.01;
});

// Draw to page
two.play();