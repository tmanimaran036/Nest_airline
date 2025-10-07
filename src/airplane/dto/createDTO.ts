import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAirDto{
    @IsString()
    @IsNotEmpty({message:'modelNumber is require'})
    modelNumber:string;

    @IsNumber()
    @IsNotEmpty({message:'capacity must be require'})
    capacity:number

}