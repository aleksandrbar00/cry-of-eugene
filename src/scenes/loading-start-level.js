import playerIdleSheet from "../assets/character/base/Idle.png";
import playerWalkSheet from "../assets/character/base/Walk.png";
import playerRunSheet from "../assets/character/base/Run.png";
import playerBaseAttackSheet from "../assets/character/base/Attack_1.png";

export class LoadingStartLevel extends Phaser.Scene {

    constructor() {
        super("loading-start-level");
    }

    preload () {
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
