import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { CarFactoryService } from 'src/hardware/factories/car-factory.service';
import { Car } from 'src/models';
import { MovementVector2 } from 'src/models/movement-vector2';
import { CarConfig } from 'src/hardware/models';

@Injectable()
export class CarService {
    private car: Car;
    constructor(carFactory: CarFactoryService,
        configSvc: ConfigService) {
        const carConfig = <CarConfig>configSvc.get("car");
        this.car = carFactory.createCar(carConfig);
    }

    move(moveVector: MovementVector2) {
        this.car.move(moveVector);
    }

    getCarInfo() {
    }

}
