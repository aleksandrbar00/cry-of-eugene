import Phaser from 'phaser';
import logoImg from './assets/logo.jpg';
import {StartLevel} from "./scenes/start-level";
import {LoadingStartLevel} from "./scenes/loading-start-level";

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('logo', logoImg);
    }

    create ()
    {
        const logo = this.add.image(400, 150, 'logo').setScale(0.1, 0.1);

        this.text = this.add.text(320, 200, "Cry Of Eugene", {
            fontSize: 24,
            align: "center"
        });

        this.tweens.add({
            targets: logo,
            y: 450,
            duration: 4000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        })

        this.tweens.add({
            targets: this.text,
            y: 600,
            duration: 4000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        })

        setTimeout(() => {
            this.scene.start("loading-start-level");
        }, 3000)
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'cry-of-eugene',
    width: 800,
    height: 800,
    physics: {
        default: 'arcade',
    },
    scene: [MyGame, LoadingStartLevel, StartLevel]
};

new Phaser.Game(config);
