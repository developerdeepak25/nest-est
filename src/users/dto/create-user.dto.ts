import { IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  username: string;

//   @IsString()
//   @IsNotEmpty({ message: 'Email is required' })
  email: string;

//   @IsString()
//   @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
