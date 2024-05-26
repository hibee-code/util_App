import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UtilityDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  capacity: number;

  @IsNotEmpty()
  @IsString()
  userId: string;
}
