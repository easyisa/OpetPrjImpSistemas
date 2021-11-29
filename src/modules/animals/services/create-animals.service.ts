import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, getConnection, Repository } from 'typeorm'
import { CreateAnimalDto } from '../dtos/create-animal.dto'
import { Animal } from '../entities'

@Injectable()
export class CreateAnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>
  ) {}
  public async create(createAnimalDto: CreateAnimalDto) {
    return await getConnection().transaction(async (manager) => {
      return this.createWithTransaction(createAnimalDto, manager)
    })
  }
  private async createWithTransaction(createAnimalDto: CreateAnimalDto, manager: EntityManager) {
    const animal = await this.createAnimal(createAnimalDto, manager)
    return animal
  }

  private async createAnimal(createAnimalDto: CreateAnimalDto, manager: EntityManager) {
    const animal = new Animal()
    animal.name = createAnimalDto.name
    animal.mounths = createAnimalDto.mounths
    animal.years = createAnimalDto.years
    animal.size = createAnimalDto.size
    animal.type = createAnimalDto.type
    animal.gender = createAnimalDto.gender
    animal.city = createAnimalDto.city
    animal.state = createAnimalDto.state

    const createdAnimal = await manager.save(animal)
    return createdAnimal
  }
}
