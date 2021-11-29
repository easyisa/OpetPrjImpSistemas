import { UpdateAnimalDto } from 'src/modules/animals/dtos/update-animal.dto'
import { Animal } from 'src/modules/animals/entities'
import { AnimalSize, AnimalType } from 'src/modules/animals/enum'
import { City, State } from 'src/shared/enums'

export const mockUpdateAnimalBody = (): UpdateAnimalDto => {
  const animalBody = new UpdateAnimalDto()
  animalBody.name = 'Jujuba'
  animalBody.type = AnimalType.CAT
  animalBody.city = City.CURITIBA
  animalBody.state = State.PR
  animalBody.size = AnimalSize.SMALL
  animalBody.mounths = '1'
  animalBody.years = '0'
  return animalBody
}

export const mockAnimalInRepository = () => {
  return new Animal()
}
