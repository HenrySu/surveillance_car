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
  constructor(public x: number, public y: number) {
    this.arc = (Math.atan2(x, y) + 2 * Math.PI) % (2 * Math.PI);
    this.distanceRatio = Math.sqrt(x * x + y * y);
  }

  public arc: number; // clockwise
  public distanceRatio: number;//[0,1]
}