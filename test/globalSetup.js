/* eslint-disable @typescript-eslint/no-var-requires */
require('ts-node/register')
const { createConnection } = require('typeorm')
const { testConfig } = require('../src/config/data-base')

module.exports = async function () {
  const connection = await createConnection({
    ...testConfig,
    type: 'postgres',
    port: 5432,
    database: testConfig,
    migrations: ['./src/migration/*.ts']
  })

  await connection.runMigrations({ transaction: 'all' })
}
