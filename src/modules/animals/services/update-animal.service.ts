import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, getConnection, Repository } from 'typeorm'
import { UpdateAnimalDto } from '../dtos/update-animal.dto'
import { Animal } from '../entities'
import { AnimalNotFoundException } from '../exceptions/animal-exceptions'

@Injectable()
export class UpdateAnimalService {
  constructor(
    @InjectRepository(Animal)
    private readonly animalRepository: Repository<Animal>
  ) {}
  public async update(updateAnimalDto: UpdateAnimalDto) {
    return await getConnection().transaction(async (manager) => {
      return this.updateWithTransaction(updateAnimalDto, manager)
    })
  }
  private async updateWithTransaction(updateAnimalDto: UpdateAnimalDto, manager: EntityManager) {
    const animal = await this.findAnimal(updateAnimalDto.id)
    await this.updateAnimal(animal, updateAnimalDto, manager)
    return
  }

  private async findAnimal(id: string): Promise<Animal> {
    const animal = await this.animalRepository.findOne({
      where: {
        id
      }
    })

    if (!animal) {
      throw new AnimalNotFoundException()
    }

    return animal
  }

  private async updateAnimal(animal: Animal, updateAnimalDto: UpdateAnimalDto, manager: EntityManager) {
    animal.name = updateAnimalDto.name
    animal.mounths = updateAnimalDto.mounths
    animal.years = updateAnimalDto.years
    animal.size = updateAnimalDto.size
    animal.type = updateAnimalDto.type
    animal.gender = updateAnimalDto.gender
    animal.city = updateAnimalDto.city
    animal.state = updateAnimalDto.state

    await manager.save(animal)

    return
  }
}
