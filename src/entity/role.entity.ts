import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from "typeorm";
import { User } from "./user.entity";


@Entity()
export class Role extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  
  
  @CreateDateColumn()
  createdAt: Date;
}
