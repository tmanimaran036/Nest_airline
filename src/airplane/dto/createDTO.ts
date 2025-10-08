import { IsNotEmpty, IsNumber, IsString, Min, Max } from "class-validator";

export class CreateAirDto{
    @IsString()
    @IsNotEmpty({message:'modelNumber is require'})
    modelNumber:string;

    @IsNumber()
    @Min(0)
    @Max(600 ,{message:' maxmum capacity list 600 '})
    @IsNotEmpty({message:'capacity must be require',})
    capacity:number

}