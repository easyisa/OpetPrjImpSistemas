import { INestApplication } from '@nestjs/common'
import { SuperAgentTest } from 'supertest'
import { mockUserBody } from 'test/mocks/mock-user'
import { cleanDatabase } from 'test/utils/clean-database-helper'
import { startSupertestAgent, startTestApplication } from 'test/utils/test-helper'

describe('User Controller', () => {
  let app: INestApplication
  let superAgentTest: SuperAgentTest

  beforeAll(async () => {
    app = await startTestApplication()
    superAgentTest = startSupertestAgent(app)
    await cleanDatabase()
  })

  afterEach(async () => {
    await cleanDatabase()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('Create user', () => {
    it('Should create user', async () => {
      const userBody = mockUserBody()
      await superAgentTest.post('/api/user').send(userBody).expect(201)
    })
  })
})
