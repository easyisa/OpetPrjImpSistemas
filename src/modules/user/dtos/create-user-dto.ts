import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'
import { DocumentType } from '../enums/documentType'

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documentType: DocumentType

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  documentNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  email: string

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
  password: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  city: string
}
