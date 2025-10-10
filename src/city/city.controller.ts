import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ParseIntPipe,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CityDto } from './dto/createCityDto';
import { UpdateDto } from './dto/updateCityDto';

@Controller('api/city')
export class CityController {
  constructor(private readonly cityServices: CityService) {}

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.cityServices.getOne(id);
  }

  @Post()
  create(@Body() createDto: CityDto) {
    return this.cityServices.create(createDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() update: UpdateDto) {
    return this.cityServices.update(id,update);
  }
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.cityServices.delete(id);
  }
}
