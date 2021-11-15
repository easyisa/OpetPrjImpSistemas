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

  // @Post()
  // @ApiOperation({ summary: 'Loga o usuário' })
  // @ApiNoContentResponse({ description: 'Usuário foi logado com sucesso.' })
  // @ApiBadRequestResponse({ description: 'Senha ou usuário inválidos' })
  // public async authenticate(@Body() signInDto: SignInDto) {
  //   return this.signInService.authenticate(signInDto)
  // }
}
