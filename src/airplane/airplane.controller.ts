import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateAirDto } from './dto/createDTO';
import { updateAirDto } from './dto/updateDto';

import { AirplaneService } from './airplane.service';

@Controller('api/airplane')
export class AirplaneController {
  constructor( private readonly airplaneService:AirplaneService){}
   @Get()
   getAll(){
    return this.airplaneService.getAll();
   }  

   @Get(':id')
   getOne(@Param('id', ParseIntPipe) id:number){
    return this.airplaneService.getOne(id)
   }
   
   @Post()
   create(@Body() createAri:CreateAirDto){
      return this.airplaneService.create(createAri)
   }

   @Put(':id')
   update(@Param('id',ParseIntPipe) id:number, @Body() updateAir:updateAirDto){
    return this.airplaneService.update(id,updateAir)
   }
   
   @Delete(':id')
   delete(@Param('id',ParseIntPipe) id:number){
    return this.airplaneService.delete(id)
   }
}

