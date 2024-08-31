import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactMessage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  subject: string;

  @Column()
  message: string;
}