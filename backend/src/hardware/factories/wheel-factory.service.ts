import { Injectable } from '@nestjs/common';
import { Wheel } from 'src/hardware/models';
import { WheelConfig } from '../configs';

@Injectable()
export class WheelFactoryService {
    createWheel(config: WheelConfig): Wheel {
        return new Wheel(config.forwardPin, config.backwardPin, config.pwmPin);
    }
}
