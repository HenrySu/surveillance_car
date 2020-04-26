import { Controller, Get } from '@nestjs/common';

@Controller('car')
export class CarController {
    @Get()
    getCar() {
        return "hello my car!";
    }
}
