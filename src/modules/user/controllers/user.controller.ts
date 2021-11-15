import { Body, Controller, Post, Put } from '@nestjs/common'
import { DefaultCreateEntityDocumentation, DefaultUpdateEntityDocumentation } from 'src/shared/swagger'
import { CreateUserDto } from '../dtos/create-user-dto'
import { UpdateUserDto } from '../dtos/update-use-dto'
import { CreateUserService } from '../service/create-user.service'
import { UpdateUserService } from '../service/update-user.service'

@Controller('user')
export class UserController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly updateUserService: UpdateUserService
  ) {}

  @Post()
  @DefaultCreateEntityDocumentation('Usuário', 'Cria um usuário')
  public async createUser(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto)
  }

  @Put()
  @DefaultUpdateEntityDocumentation('Usuário', 'Atualiza a conta')
  public async updateUser(@Body() updateUserDto: UpdateUserDto) {
    return this.updateUserService.update(updateUserDto)
  }

  // @Post()
  // @ApiOperation({ summary: 'Loga o usuário' })
  // @ApiNoContentResponse({ description: 'Usuário foi logado com sucesso.' })
  // @ApiBadRequestResponse({ description: 'Senha ou usuário inválidos' })
  // public async authenticate(@Body() signInDto: SignInDto) {
  //   return this.signInService.authenticate(signInDto)
  // }
}
