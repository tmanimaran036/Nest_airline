import { Type } from "class-transformer";
import { IsDate,IsNotEmpty,IsNumber, IsOptional, IsString } from "class-validator";

export class updateAirDto{
    @IsString()
    @IsOptional()
    modelNumber:string;

    @IsNumber()
    @IsOptional()
    capacity:number;

    @IsDate()
    @IsOptional()
    @Type(()=> Date)
    updated_at?:Date = new Date();
}