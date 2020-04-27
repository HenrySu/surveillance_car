import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarController } from './features/car/car.controller';
import { CarService } from './features/car/car.service';
import { MonitorController } from './features/monitor/monitor.controller';
import { MonitorService } from './features/monitor/monitor.service';
import { CarFactoryService } from './hardware/factories/car-factory.service';
import { WheelFactoryService } from './hardware/factories/wheel-factory.service';
import { CameraFactoryService } from './hardware/factories/camera-factory.service';
import carConfig from "./config/car-configuration";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [carConfig]
    })],
  controllers: [AppController, CarController, MonitorController],
  providers: [AppService, CarService, MonitorService, CarFactoryService, WheelFactoryService, CameraFactoryService],
})
export class AppModule { }
