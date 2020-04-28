import { Wheel } from "./wheel";
import { MovementVector2 } from "./movement-vector2";

export class Car {
    constructor(private leftWheel: Wheel, private rightWheel: Wheel) {
    }

    move(vector: MovementVector2): void {
        const [leftRatio, rightRatio] = this.getLeftRightRatios(vector);
        this.leftWheel.move(leftRatio * vector.distanceRatio);
        this.rightWheel.move(rightRatio * vector.distanceRatio);
    }

    getLeftRightRatios(vector: MovementVector2) {
        const moveRatio = Math.cos(vector.arc);
        const turnRatio = Math.sin(vector.arc);
        let [leftRatio, rightRatio] = [moveRatio, moveRatio];
        if (vector.arc > 0 && vector.arc <= Math.PI / 2) {
            leftRatio += turnRatio;
        }
        else if (vector.arc > Math.PI / 2 && vector.arc <= Math.PI) {
            leftRatio -= turnRatio;
        }
        else if (vector.arc > Math.PI && vector.arc <= Math.PI / 2 * 3) {
            rightRatio += turnRatio;
        }
        else {
            rightRatio -= turnRatio;
        }

        return [leftRatio, rightRatio];
    }
}