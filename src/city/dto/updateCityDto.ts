import {  CityDto } from "./createCityDto"
import { PartialType } from '@nestjs/mapped-types'

export class UpdateDto  extends  PartialType(CityDto){}
