import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Animal } from './entities'

@Module({
  imports: [TypeOrmModule.forFeature([Animal])],
  exports: [TypeOrmModule]
})
export class AnimalModule {}
