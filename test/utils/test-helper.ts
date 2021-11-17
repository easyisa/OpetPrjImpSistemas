import { TestingModule } from '@nestjs/testing'
import { ValidationPipe, INestApplication } from '@nestjs/common'
import { agent, SuperAgentTest } from 'supertest'
import { testingModule } from 'test/mock-testing-module'

export const startTestApplication = async (): Promise<INestApplication> => {
  const module: TestingModule = await testingModule()

  const app = module.createNestApplication()
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  await app.init()

  return app
}

export const startSupertestAgent = (app: INestApplication): SuperAgentTest => {
  return agent(app.getHttpServer())
}
