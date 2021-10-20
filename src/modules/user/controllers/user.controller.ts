// import { Body, Controller, Post } from '@nestjs/common'
// import { ApiBadRequestResponse, ApiNoContentResponse, ApiOperation } from '@nestjs/swagger'
// import { sign } from 'crypto'
// import { DefaultCreateEntityDocumentation } from 'src/shared/swagger'
// import { CreateUserDto } from '../dtos/create-user-dto'
// import { SignInDto } from '../dtos/sign-in-dto'
// import { CreateUserService } from '../service/create-user.service'
// import { SignInService } from '../service/sign-in.service'

// @Controller('user')
// export class UserController {
//   constructor(private readonly createUserService: CreateUserService, private readonly signInService: SignInService) {}

//   @Post()
//   @DefaultCreateEntityDocumentation('Usuário', 'Cria um usuário')
//   public async createUser(@Body() createUserDto: CreateUserDto) {
//     return this.createUserService.create(createUserDto)
//   }

//   @Post()
//   @ApiOperation({ summary: 'Loga o usuário' })
//   @ApiNoContentResponse({ description: 'Usuário foi logado com sucesso.' })
//   @ApiBadRequestResponse({ description: 'Senha ou usuário inválidos' })
//   public async authenticate(@Body() signInDto: SignInDto) {
//     return this.signInService.authenticate(signInDto)
//   }
// }
