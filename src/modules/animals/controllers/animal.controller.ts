import { Body, Controller, Post, Put } from '@nestjs/common'
import { DefaultCreateEntityDocumentation, DefaultUpdateEntityDocumentation } from 'src/shared/swagger'
import { CreateAnimalDto } from '../dtos/create-animal.dto'
import { UpdateAnimalDto } from '../dtos/update-animal.dto'
import { CreateAnimalService } from '../services/create-animals.service'
import { UpdateAnimalService } from '../services/update-animal.service'

@Controller('animal')
export class AnimalController {
  constructor(
    private readonly createAnimalService: CreateAnimalService,
    private readonly updateAnimalService: UpdateAnimalService
  ) {}

  @Post()
  @DefaultCreateEntityDocumentation('Animal', 'Cria um animal')
  public async createAnimal(@Body() createAnimalDto: CreateAnimalDto) {
    return this.createAnimalService.create(createAnimalDto)
  }

  @Put()
  @DefaultUpdateEntityDocumentation('Animal', 'Atualiza o animalzinho')
  public async updateUser(@Body() updateAnimalDto: UpdateAnimalDto) {
    return this.updateAnimalService.update(updateAnimalDto)
  }
}
