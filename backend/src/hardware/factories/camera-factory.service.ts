import { Injectable } from '@nestjs/common';
import { Camera } from 'src/hardware/models';
import { CameraConfig } from '../configs';

@Injectable()
export class CameraFactoryService {
    createCamera(config: CameraConfig): Camera{
        return new Camera(config.i2cAddress, config.horizontalPin, config.verticalPin);
    }
}
