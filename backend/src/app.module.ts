import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './features/car/car.controller';
import { CarService } from './features/car/car.service';
import { MonitorController } from './features/monitor/monitor.controller';
import { MonitorService } from './features/monitor/monitor.service';
import { CarFactoryService } from './hardware/car-factory.service';
import { WheelFactoryService } from './hardware/wheel-factory.service';

@Module({
  imports: [],
  controllers: [AppController, CarController, MonitorController],
  providers: [AppService, CarService, MonitorService, CarFactoryService, WheelFactoryService ],
})
export class AppModule {}
