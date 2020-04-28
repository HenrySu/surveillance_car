import { Injectable } from '@nestjs/common';
import * as pca9685 from "pca9685";
import { ServoConfig } from '../configs';
import { Servo } from '../models';

@Injectable()
export class ServoFactoryService {
    createServo(config: ServoConfig, pwm: pca9685.Pca9685Driver): Servo {
        return new Servo(config.channelNum, pwm);
    }
}
