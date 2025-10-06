import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirplaneController } from './airplane/airplane.controller';
import { AirplaneModule } from './airplane/airplane.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Airplane } from './airplane/entities/airplanes';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    username:'root',
    password:'root',
    database:'airline_db',
    entities:[Airplane],
    synchronize:true  
  }) ,AirplaneModule],
  controllers: [AppController, AirplaneController],
  providers: [AppService],
})
export class AppModule {}
