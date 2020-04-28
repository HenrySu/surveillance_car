import * as pca9685 from "pca9685";
import PCA9685Driver = pca9685.Pca9685Driver;

export class Servo {
    private _angle: number;
    set angle(value: number) {
        // clap angle to [0,180] as servo only serves that range
        this._angle = Math.max(Math.min(value, 180), 0);
        this.pwm.setDutyCycle(this.channelNum, this.getDutyCycle(), 0);
    }

    constructor(private channelNum: number,
        private pwm: PCA9685Driver,
        private angleStep: number = 5) {
        this._angle = 90;
    }

    increaseAngle() {
        this.angle = this.angle + this.angleStep;
    }

    decreaseAngle() {
        this.angle = this.angle - this.angleStep;
    }

    getDutyCycle(): number {
        return 0;
    }

}