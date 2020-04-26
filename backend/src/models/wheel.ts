import { CarMovement } from "./car-movement";

export class Wheel {
    static readonly DutyCycle = 150;
    constructor(private forwardPin: number,
        private backwardPin: number,
        pwmPin: number) {

    }

    move(vector:CarMovement) {
        this.setRPM(vector);
    }

    private setRPM(vector: CarMovement) {
        this.getDutyCycle(vector.yRatio);
    }

    private getDutyCycle(ratio:number) {
        Math.abs(ratio) * Wheel.DutyCycle;
    }
}