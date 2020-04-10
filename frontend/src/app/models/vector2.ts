export class Vector2 {
    x: number;
    y: number;
    constructor(public angle = 0, public distance = 0) {
        this.x = Math.sin(angle) * distance;
        this.y = Math.cos(angle) * distance;
    }
}