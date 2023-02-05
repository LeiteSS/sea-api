// weekly backlog
import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import { Activity } from './Activity';

@Entity()
export class Weekly {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  category: string;

  @Column()
  status: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Activity, activity => activity.id)
  @JoinColumn()
  activity: Array<Activity>;

  @Column()
  deadline: Date

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}