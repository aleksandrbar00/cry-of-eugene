import {Actor} from "./actor";

export class Player extends Actor {

    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        this.keyA = this.scene.input.keyboard.addKey('A');
        this.keyD = this.scene.input.keyboard.addKey('D');
        this.keyW = this.scene.input.keyboard.addKey('W');
        this.keyS = this.scene.input.keyboard.addKey('S');
        this.keyJ = this.scene.input.keyboard.addKey('J');

        this.getBody().setSize(40, 48);
        this.getBody().setOffset(25, 48);
        this.initAnimations();
    }

    update() {
        this.getBody().setVelocity(0);

        this.handlePlayerControlMoves();
    }

    handlePlayerControlMoves() {
        if (!this.keyW.isDown &&
            !this.keyJ.isDown &&
            !this.keyD.isDown &&
            !this.keyS.isDown &&
            !this.keyA.isDown) {
            this.anims.play("idle", true);
        }

        if (this.keyA.isDown && !this.keyJ.isDown) {
            this.getBody().velocity.x = -60;
            this.getBody().setOffset(70, 48);
            this.checkFlip();
            this.anims.play("walk", true);
        }

        if (this.keyD.isDown && !this.keyJ.isDown) {
            this.getBody().velocity.x = 60;
            this.getBody().setOffset(25, 48);
            this.checkFlip();
            this.anims.play("walk", true);
        }

        if (this.keyW.isDown && !this.keyJ.isDown) {
            this.getBody().velocity.y = -60;
            this.anims.play((this.keyD.isDown || this.keyA.isDown) ? "walk" : "idle", true);
        }

        if (this.keyS.isDown && !this.keyJ.isDown) {
            this.getBody().velocity.y = 60;
            this.anims.play((this.keyD.isDown || this.keyA.isDown) ? "walk" : "idle", true);
        }

        if (this.keyJ.isDown) {
            this.attack();
        }
    }

    initAnimations() {
        this.scene.anims.create({
            key: "idle",
            frames: this.scene.anims.generateFrameNames("player"),
        })

        this.scene.anims.create({
            key: "run",
            frames: this.scene.anims.generateFrameNames("player-run"),
        })

        this.scene.anims.create({
            key: "walk",
            frames: this.scene.anims.generateFrameNames("player-walk"),
        })

        this.scene.anims.create({
            key: "base-attack",
            frames: this.scene.anims.generateFrameNames("player-base-attack"),
        })
    }

    attack() {
       this.anims.play("base-attack", true);
    }

}
