import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import {CpuService} from "../cpu/cpu.service";
import {DiskService} from "../disk/disk.service";

@Module({
  imports: [CpuService, DiskService],
  controllers: [ComputerController]
})
export class ComputerModule {}
