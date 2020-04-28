import * as i2cBus from "i2c-bus";
import * as pca9685 from "pca9685"
import PCA9685Driver = pca9685.Pca9685Driver;
import { Servo } from "./servo";
import { ServoConfig } from "../configs";

export class Camera {
    private pwm: PCA9685Driver;
    horizontalServo: Servo;
    vecticalServo: Servo;

    constructor(i2cPin: number, horizontalServoConfig: ServoConfig, verticalServoConfig: ServoConfig) {
        const pwm = new PCA9685Driver(
            {
                i2c: i2cBus.openSync(1),
                address: i2cPin,
                frequency: 50,
                debug: false
            }, function (err) {
                throw err;
            });

        this.horizontalServo = new Servo(horizontalServoConfig.channelNum, pwm);
        this.vecticalServo = new Servo(verticalServoConfig.channelNum, pwm);
    }
}