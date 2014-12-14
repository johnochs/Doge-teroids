(function () {
	if (typeof Asteroids === "undefined") {
		window.Asteroids = {};
	}
	
	var GuardCat = Asteroids.GuardCat = function (options) {
		this.img = new Image();
		this.img.src = 'bengal_cat_2.png';
		this.game = options.game;
		this._counter = 0;
		this.truepos = options.truepos || [-100, 450]
		this.randx = (Math.random() - 0.5) * 100;
		this.randy = (Math.random() - 0.5) * 60;
	};
	
	GuardCat.prototype.draw = function (ctx) {
		if(this._counter > 20) {
			this._counter = 0;
			this.randx = (Math.random() - 0.5) * 100;
			this.randy = (Math.random() - 0.5) * 60;
		}
		

		ctx.drawImage(this.img, this.truepos[0] + this.randx, this.truepos[1] + this.randy, 300, 300);
		

		this._counter += 1;
	};
})();