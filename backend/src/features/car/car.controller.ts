import { Controller, Get, Post, Body, ValidationPipe } from '@nestjs/common';
import { CarService } from './car.service';
import { MovementVector2 } from 'src/models/movement-vector2';

@Controller('car')
export class CarController {
    constructor(private carSvc: CarService) { }

    @Get()
    async getCar() {
        return this.carSvc.getCarInfo();
    }

    @Post()
    async move(@Body() moveVector:MovementVector2) {
        this.carSvc.move(moveVector);
        return moveVector;
    }
}
