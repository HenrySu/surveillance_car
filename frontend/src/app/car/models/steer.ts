export interface Steer {
    direction: number;//radian unit, clockwise, starts from 0, 0 === north
    speed: number;// 0-1, 0 === stop, 1 === full speed
}