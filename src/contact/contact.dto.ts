import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class ContactDto {
  @IsNotEmpty()
  @Length(1, 100)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(1, 100)
  subject: string;

  @IsNotEmpty()
  @Length(1, 1000)
  message: string;
}
