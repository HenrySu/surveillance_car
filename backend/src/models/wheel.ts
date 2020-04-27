import * as pigpio from "pigpio";
import Gpio = pigpio.Gpio;

type Direction = "forward" | "backward";
export class Wheel {
    static readonly DutyCycle = 255;
    private forwardGpio: Gpio;
    private backwardGpio: Gpio;
    private pwmGpio: Gpio;

    constructor(forwardPin: number,
        backwardPin: number,
        pwmPin: number) {
        this.forwardGpio = new Gpio(forwardPin, { mode: Gpio.OUTPUT });
        this.backwardGpio = new Gpio(backwardPin, { mode: Gpio.OUTPUT });
        this.pwmGpio = new Gpio(pwmPin, { mode: Gpio.OUTPUT });
    }

    move(speedRatio: number) {
        this.setSpeed(speedRatio);
        this.setDirection(speedRatio);
    }

    private setDirection(speedRatio: number): void {
        const direction = this.getDirection(speedRatio);
        if (direction === "forward") {
            this.forwardGpio.digitalWrite(1);
            this.backwardGpio.digitalWrite(0);
        }
        else {
            this.forwardGpio.digitalWrite(0);
            this.backwardGpio.digitalWrite(1);
        }
    }

    private setSpeed(speedRatio: number): void {
        const dutyCycle = this.getDutyCycle(speedRatio);
        this.pwmGpio.pwmWrite(dutyCycle);
    }

    private getDirection(ratio: number): Direction {
        return ratio > 0 ? "forward" : "backward";
    }
    private getDutyCycle(ratio: number): number {
        return Math.min(Wheel.DutyCycle, Math.floor(Math.abs(ratio) * Wheel.DutyCycle));
    }
}