import { Injectable } from '@nestjs/common';
import { Car } from 'src/hardware/models';
import { CarConfig } from '../configs';
import { WheelFactoryService } from './wheel-factory.service';

@Injectable()
export class CarFactoryService {
    constructor(private wheelFactory: WheelFactoryService) {
    }
    
    createCar(config: CarConfig): Car {
        const leftWheel = this.wheelFactory.createWheel(config.leftWheel);
        const rightWheel = this.wheelFactory.createWheel(config.rightWheel);
        return new Car(leftWheel, rightWheel);
    }
}
