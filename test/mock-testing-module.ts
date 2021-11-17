import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { testConfig } from 'src/config/data-base'
import { AnimalModule } from 'src/modules/animals/animals.module'
import { UserModule } from 'src/modules/user/user.module'

export const testingModule = (): Promise<TestingModule> => {
  return Test.createTestingModule(testingModuleConfig).compile()
}

export const testingModuleConfig = {
  imports: [
    TypeOrmModule.forRoot({
      database: testConfig.e2eDatabase,
      type: 'postgres',
      port: 5432,
      entities: ['./**/*.entity.ts']
    }),

    AnimalModule,
    UserModule
  ]
}
