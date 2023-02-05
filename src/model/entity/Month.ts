// Month backlog
import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import { Objective } from './Objective';

@Entity()
export class Month {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  theme: string;

  @Column()
  epic: string;

  @Column()
  userStory: string;

  @OneToMany(() => Objective, objective => objective.id)
  @JoinColumn()
  objective: Array<Objective>;

  @Column()
  status: string;

  @Column()
  deadline: Date

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}