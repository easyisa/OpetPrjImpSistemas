// import { Injectable } from '@nestjs/common'
// import { InjectRepository } from '@nestjs/typeorm'
// import { Repository } from 'typeorm'
// import { SignInDto } from '../dtos/sign-in-dto'
// import { User } from '../entities/user.entity'
// @Injectable()
// export class SignInService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>
//   ) {}
//   async authenticate(signInDto: SignInDto) {
//     if (signInDto.password !== signInDto.passwordConfirmation) {
//     }
//     const user = await this.userRepository.findOne({
//       where: {
//         email: signInDto.username
//       }
//     })

//     if (!user) {
//     }

//     if (user.password !== signInDto.password) {
//     }

//     return
//   }
// }
