import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'airplane' })
export class Airplane {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true,nullable:false })
  modelNumber: string;

  @Column({nullable:false})
  capacity: number;

//   @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
//   created_at:Date;

//   @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
//   updated_at: Date;

  @CreateDateColumn({type:'timestamp'})
   created_at:Date;
  
   @UpdateDateColumn({type:'timestamp'})
   updated_at:Date;

}
