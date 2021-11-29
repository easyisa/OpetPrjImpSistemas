import { INestApplication } from '@nestjs/common'
import { SuperAgentTest } from 'supertest'
import { mockAnimalInRepository, mockUpdateAnimalBody } from 'test/mocks/mock-animal'
import { cleanDatabase } from 'test/utils/clean-database-helper'
import { startSupertestAgent, startTestApplication } from 'test/utils/test-helper'

describe('Animal Controller', () => {
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

  describe('Update animal', () => {
    it('Should create user', async () => {
      const animalBody = mockUpdateAnimalBody()
      const animal = mockAnimalInRepository()
      await superAgentTest.post(`/api/animal/${animal.id}`).send(animalBody).expect(201)
    })

    it('Should create user', async () => {
      await superAgentTest.post(`/api/animal/banana`).expect(400)
    })

    it('Should create user', async () => {
      const animalBody = mockUpdateAnimalBody()
      await superAgentTest.post(`/api/animal/banana`).send(animalBody).expect(404)
    })
  })
})
