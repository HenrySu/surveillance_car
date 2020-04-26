import { Controller, Get } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor(private carSvc: CarService) { }

    @Get()
    getCar() {
        return this.carSvc.getCarInfo();
    }
}
