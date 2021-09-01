import { Body, Controller, Post } from '@nestjs/common'
import { DefaultCreateEntityDocumentation } from 'src/shared/swagger'
import { CreateUserDto } from '../dtos/create-user-dto'
import { CreateUserService } from '../service/create-user.service'

@Controller('user')
export class UserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @DefaultCreateEntityDocumentation('Usuário', 'Cria um usuário')
  public async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto)
  }
}
