import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, getConnection, Repository } from 'typeorm'
import { CreateUserDto } from '../dtos/create-user-dto'
import { User } from '../entities/user.entity'
import { DocumentType } from '../enums/documentType'
import { UserNotFoundException } from '../exceptions/user-exceptions'

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>
  ) {}

  public async create(createUserDto: CreateUserDto) {
    return await getConnection().transaction(async (manager) => {
      return this.createWithTransaction(createUserDto, manager)
    })
  }
  private async createWithTransaction(createUserDto: CreateUserDto, manager: EntityManager) {
    const user = await this.findUser(createUserDto.documentNumber)

    if (user) {
      throw new UserNotFoundException()
    }
    await this.createUser(createUserDto, manager)
    return
  }
  private async findUser(documentNumber: string): Promise<User> {
    const user = this.userRepository.findOne({
      where: {
        documentNumber
      }
    })
    return user
  }

  private async createUser(createUserDto: CreateUserDto, manager: EntityManager) {
    const newUser = new User()
    newUser.name = createUserDto.name
    newUser.password = createUserDto.password
    newUser.phone = createUserDto.phone
    newUser.email = createUserDto.email
    newUser.city = createUserDto.city
    newUser.birthday = createUserDto.birthday
    newUser.documentNumber = createUserDto.documentNumber
    newUser.documentType = DocumentType.CPF
    newUser.createdAt = new Date()

    await manager.save(newUser)
  }
}
