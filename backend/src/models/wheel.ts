type Direction = "forward" | "backward";
export class Wheel {
    static readonly DutyCycle = 150;
    constructor(private forwardPin: number,
        private backwardPin: number,
        pwmPin: number) {

    }

    move(speedRatio: number) {
        this.setSpeed(speedRatio);
        this.setDirection(speedRatio);
    }

    private setDirection(speedRatio: number): void {
        this.getDirection(speedRatio);
    }

    private setSpeed(speedRatio: number): void {
        this.getDutyCycle(speedRatio);
    }

    private getDirection(ratio: number): Direction {
        return ratio > 0 ? "forward" : "backward";
    }
    private getDutyCycle(ratio: number) {
        Math.abs(ratio) * Wheel.DutyCycle;
    }
}