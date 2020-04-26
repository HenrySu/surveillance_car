import { Injectable } from '@nestjs/common';
import { Car } from 'src/models';
import { CarConfig } from '../models';
import { WheelFactoryService } from './wheel-factory.service';

@Injectable()
export class CarFactoryService {
    constructor(private wheelFactory: WheelFactoryService) {

    }
    createCar(config: CarConfig): Car {
        const leftWheel = this.wheelFactory.createWheel(config.leftWheelConfig);
        const rightWheel = this.wheelFactory.createWheel(config.rightWheelConfig);
        return new Car(leftWheel, rightWheel);
    }
}
