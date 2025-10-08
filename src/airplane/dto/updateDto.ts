import { Type } from "class-transformer";
import { IsDate,IsNotEmpty,IsNumber, IsOptional, IsString, Max, Min } from "class-validator";

export class updateAirDto{
    @IsString()
    @IsOptional()
    modelNumber:string;

    @IsNumber()
    @Min(0)
    @Max(600)
    @IsOptional()
    capacity:number;

    @IsDate()
    @IsOptional()
    @Type(()=> Date)
    updated_at?:Date = new Date();
}