import  { Column, Entity, PrimaryGeneratedColumn, } from "typeorm"

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  age: number
}