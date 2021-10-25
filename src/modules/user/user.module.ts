import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Athlete } from './entities/athlete.entity'
import { Author } from './entities/author.entity'
import { Book } from './entities/book.entity'
import { Club } from './entities/club.entity'
import { User } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Book, Author, Athlete, Club])],
  exports: [TypeOrmModule]
})
export class UserModule {}
