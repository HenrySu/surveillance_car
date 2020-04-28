import { MovementVector2 } from ".";
import { Servo } from "./servo";

export class Camera {
    constructor(private horizontalServo: Servo,
        private verticalServo: Servo) {
    }

    move(moveVector: MovementVector2) {
        this.horizontalServo.move(moveVector.x);
        this.verticalServo.move(moveVector.y);
    }
}