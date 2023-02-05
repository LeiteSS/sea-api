import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn
} from 'typeorm';

import { Goal } from './Goal';

/*
  @Definition: The exact actions and steps your company must take to reach its goals
  @Specificity: Specific, precise
  @Plan: Narrow in scope
  @Size: Small chunks, part of the whole
  @Actions: Specific actions and measurable
  @Measurement: Easy; it must be measurable and tangible
  @Timeframe: Medium-to-short-term
*/

@Entity()
export class Objective {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  status: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Goal, goal => goal.id)
  @JoinColumn()
  goal: Goal;

  @Column()
  deadline: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAt: Date;
}