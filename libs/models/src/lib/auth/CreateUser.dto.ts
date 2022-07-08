import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  username: string;

  @MinLength(6)
  @MaxLength(100)
  @IsNotEmpty()
  password: string;

  @MinLength(6)
  @MaxLength(100)
  @IsNotEmpty()
  confirm_password: string;
}
