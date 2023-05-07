import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaService } from './modules/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';

const options = {
  origin: '*',
  credentials: true,
  optionsSuccessStatus: 200,
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(options);
  // Ativar documentação automática da API
  const config = new DocumentBuilder()
    .setTitle('Median')
    .setDescription('The Median API description')
    .setVersion('0.1')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  // Ativar validação de erros no corpo da solicitação - class-validator
  app.useGlobalPipes(new ValidationPipe());
 
  // Remoção automática de propriedades sem decoradores - DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
