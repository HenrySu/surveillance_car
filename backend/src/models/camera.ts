import * as i2cBus from "i2c-bus";
import * as pca9685 from "pca9685"
import PCA9685Driver = pca9685.Pca9685Driver;

export class Camera {
    private pwm: PCA9685Driver;

    constructor(i2cPin: number, private horizontalPin: number, private verticalPin: number) {
        this.pwm = new PCA9685Driver(
            {
                i2c: i2cBus.openSync(1),
                address: i2cPin,
                frequency: 50,
                debug: false
            }, function (err) {
                throw err;
            });
    }
    
    private getHorizontalDutyCycle(): number {
        return 0;
    }

    private getVerticalDutyCycle(): number {
        return 0;
    }

}