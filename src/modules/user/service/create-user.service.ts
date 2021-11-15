import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { City } from 'src/shared/entities/city'
import { CityNotFoundException } from 'src/shared/exceptions/city-exceptions'
import { Repository } from 'typeorm'
import { CreateUserDto } from '../dtos/create-user-dto'
import { User } from '../entities/user.entity'
import { DocumentType } from '../enums/documentType'
import { UserNotFoundException } from '../exceptions/user-exceptions'

@Injectable()
export class CreateUserService {
  constructor(
    @InjectRepository(User)
    public readonly userRepository: Repository<User>,
    @InjectRepository(City)
    public readonly cityRepository: Repository<City>
  ) {}
  public async create(createUserDto: CreateUserDto) {
    const user = await this.findUser(createUserDto.documentNumber)

    if (user) {
      throw new UserNotFoundException()
    }
    await this.createUser(createUserDto)
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

  private async createUser(createUserDto: CreateUserDto) {
    const city = await this.findCity(createUserDto.city)
    const newUser = new User()
    newUser.name = createUserDto.name
    newUser.password = createUserDto.password
    newUser.phone = createUserDto.phone
    newUser.email = createUserDto.email
    newUser.city = city
    newUser.birthday = createUserDto.birthday
    newUser.documentNumber = createUserDto.documentNumber
    newUser.documentType = DocumentType.CPF
    newUser.createdAt = new Date()
  }

  private async findCity(cityName: string) {
    const city = await this.cityRepository.findOne({
      where: {
        name: cityName
      }
    })
    if (!city) {
      throw new CityNotFoundException()
    }
    return city
  }
}
