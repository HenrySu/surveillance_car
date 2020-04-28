import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CameraConfig } from 'src/hardware/configs';
import { MovementVector2, Camera } from 'src/hardware/models';
import { CameraFactoryService } from 'src/hardware/factories/camera-factory.service';

@Injectable()
export class MonitorService {
    camera: Camera;
    constructor(configSvc: ConfigService,
        factory: CameraFactoryService) {
        const cameraConfig = <CameraConfig>configSvc.get("camera");
        this.camera = factory.createCamera(cameraConfig);
    }

    move(moveVector: MovementVector2) {
        this.camera.move(moveVector);
    }
}
