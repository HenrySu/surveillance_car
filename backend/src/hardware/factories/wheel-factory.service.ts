import { Injectable } from '@nestjs/common';
import { Wheel } from 'src/models';

@Injectable()
export class WheelFactoryService {
    createWheel(): Wheel {
        return new Wheel();
    }
}
