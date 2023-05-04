import playerIdleSheet from "../assets/character/base/Idle.png";
import playerWalkSheet from "../assets/character/base/Walk.png";
import playerRunSheet from "../assets/character/base/Run.png";
import playerBaseAttackSheet from "../assets/character/base/Attack_1.png";
import dungeonTile from "../assets/tiles/dungeon.png";

export class LoadingStartLevel extends Phaser.Scene {

    constructor() {
        super("loading-start-level");
    }

    preload () {
        this.load.image({
            key: 'tiles',
            url: dungeonTile,
        });
        this.load.spritesheet('tiles_spr', dungeonTile, {
            frameWidth: 16,
            frameHeight: 16,
        });
        this.load.tilemapTiledJSON("dungeon", "../src/assets/tiles/json/dungeon.tmj");
        this.load.spritesheet("player", playerIdleSheet, {
            frameWidth: 96,
            frameHeight: 96
        });
        this.load.spritesheet("player-run", playerRunSheet, {
            frameWidth: 96,
            frameHeight: 96
        });
        this.load.spritesheet("player-base-attack", playerBaseAttackSheet, {
            frameWidth: 96,
            frameHeight: 96
        });
        this.load.spritesheet("player-walk", playerWalkSheet, {
            frameWidth: 96,
            frameHeight: 96
        });
    }

    create () {
        this.scene.start("start-level");
    }

}
