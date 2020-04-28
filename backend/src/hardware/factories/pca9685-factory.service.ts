import { Injectable } from '@nestjs/common';
import * as i2cBus from "i2c-bus";
import * as pca9685 from "pca9685";
import PCA9685Driver = pca9685.Pca9685Driver;

@Injectable()
export class PCA9685FactoryService {
    createDriver(i2cPin: number): PCA9685Driver {
        return new PCA9685Driver(
            {
                i2c: i2cBus.openSync(1),
                address: i2cPin,
                frequency: 50,
                debug: false
            }, function (err) {
                throw err;
            });
    }
}
