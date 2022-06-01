
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

//pre square to be moving
let preshape = two.makeRectangle(250,250,475,475);

// PROPERTY: set fill of shape
preshape.fill = "#1e1e1e";
// METHOD: run method to remove stroke
preshape.noStroke();

// rotate shape. Default is radians
preshape.rotation = Math.PI * 0.50;

// 1st square to be moving
let shape = two.makeRectangle(250,250,450,450);

// PROPERTY: set fill of shape
shape.fill = '#1e1e1e';
// METHOD: run method to remove stroke
shape.noStroke();

// rotate shape. Default is radians
shape.rotation = Math.PI * 0.25;

//2nd square to be moving
let shape2 = two.makeRectangle(250,250,400,400);

// PROPERTY: set fill of shape
shape2.fill = "hsl(0, 100%, 25%, 0.45)";
// METHOD: run method to remove stroke
shape2.noStroke();

// rotate shape. Default is radians
shape2.rotation = Math.PI * 0.50;

// 3rd square to be moving
let shape3 = two.makeRectangle(250,250,350,350);

// PROPERTY: set fill of shape
shape3.fill = '#1e1e1e';
// METHOD: run method to remove stroke
shape3.noStroke();

// rotate shape. Default is radians
shape3.rotation = Math.PI * 0.25;

//4th square to be moving
let shape4 = two.makeRectangle(250,250,300,300);

// PROPERTY: set fill of shape
shape4.fill = "hsl(0, 100%, 25%, 0.55)";
// METHOD: run method to remove stroke
shape4.noStroke();

// rotate shape. Default is radians
shape4.rotation = Math.PI * 0.50;

// 5rd square to be moving
let shape5 = two.makeRectangle(250,250,250,250);

// PROPERTY: set fill of shape
shape5.fill = "#996600";
// METHOD: run method to remove stroke
shape5.noStroke();

// rotate shape. Default is radians
shape5.rotation = Math.PI * 0.25;

//6th square to be moving
let shape6 = two.makeRectangle(250,250,200,200);

// PROPERTY: set fill of shape
shape6.fill = "hsl(0, 100%, 25%, 0.75)";
// METHOD: run method to remove stroke
shape6.noStroke();

// rotate shape. Default is radians
shape6.rotation = Math.PI * 0.50;

// //playing with other shape(s), Circle
// let randomShape = two.makeCircle(250,250,100,0);
// // PROPERTY: set fill of shape
// randomShape.fill = "maroon";
// // METHOD: run method to remove stroke
// randomShape.noStroke();

//7th square to be moving
let shape7 = two.makeRectangle(250,250,150,150);

// PROPERTY: set fill of shape
shape7.fill = '#1e1e1e';;
// METHOD: run method to remove stroke
shape7.noStroke();

// rotate shape. Default is radians
shape7.rotation = Math.PI * 0.25;

//8th square to be moving
let shape8 = two.makeRectangle(250,250,100,100);

// PROPERTY: set fill of shape
shape8.fill = "hsl(0, 100%, 25%, 0.85)";
// METHOD: run method to remove stroke
shape8.noStroke();

// rotate shape. Default is radians
shape8.rotation = Math.PI * 0.50;

//9th square to be moving
let shape9 = two.makeRectangle(250,250,50,50);

// PROPERTY: set fill of shape
shape9.fill = '#1e1e1e';
// METHOD: run method to remove stroke
shape9.noStroke();

// rotate shape. Default is radians
shape9.rotation = Math.PI * 0.25;

//10th square to be moving
let shape10 = two.makeRectangle(250,250,25,25);

// PROPERTY: set fill of shape
shape10.fill = "#996600";
// METHOD: run method to remove stroke
shape10.noStroke();

// rotate shape. Default is radians
shape8.rotation = Math.PI * 0.50;

//11th square to be moving
let shape11 = two.makeRectangle(250,250,10,10);

// PROPERTY: set fill of shape
shape11.fill = "#1e1e1e";
// METHOD: run method to remove stroke
shape11.noStroke();

// rotate shape. Default is radians
shape11.rotation = Math.PI * 0.25;

// //playing with other shape(s), Circle
// let randomShape2 = two.makeCircle(250,250,75,0);
// // PROPERTY: set fill of shape
// randomShape2.fill = "maroon";
// // METHOD: run method to remove stroke
// randomShape2.noStroke();



//Note to self, New code to place above

// Bind to "Update" function
two.bind("update", () => {
  preshape.rotation += 0.01,
  shape.rotation += 0.01,
  shape2.rotation += 0.01,
  shape3.rotation += 0.01,
  shape4.rotation += 0.01,
  shape5.rotation += 0.01,
  shape6.rotation += 0.01,
  shape7.rotation += 0.01,
  shape8.rotation += 0.01,
  shape9.rotation += 0.01,
  shape10.rotation += 0.01,
  shape11.rotation += 0.01;
});

// Draw to page
two.play();