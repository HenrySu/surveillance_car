import { ServoConfig } from "./servo-config";

export interface CameraConfig {
    i2cAddress: number;
    horizontalServo: ServoConfig;
    verticalServo: ServoConfig;
}