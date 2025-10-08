import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Airplane } from './entities/airplanes';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAirDto } from './dto/createDTO';

@Injectable()
export class AirplaneService {
  constructor(
    @InjectRepository(Airplane)
    private readonly AirplaneRepo: Repository<Airplane>,
  ) {}

  async getAll(): Promise<Airplane[]> {
    return this.AirplaneRepo.find();
  }

  async getOne(id: number): Promise<Airplane | null> {
    const air = await this.AirplaneRepo.findOneBy({ id });
    if (!air) {
      throw new NotFoundException('invalid airplane id');
    }
    return air;
  }

  async create(newAirplane: CreateAirDto): Promise<CreateAirDto> {
    
    // IF MODEl NUMBER ALREADY EXISTING THROW BAD REQUEST
    
    console.log('new data',  newAirplane)
    const  modelNumber=newAirplane.modelNumber
    const existing =await this.AirplaneRepo.findOneBy({modelNumber})
    if(existing){
      throw new BadRequestException('The Modelnumber Already exiting,!!! is must be unique');  
    }

    const airplane = this.AirplaneRepo.create(newAirplane);
    return this.AirplaneRepo.save(airplane);
  }

  async update(
    id: number,
    updateAirplane: Partial<Airplane>,
  ): Promise<Airplane | null> {
    console.log(updateAirplane)
    if(!updateAirplane.modelNumber && !updateAirplane.capacity){
      throw new BadRequestException('update failed han not be empty')
    }
    // check existing id 
    const existingPlane = await this.AirplaneRepo.findOneBy({ id });
    if (!existingPlane) {
      throw new BadRequestException('invalid airplane id');
    } 

    const data = await this.AirplaneRepo.update(id, updateAirplane);
    console.log('putting a updater', data); 

     return await this.AirplaneRepo.findOneBy({ id });
    }

  async delete(id: number): Promise<Airplane | string> {
    const air = await this.AirplaneRepo.findOneBy({ id });
    if (!air) {
      throw new BadRequestException(`invalid airplane id !!!`);
    }
    const value = this.AirplaneRepo.delete({ id });
    console.log(value);
    return 'delete is success';
  }
}
