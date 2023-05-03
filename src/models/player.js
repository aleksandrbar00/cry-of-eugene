import {Actor} from "./actor";

export class Player extends Actor {

    constructor(scene, x, y) {
        super(scene, x, y, 'player');

        this.keyA = this.scene.input.keyboard.addKey('A');
        this.keyD = this.scene.input.keyboard.addKey('D');
        this.keyJ = this.scene.input.keyboard.addKey('J');

        this.getBody().setSize(96, 96);
        this.getBody().setOffset(0, 0);
        this.initAnimations();
    }

    update() {
        if (this.keyA.isDown && !this.keyJ.isDown) {
            this.getBody().velocity.x = -60;
            this.getBody().offset.set(96, 0);
            this.checkFlip();
            this.anims.play("walk", true);
        }else if (this.keyD.isDown && !this.keyJ.isDown) {
            this.getBody().velocity.x = 60;
            this.getBody().offset.set(0, 0);
            this.checkFlip();
            this.anims.play("walk", true);
        }else if (this.keyJ.isDown) {
            this.attack();
        }else {
            this.body.velocity.x = 0;
            this.anims.play("idle", true);
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
