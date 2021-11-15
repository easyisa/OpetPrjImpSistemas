import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getConnectionOptions } from 'typeorm'
import { AnimalModule } from './modules/animals/animals.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => await getConnectionOptions()
    }),
    UserModule,
    AnimalModule
  ]
})
export class AppModule {}
