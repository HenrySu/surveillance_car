import { Injectable } from '@nestjs/common';
import { CarFactoryService } from 'src/hardware/factories/car-factory.service';
import { Car } from 'src/models';
import { CarMovement } from 'src/models/car-movement';

@Injectable()
export class CarService {
    private car: Car;
    constructor(carFactory: CarFactoryService) {
        // this.car = carFactory.createCar(null);
    }
    move(moveVector: CarMovement) {

    }
    getCarInfo() {
        return "Henry's surveillance car";
    }

}
