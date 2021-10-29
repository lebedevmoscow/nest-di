import { Injectable } from '@nestjs/common';
import { PowerService } from "../power/power.service";

@Injectable()
export class DiskService {
    public constructor(private powerService: PowerService) {
    }

    public getData() {
        console.log('Drawing 20 watts of power from PowerService')
        this.powerService.supplyService(20)
        return 'data'
    }
}
