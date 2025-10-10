import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { City } from './entities/cityORM';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CityDto } from './dto/createCityDto';


@Injectable()
export class CityService {
 
    constructor(
    @InjectRepository(City)
    private readonly CityRepo: Repository<City>,
  ) {}

  async getAll(): Promise< City[]> {
    return this.CityRepo.find();
  }

  async getOne(id: number): Promise< City | null> {
    const city = await this.CityRepo.findOneBy({ id });
    if (!city) {
      throw new NotFoundException('invalid city id');
    }
    return city;
  }

  async create(newCity: CityDto): Promise<CityDto> {
    
    // IF MODEl NUMBER ALREADY EXISTING THROW BAD REQUEST
    
    console.log('new data', newCity)
    const city=newCity.city
    const existing =await this.CityRepo.findOneBy({city})
    if(existing){
      throw new BadRequestException('The city Already exiting,!!! is must be unique');  
    }

    const value = this.CityRepo.create(newCity);
    return await this.CityRepo.save(value);
  }

  async update(
    id: number,
    updateCity: Partial< City>,
  ): Promise< City | null> {
    if(!updateCity || !updateCity.city ){
      throw new BadRequestException('update failed han not be empty')
    }

    // check existing id 
    const existing = await this.CityRepo.findOneBy({ id });
    if (!existing) {
      throw new BadRequestException('invalid city id');
    } 

    const data = await this.CityRepo.update(id, updateCity);
    console.log('putting a updater', data); 

     return await this.CityRepo.findOneBy({ id });
    }

  async delete(id: number): Promise< City | string> {
    const air = await this.CityRepo.findOneBy({ id });
    if (!air) {
      throw new BadRequestException(`invalid city id !!!`);
    }
    const value = await this.CityRepo.delete({ id });
    console.log(value);
    return 'delete is success';
  }
}
