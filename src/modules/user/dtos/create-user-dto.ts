import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'
import { City, State } from 'src/shared/enums'
import { DocumentType } from '../enums/documentType'

export class CreateUserDto {
  @ApiProperty({ example: 'CPF' })
  @IsNotEmpty()
  @IsString()
  documentType: DocumentType

  @ApiProperty({ example: '08501267970' })
  @IsNotEmpty()
  @IsString()
  documentNumber: string

  @ApiProperty({ example: 'Isabel' })
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ example: 'isabelyoshino@gmail.com' })
  @IsNotEmpty()
  @IsString()
  email: string

  @ApiProperty({ example: '41998099879' })
  @IsNotEmpty()
  @IsString()
  phone: string

  @ApiProperty({ example: '1995-09-18' })
  @IsNotEmpty()
  @IsString()
  birthday: Date

  @ApiProperty({ example: 'oi123' })
  @IsNotEmpty()
  @IsString()
  password: string

  @ApiProperty({ example: 'curitiba' })
  @IsNotEmpty()
  @IsString()
  city: City

  @ApiProperty({ example: 'PR' })
  @IsNotEmpty()
  @IsString()
  state: State
}
