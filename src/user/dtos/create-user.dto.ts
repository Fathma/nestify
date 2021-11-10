import {IsString, IsEmail, IsOptional, IsNumber} from "class-validator"

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  name: string;

  @IsNumber()
  @IsOptional()
  age: number;
}