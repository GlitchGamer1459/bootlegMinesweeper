function create() {
	this.sys.canvas.id = "gameCanvas";
	this.add.text(275, 250, "Shit Crossy Roads");
}

const config = {
	type: Phaser.AUTO,
	width: 700,
	height: 500,
	backgroundColor: "#5f2a55",
	scene: {
		create
	}
};

const game = new Phaser.Game(config);
