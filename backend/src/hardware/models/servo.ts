import * as pca9685 from "pca9685";
import PCA9685Driver = pca9685.Pca9685Driver;

export class Servo {
    constructor(channelNum: number,
        pwm: PCA9685Driver) { }
}