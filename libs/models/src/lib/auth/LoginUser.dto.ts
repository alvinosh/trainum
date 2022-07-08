import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;
  @MinLength(6)
  @MaxLength(100)
  @IsNotEmpty()
  password: string;
}
