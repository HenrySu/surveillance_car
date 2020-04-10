export class Vector2 {
    x: number;
    y: number;
    constructor(public angle?: number, public distance?: number) {
        this.x = Math.sin(angle) * distance || 0;
        this.y = Math.cos(angle) * distance || 0;
    }
}