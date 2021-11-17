import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AnimalController } from './controllers/animal.controller'
import { Animal } from './entities'
import { AnimalLog } from './entities/animalLog.entity'
import { CreateAnimalService } from './services/create-animals.service'
import { UpdateAnimalService } from './services/update-animal.service'

@Module({
  imports: [TypeOrmModule.forFeature([Animal, AnimalLog])],
  exports: [TypeOrmModule],
  controllers: [AnimalController],
  providers: [CreateAnimalService, UpdateAnimalService]
})
export class AnimalModule {}
