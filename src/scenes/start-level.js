import {Player} from "../models/player";

export class StartLevel extends Phaser.Scene {

    constructor() {
        super("start-level");
    }

    create() {
        this.initMap();
        this.player = new Player(this, 400, 400);
        this.physics.add.collider(this.player, this.wallsLayer);
    }

    update(time, delta) {
        this.player.update();
    }

    initMap() {
        this.map = this.make.tilemap({ key: "dungeon", tileWidth: 16, tileHeight: 16 });
        this.tileset = this.map.addTilesetImage('dungeon', 'tiles');

        this.groundLayer = this.map.createLayer('Ground', this.tileset, 0, 0);

        this.wallsLayer = this.map.createLayer('Walls', this.tileset, 0, 0);
        this.wallsLayer.setCollisionByProperty({ collides: true });

        this.physics.world.setBounds(0, 0, this.wallsLayer.width, this.wallsLayer.height);
        this.showDebugWalls();
    }

    showDebugWalls() {
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        this.wallsLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
        });
    }

}
