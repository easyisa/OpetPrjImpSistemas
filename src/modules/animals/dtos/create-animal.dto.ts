import { ApiProperty } from '@nestjs/swagger'
import { IsEnum, IsNotEmpty, IsString } from 'class-validator'
import { City, State } from 'src/shared/enums'
import { AnimalSize, AnimalType, Gender } from '../enum'

export class CreateAnimalDto {
  @ApiProperty({ example: 'Pedrinho' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: '2' })
  @IsNotEmpty()
  @IsString()
  mounths: string

  @ApiProperty({ example: '1' })
  @IsNotEmpty()
  @IsString()
  years: string

  @ApiProperty({ example: 'cat' })
  @IsNotEmpty()
  @IsEnum(AnimalType)
  type: AnimalType

  @ApiProperty({ example: 'female' })
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender

  @ApiProperty({ example: 'small' })
  @IsNotEmpty()
  @IsEnum(AnimalSize)
  size: AnimalSize

  @ApiProperty({ example: 'curitiba' })
  @IsNotEmpty()
  @IsString()
  city: City

  @ApiProperty({ example: 'PR' })
  @IsNotEmpty()
  @IsString()
  state: State
}
