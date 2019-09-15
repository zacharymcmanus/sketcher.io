const colorInput = document.getElementById('color');
const weight = document.getElementById('weight');
const clear = document.getElementById('clear');

const paths = [];
let currentPath = [];

function setup() {
  	createCanvas(window.innerWidth, window.innerHeight);
  	background(255);
}

function draw() {
	noFill();
	
	if(mouseIsPressed){
		const point = {
			x: mouseX,
			y: mouseY,
			color: colorInput.value,
			weight: weight.value
		};
		// add the point to 'currentPath' array
		currentPath.push(point);
	}
	
	// loop over all the paths and drawing all the points inside them
	paths.forEach(path => {
		beginShape();
		path.forEach(point => {
			stroke(point.color);
			strokeWeight(point.weight);
			vertex(point.x, point.y);
		});
		endShape();
	});
}

function mousePressed() {
	// clean up the 'currentPath' array
	currentPath = [];

	// push the path inside the 'paths' array
	paths.push(currentPath);
}

clear.addEventListener('click', () => {
	paths.splice(0);
	background(255);
});