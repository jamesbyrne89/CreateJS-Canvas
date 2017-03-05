let drawingCanvas;
let oldPt;
let oldMdPt;
let mouseMoveFn;

const canvas = document.getElementById('stage');
const stage = new createjs.Stage(canvas);
stage.autoClear = false;
createjs.Touch.enable(stage);
stage.on('stagemousedown', mouseDownCallback);
stage.on('stagemouseup', mouseUpCallback);

canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight - 200;

const bgLayer = new createjs.Shape();
bgLayer.graphics.beginFill(bgColour).drawRect(0, 0, canvas.width, canvas.height);
stage.addChild(bgLayer);

let bgColour = '#FCFFF5';
let brushColour = '#004358';
let brushSize = 12;
let brushStyle = 'round';

let oldMidPt = oldPt = new createjs.Point (stage.moueX, stage.mouseY);
let mouseMoveFn = stage.on('stagemousemove', mouseMoveCallback);

const export = document.getElementById('export-button');

for (let i = document.getElementsByClassName('brush-colour').length - 1; i >= 0; i--){
	let item = document.getElementsByClassName('brush-colour') [i];
	item.onclick = function() {
			brushColour = document.querySelector('#colour-picker.fill').style.backgroundColor = this.style.backgroundColor;
	}
}};

const mouseMoveCallback = function() {
	var midPt = new createjs.Point(Math.floor((oldPt.x + stage.mouseX) /2), Math.floor((oldPt.y +stage.mouseY) /2));

	drawingCanvas.graphics.setStrokeStyle(brushSize, brushStyle).beginStroke(brushColour)
	.moveTo(midPt.x, midPt.y).curveTo(oldPt.x, oldPt.y, oldMidPt.x, oldMidPt.y);

	oldPt.x = midPt.x;
	oldMidPt.y = midPt.y;

	stage.update();
}

const exportToPng = function () {

}

export.addEventListener('click', exportToPng);

