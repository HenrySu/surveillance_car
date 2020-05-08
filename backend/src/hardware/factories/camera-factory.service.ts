import { Injectable } from '@nestjs/common';
import { Camera } from 'src/hardware/models';
import { CameraConfig } from '../configs';
import { PCA9685FactoryService } from './pca9685-factory.service';
import { ServoFactoryService } from './servo-factory.service';

@Injectable()
export class CameraFactoryService {

    constructor(private pca9685Factory: PCA9685FactoryService,
        private servoFactory: ServoFactoryService) { }

    createCamera(config: CameraConfig): Camera {
        const pwm = this.pca9685Factory.createDriver(config.i2cAddress);
        const horizontalServo = this.servoFactory.createServo(config.horizontalServo, pwm);
        const verticalServo = this.servoFactory.createServo(config.verticalServo, pwm);
        return new Camera(horizontalServo, verticalServo);
    }
}
