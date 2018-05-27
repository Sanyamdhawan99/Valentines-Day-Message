var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext("2d");

var img = new Image();
img.src = "hearts.png";

var heartNumber = 30;
var hearts = [];
for(var i = 0; i < heartNumber; i++) {
	var x = Math.floor(Math.random() * canvas.width);
	var y = Math.floor(Math.random() * canvas.height);
	hearts[i] = new heart(x,y);
}

function heart(x , y) {
	this.x = x;
	this.y = y;

	this.show = function() {
		context.drawImage(img, this.x, this.y, 25, 25);
	}
	this.fall = function() {
		var dir = Math.floor(Math.random() * 3);
		if(dir == 0) {
			this.x = this.x;
		}
		if(dir == 1) {
			this.x = this.x - 0.25;
		}
		if(dir == 2) {
			this.x = this.x + 0.25;
		}
		this.y = this.y + 1;
		if(this.y > canvas.height) {
			this.y = 0;
		}
	}
}


function draw() {
	context.fillStyle = "black";
	context.fillRect(0, 0 , canvas.width, canvas.height);
	for(var i = 0; i < heartNumber; i++) {
		hearts[i].show();
		hearts[i].fall();
	}

}

function update() {
	draw();
	window.requestAnimationFrame(update);
}

// program starts from here
update();