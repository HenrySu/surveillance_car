import * as pca9685 from "pca9685";
import PCA9685Driver = pca9685.Pca9685Driver;

export class Servo {
    private _angle: number;
    set angle(value: number) {
        // clap angle to [0,180] as servo only serves that range
        this._angle = this.clapAngle(value);
        this.pwm.setDutyCycle(this.channelNum, this.getDutyCycle(), 0);
    }

    constructor(private channelNum: number,
        private minDutyCyclePercentage: number,
        private maxDutyCyclePercentage: number,
        private defaultDutyCyclePercentage: number,
        private pwm: PCA9685Driver,
        private angleStep: number = 5) {
        this._angle = this.defaultDutyCyclePercentage;
    }

    clapAngle(value: number): number {
        return Math.max(Math.min(value, 180), 0);
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