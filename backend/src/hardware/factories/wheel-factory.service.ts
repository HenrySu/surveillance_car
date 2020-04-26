import { Injectable } from '@nestjs/common';
import { Wheel } from 'src/models';
import { WheelConfig } from '../models';

@Injectable()
export class WheelFactoryService {
    createWheel(config: WheelConfig): Wheel {
        return new Wheel(config.forwardPin, config.backwardPin, config.pwmPin);
    }
}
