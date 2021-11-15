import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, getConnection, Repository } from 'typeorm'
import { UpdateUserDto } from '../dtos/update-use-dto'
import { User } from '../entities/user.entity'
import { UserNotFoundException } from '../exceptions/user-exceptions'

export class UpdateUserService {
  constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>
  ) {}
  public async update(updateUserDto: UpdateUserDto) {
    await getConnection().transaction(async (manager) => {
      return this.createWithTransaction(updateUserDto, manager)
    })
  }
  private async createWithTransaction(updateUserDto: UpdateUserDto, manager: EntityManager) {
    const user = await this.findUser(updateUserDto.id)
    await this.updateUser(updateUserDto, user, manager)
    return
  }

  private async findUser(id: string): Promise<User> {
    const user = this.userRepository.findOne({
      where: {
        id
      }
    })
    if (!user) {
      throw new UserNotFoundException()
    }

    return user
  }

  private async updateUser(updateUserDto: UpdateUserDto, user: User, manager: EntityManager) {
    user.name = updateUserDto.name
    user.phone = updateUserDto.phone
    user.birthday = updateUserDto.birthday
    user.city = updateUserDto.city

    await manager.save(user)
  }
}
