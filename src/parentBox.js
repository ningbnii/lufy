class ParentBox extends LSprite {
	constructor() {
		super();
		var self = this;
		self.graphics.drawRect(1, '#000000', [-50, -50, 100, 100]);
	}
}

export {
	ParentBox
}