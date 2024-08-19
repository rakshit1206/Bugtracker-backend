import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
  AfterLoad,
  ManyToOne,
} from "typeorm";

import * as bcrypt from "bcrypt";
import { userStatus } from "../utils/types";
import { SERVER_URL } from "../utils/constant";

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ default: "https://github.com/shadcn.png" })
  profile: string;

  @Column()
  password: string;

  @Column({ default: "active" })
  status: userStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  @AfterLoad()
  afterLoad() {
    if (this.profile) {
      if (!this.isValidHttpUrl(this.profile)) {
        this.profile = SERVER_URL + this.profile;
      }
    } else {
      this.profile = "https://github.com/shadcn.png";
    }
  }

  isValidHttpUrl(string: string) {
    let url: any;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  @BeforeUpdate()
  async updateTimestamp() {
    this.updatedAt = new Date();
  }
}
