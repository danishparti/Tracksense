import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn({
    name: 'Id',
  })
  id!: number;

  @Column({
    name: 'FirstName',
    type: 'varchar',
    length: 100,
  })
  firstName!: string;

  @Column({
    name: 'LastName',
    type: 'varchar',
    length: 100,
  })
  lastName!: string;

  @Column({
    name: 'Email',
    type: 'varchar',
    length: 150,
    unique: true,
  })
  email!: string;

  @Column({
    name: 'PasswordHash',
    type: 'varchar',
    length: 255,
  })
  passwordHash!: string;

  @Column({
    name: 'PhoneNumber',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  phoneNumber?: string;

  @Column({
    name: 'ProfileImageUrl',
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  profileImageUrl?: string;

  @Column({
    name: 'IsEmailVerified',
    type: 'bit',
    default: false,
  })
  isEmailVerified!: boolean;

  @Column({
    name: 'IsActive',
    type: 'bit',
    default: true,
  })
  isActive!: boolean;

  @Column({
    name: 'LastLogin',
    type: 'datetime',
    nullable: true,
  })
  lastLogin?: Date;

  @CreateDateColumn({
    name: 'CreatedAt',
    type: 'datetime',
  })
  createdAt!: Date;

  @UpdateDateColumn({
    name: 'UpdatedAt',
    type: 'datetime',
  })
  updatedAt!: Date;

  @Column({
    name: 'CreatedBy',
    type: 'int',
    nullable: true,
  })
  createdBy?: number;

  @Column({
    name: 'UpdatedBy',
    type: 'int',
    nullable: true,
  })
  updatedBy?: number;

  @DeleteDateColumn({
    name: 'DeletedAt',
    type: 'datetime',
    nullable: true,
  })
  deletedAt?: Date;
}