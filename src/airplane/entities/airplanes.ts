import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'airplane' })
export class Airplane {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  modelNumber: string;

  @Column()
  capacity: number;

  @Column({type:'timestamp',default:()=> 'CURRENT_TIMESTAMP'})
  created_at:Date;

  @Column({type:'timestamp', default:()=>'CURRENT_TIMESTAMP'})
  updated_at: Date;
}
