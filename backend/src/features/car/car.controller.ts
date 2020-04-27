import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { CarMovement } from 'src/models/car-movement';

@Controller('car')
export class CarController {
    constructor(private carSvc: CarService) { }

    @Get()
    async getCar() {
        return this.carSvc.getCarInfo();
    }

    @Post()
    async move(@Body() moveVector:CarMovement) {
        this.carSvc.move(moveVector);
        return moveVector;
    }
}
