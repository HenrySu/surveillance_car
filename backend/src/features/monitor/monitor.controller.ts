import { Controller, Post, Body } from '@nestjs/common';
import { MonitorService } from './monitor.service';
import { MovementVector2 } from 'src/hardware/models';

@Controller('monitor')
export class MonitorController {
    constructor(private monitorSvc: MonitorService) { }

    @Post()
    async move(@Body() moveVector: MovementVector2) {
        this.monitorSvc.move(moveVector);
        return moveVector;
    }
}
