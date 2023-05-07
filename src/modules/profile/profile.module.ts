import { Module } from '@nestjs/common';
import { ProfileController } from './controller/profile.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { ProfileService } from './service/profile.service';
import { ProfileRepository } from './repository';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ProfileRepository],
  imports: [PrismaModule],
})
export class ProfileModule {}