import { Servo } from "./servo";

export class Camera {
    constructor(private horizontalServo: Servo,
        private verticalServo: Servo) {
    }
}