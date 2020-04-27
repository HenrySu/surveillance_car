import { Injectable } from '@nestjs/common';
import { MovementVector2 } from 'src/models';

@Injectable()
export class MonitorService {
    move(moveVector: MovementVector2) {
    }
}
