import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAirDto{
    @IsString()
    @IsNotEmpty()
    modelNumber:string;

    @IsNumber()
    @IsNotEmpty()
    capacity:number

}