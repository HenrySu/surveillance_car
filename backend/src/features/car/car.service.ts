import { Injectable } from '@nestjs/common';
import { CarMovement } from 'src/models/car-movement';

@Injectable()
export class CarService {
    move(moveVector: CarMovement) {
        
    }
    getCarInfo() {
        return "Henry's surveillance car";
    }

}
