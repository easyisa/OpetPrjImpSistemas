import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Author } from './entities/author.entity'
import { Book } from './entities/book.entity'
import { User } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User, Book, Author])],
  exports: [TypeOrmModule]
})
export class UserModule {}
