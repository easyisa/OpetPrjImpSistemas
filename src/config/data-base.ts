export const prodConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'postgres',
  synchronize: true,
  entities: ['dist/modules/*/entities/*.entity.js'],
  migrations: ['dist/migration/*.js'],
  cli: {
    migrationsDir: 'src/migration'
  }
}

export const testConfig = {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  username: 'root',
  password: 'root',
  e2eDatabase: 'teste'
}
// export const testConfigur = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'root',
//   password: 'root',
//   database: 'teste',
//   synchronize: true,
//   entities: ['dist/modules/*/entities/*.entity.js'],
//   migrations: ['dist/migration/*.js'],
//   cli: {
//     migrationsDir: 'src/migration'
//   }
// }
