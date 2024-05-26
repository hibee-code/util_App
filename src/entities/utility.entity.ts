import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Utility {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'numeric' })
  capacity: number;

  @Column({ type: 'varchar' })
  userId: string;
}
