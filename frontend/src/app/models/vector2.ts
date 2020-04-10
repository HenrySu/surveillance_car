export class Vector2 {
    x: number;
    y: number;
    constructor(public angle: number = 0, public distance: number = 0) {
        this.x = Math.sin(angle) * distance;
        this.y = Math.cos(angle) * distance;
    }
}