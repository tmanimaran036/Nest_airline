import { Injectable, NotFoundException } from '@nestjs/common';
import { Airplane } from './entities/airplanes';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAirDto } from './dto/createDTO';


@Injectable()
export class AirplaneService {
    constructor(
        @InjectRepository(Airplane) 
        private readonly AirplaneRepo:Repository<Airplane>
    ){}

    async getAll():Promise<Airplane[]>{
      return this.AirplaneRepo.find();
    }

    async getOne(id:number):Promise<Airplane| null>{
       const air= await this.AirplaneRepo.findOneBy({id})
       if(!air){
         throw new NotFoundException('invalid aitplane id')
       }
       return air
      }

    async create(newAirplane:CreateAirDto):Promise<CreateAirDto>{
       const airplane = this.AirplaneRepo.create(newAirplane)
       return this.AirplaneRepo.save(airplane);
    }

    async update(id:number,updateAirplane:Partial<Airplane>):
    Promise<Airplane>{
      await this.AirplaneRepo.update(id,updateAirplane);
      const updatedAirplane=await this.AirplaneRepo.findOneBy({id})
      if(!updatedAirplane){
         throw new Error('invalid airplane')
      } 
      return updatedAirplane;
    }

    async delete(id:number):Promise<Airplane | string >{
      const air =await this.AirplaneRepo.findOneBy({id})
      if(!air){
         throw new NotFoundException(`airplane not found !!!`); 
      }
       const value=this.AirplaneRepo.delete({id})
      console.log(value)
      return 'delete is success'
    }

}

