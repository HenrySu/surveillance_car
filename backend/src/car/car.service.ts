import { Injectable } from '@nestjs/common';

@Injectable()
export class CarService {
    getCarInfo() {
        return "Henry's surveillance car";
    }

}
