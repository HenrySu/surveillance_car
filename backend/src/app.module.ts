import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { cameraConfiguration, carConfiguration } from "./config";
import { CarController } from './features/car/car.controller';
import { CarService } from './features/car/car.service';
import { MonitorController } from './features/monitor/monitor.controller';
import { MonitorService } from './features/monitor/monitor.service';
import { CameraFactoryService } from './hardware/factories/camera-factory.service';
import { CarFactoryService } from './hardware/factories/car-factory.service';
import { WheelFactoryService } from './hardware/factories/wheel-factory.service';
import { ServoFactoryService } from './hardware/factories/servo-factory.service';
import { PCA9685FactoryService } from './hardware/factories/pca9685-factory.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [carConfiguration, cameraConfiguration]
    }),
    AuthModule,
    UsersModule],
  controllers: [AppController, CarController, MonitorController],
  providers: [AppService, CarService, MonitorService, CarFactoryService, WheelFactoryService, CameraFactoryService, ServoFactoryService, PCA9685FactoryService],
})
export class AppModule { }
