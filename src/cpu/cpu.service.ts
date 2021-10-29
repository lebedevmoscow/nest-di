import { Injectable } from '@nestjs/common';
import { PowerService } from "../power/power.service";

@Injectable()
export class CpuService {
    public constructor(private powerSerivce: PowerService) {

    }

    public compute(a: number, b: number) {
        console.log('Drawing 10 watts of power from Power Service.')
        this.powerSerivce.supplyService(10)
        return a + b
    }
}
