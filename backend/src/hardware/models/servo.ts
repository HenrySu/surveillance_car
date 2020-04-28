import * as pca9685 from "pca9685";
import PCA9685Driver = pca9685.Pca9685Driver;

export class Servo {
    private _angle: number;
    set angle(value: number) {
        // clap angle to [0,180] as servo only serves that range
        this._angle = Math.max(Math.min(value, 180), 0);;
    }

    constructor(channelNum: number,
        pwm: PCA9685Driver) {
        this._angle = 90;
    }
}