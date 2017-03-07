import {
	ParentBox
} from './parentBox'


var w = document.body.clientWidth;
var h = document.body.clientHeight;
var parent1, parent2, ball;

LInit(10, 'mylegend', w, h, init);

function init() {
	LGlobal.stageScale = LStageScaleMode.SHOW_ALL;
	parent1 = new ParentBox();
	addChild(parent1)
	parent1.x = 60;
	parent1.y = 60;

	parent2 = new ParentBox();
	addChild(parent2);
	parent2.x = 170;
	parent2.y = 60;

	ball = new LSprite();
	parent1.addChild(ball);
	ball.graphics.drawArc(1, '#000000', [0, 0, 20, 0, 2 * Math.PI], true, '#000000');
	ball.addEventListener(LMouseEvent.MOUSE_DOWN, onMouseDown);
}

function onMouseDown(event) {
	if (ball.getParentByConstructor(ParentBox).objectIndex == parent1.objectIndex) {
		parent2.addChild(ball);
	} else {
		parent1.addChild(ball)
	}
}