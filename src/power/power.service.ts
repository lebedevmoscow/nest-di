import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    public supplyService(watts: number) {
        console.log(`Supplying ${watts} worth of power.`)
    }
}
