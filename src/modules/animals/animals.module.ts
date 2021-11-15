import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Animal } from './entities'
import { AnimalLog } from './entities/animalLog.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Animal, AnimalLog])],
  exports: [TypeOrmModule]
})
export class AnimalModule {}
