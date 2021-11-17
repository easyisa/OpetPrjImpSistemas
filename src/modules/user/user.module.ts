import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from './controllers/user.controller'
import { User } from './entities/user.entity'
import { CreateUserService } from './service/create-user.service'
import { UpdateUserService } from './service/update-user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [CreateUserService, UpdateUserService]
})
export class UserModule {}
