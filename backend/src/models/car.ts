import { Wheel } from "./wheel";
import { CarMovement } from "./car-movement";

export class Car {
    constructor(private leftWheel: Wheel, private rightWheel: Wheel) {
    }

    move(vector: CarMovement): void {
        const moveRatio = Math.cos(vector.arc);
        const turnRatio = Math.sin(vector.arc);
        let [leftRatio, rightRatio] = [moveRatio, moveRatio];
        vector.arc > 0 && vector.arc < Math.PI ? leftRatio += turnRatio : rightRatio += turnRatio;
        this.leftWheel.move(leftRatio * vector.distanceRatio);
        this.rightWheel.move(rightRatio * vector.distanceRatio);
    }
}