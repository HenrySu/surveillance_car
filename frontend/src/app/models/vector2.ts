export class Vector2 {
    x: number;
    y: number;
    constructor(public angleRadian: number = 0, public distance: number = 0) {
        this.x = Math.sin(angleRadian) * distance;
        this.y = Math.cos(angleRadian) * distance;
    }
}