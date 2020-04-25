/// percentage vector 2
/*
       1 ^
         |
-1       |
<--------0-------->
         |        1
         |
       -1v
*/
export class Vector2 {
    constructor(public x:number, public y:number){}
    // constructor(public angleRadian: number = 0, public distance: number = 0) {
    //     this.x = Math.sin(angleRadian) * distance;
    //     this.y = Math.cos(angleRadian) * distance;
    // }
}