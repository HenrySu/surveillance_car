import * as pca9685 from "pca9685";
import PCA9685Driver = pca9685.Pca9685Driver;

export class Servo {
    private _angleRadian: number;
    private static minAngle: number = 0;
    private static maxAngle: number = Math.PI;


    constructor(private channelNum: number,
        private minDutyCyclePercentage: number,
        private maxDutyCyclePercentage: number,
        private defaultAngle: number,
        private pwm: PCA9685Driver,
        private angleStep: number = 5) {
        this.updateAngle(this.defaultAngle);
    }

    updateAngle(newAngle: number) {
        this._angleRadian = this.clapAngle(newAngle);
        const anglePercentage = this.getAnglePercentage(this._angleRadian);
        const dutyCyclePercentage = this.getDutyCyclePercentage(anglePercentage);
        this.pwm.setDutyCycle(this.channelNum, dutyCyclePercentage, 0);
    }

    getDutyCyclePercentage(anglePercentage: number) {
        return anglePercentage * (this.maxDutyCyclePercentage - this.minDutyCyclePercentage) + this.minDutyCyclePercentage;
    }

    clapAngle(value: number): number {
        return Math.max(Math.min(value, Servo.maxAngle), Servo.minAngle);
    }

    getAnglePercentage(angle: number): number {
        return (angle - Servo.minAngle) / (Servo.maxAngle - Servo.minAngle);
    }

    //ratio value range : [-1, 1], - means move to opposite direction
    move(ratio: number) {
        this.updateAngle(this.angleStep * ratio + this._angleRadian);
    }

}