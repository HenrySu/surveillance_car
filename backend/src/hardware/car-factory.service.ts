import { Injectable } from '@nestjs/common';
import { Car } from 'src/models';

@Injectable()
export class CarFactoryService {
    createCar(): Car {
        return new Car();
    }
}
