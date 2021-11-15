import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'
import { City } from 'src/shared/enums'

export class UpdateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  phone: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  birthday: Date

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: City
}
