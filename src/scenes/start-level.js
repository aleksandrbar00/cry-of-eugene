import {Player} from "../models/player";

export class StartLevel extends Phaser.Scene {

    constructor() {
        super("start-level");
    }

    create() {
        this.initMap();
        this.player = new Player(this, 400, 400);
        this.initChests();
        this.physics.add.collider(this.player, this.wallsLayer);
        this.cameras.main.startFollow(this.player);
        this.cameras.main.zoomTo(2);
    }

    createChestsAnimations() {
        this.anims.create({
            key: "chest-open",
            frames: this.anims.generateFrameNames("tiles_spr", {
                start: 595,
                end: 597
            }),
            frameRate: 12,
        })
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

    initChests() {
        const chestPoints = this.map.filterObjects('Chests', obj => obj.name === 'ChestPoint');

        this.chests = chestPoints.map(chestPoint =>
            this.physics.add.sprite(chestPoint.x, chestPoint.y, 'tiles_spr', 595).setScale(1.5),
        );

        this.createChestsAnimations();

        this.chests.forEach(chest => {
            this.physics.add.overlap(this.player, chest, (obj1, obj2) => {
                obj2.destroy();
            });
        });

    }

    showDebugWalls() {
        const debugGraphics = this.add.graphics().setAlpha(0.7);
        this.wallsLayer.renderDebug(debugGraphics, {
            tileColor: null,
            collidingTileColor: new Phaser.Display.Color(243, 234, 48, 255),
        });
    }

}
