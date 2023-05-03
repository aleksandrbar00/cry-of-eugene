import {Player} from "../models/player";

export class StartLevel extends Phaser.Scene {

    constructor() {
        super("start-level");
    }

    create() {
        this.player = new Player(this, 100, 100);
    }

    update(time, delta) {
        this.player.update();
    }

}
