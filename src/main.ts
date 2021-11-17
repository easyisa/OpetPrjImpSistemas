import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.setGlobalPrefix('api')
  app.enableCors()

  const configSwagger = new DocumentBuilder()
    .setTitle('OPET ')
    .setDescription('OPET API description')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('OPET')
    .build()
  const document = SwaggerModule.createDocument(app, configSwagger)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
