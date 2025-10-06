import { Module } from '@nestjs/common';
import { AirplaneService } from './airplane.service';
import { AirplaneController } from './airplane.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Airplane } from './entities/airplanes';

@Module({
 imports:[TypeOrmModule.forFeature([Airplane])],
  controllers:[AirplaneController],
  providers: [AirplaneService],
  exports:[AirplaneService]
})
export class AirplaneModule {}
