import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './car/car.controller';
import { CarService } from './car/car.service';
import { MonitorController } from './monitor/monitor.controller';
import { MonitorService } from './monitor/monitor.service';
import { CarFactoryService } from './hardware/car-factory.service';
import { WheelFactoryService } from './hardware/wheel-factory.service';

@Module({
  imports: [],
  controllers: [AppController, CarController, MonitorController],
  providers: [AppService, CarService, MonitorService, CarFactoryService, WheelFactoryService ],
})
export class AppModule {}
