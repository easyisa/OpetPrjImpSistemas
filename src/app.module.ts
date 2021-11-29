import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getConnectionOptions } from 'typeorm'
import { testConfig } from './config/data-base'
import { AnimalModule } from './modules/animals/animals.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          database: testConfig.e2eDatabase
        })
    }),
    UserModule,
    AnimalModule
  ]
})
export class AppModule {}
