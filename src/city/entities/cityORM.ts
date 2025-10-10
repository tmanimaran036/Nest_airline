import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'cities'})
export class City{
 @PrimaryGeneratedColumn()
 id:number;
 
 @Column({unique:true ,nullable:false})
 city:string
}
