
let oldPt;
var oldMidPt;
let mouseMoveFn;
let bgColour = '#FCFFF5';
let brushColour = '#004358';
let brushSize = 12;
let brushStyle = 'round';
const exportBtn = document.getElementById('export-button');

function init() {
const canvas = document.getElementById('stage');
const stage = new createjs.Stage(canvas);

const bgLayer = new createjs.Shape();
bgLayer.graphics.beginFill(bgColour).drawRect(0, 0, canvas.width, canvas.height);
stage.addChild(bgLayer);


const drawingCanvas = new createjs.Shape();
stage.addChild(drawingCanvas);
stage.update();

const mouseDownCallback = function () {
oldMidPt = oldPt = new createjs.Point (stage.mouseX, stage.mouseY);
mouseMoveFn = stage.on('stagemousemove', mouseMoveCallback);
};

const mouseUpCallback = function () {
	stage.off('stagemousemove', mouseMoveFn);
}

const mouseMoveCallback = function() {
	var midPt = new createjs.Point(Math.floor((oldPt.x + stage.mouseX) /2), Math.floor((oldPt.y + stage.mouseY) /2));
	drawingCanvas.graphics.setStrokeStyle(brushSize,
		brushStyle).beginStroke(brushColour).moveTo(midPt.x, midPt.y).curveTo(oldPt.x,
		oldPt.y, oldMidPt.x, oldMidPt.y);

		oldPt.x = stage.mouseX;
		oldPt.y = stage.mouseY;

	oldPt.x = midPt.x;
	oldMidPt.y = midPt.y;

	stage.update();
};


stage.autoClear = false;
createjs.Touch.enable(stage);
stage.on('stagemousedown', mouseDownCallback);
stage.on('stagemouseup', mouseUpCallback);

canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 200;





for (let i = document.getElementsByClassName('brush-colour').length - 1; i >= 0; i--){
	let item = document.getElementsByClassName('brush-colour') [i];
	item.onclick = function() {
			brushColour = document.querySelector('#colour-picker.fill').style.backgroundColor = this.style.backgroundColor;
	}
};



const exportToPng = function () {

}
exportBtn.addEventListener('click', exportToPng);
};

init();

