import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn
} from 'typeorm';

import { User } from './User';


/*
  @Definition: The direction and overall destination of your company that helps you 
  realize your vision 
  @Specificity: General intention or direction
  @Plan: Broad in scope
  @Size: Large in size, the whole
  @Actions: A general outcome
  @Measurement: Difficult; goals are usually intangible and may not be strictly measurable
  @Timeframe: Long-term
*/

@Entity()
export class Goal {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  deadline: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn()
  user: User;
}