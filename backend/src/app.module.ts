import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';

@Module({
  imports: [],
  controllers: [AppController, CarController],
  providers: [AppService, CarService],
})
export class AppModule {}
