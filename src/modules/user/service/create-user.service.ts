import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from '../dtos/create-user-dto'
import { User } from '../entities/user.entity'

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  async create(createUserDto: CreateUserDto) {
    return
  }
}
