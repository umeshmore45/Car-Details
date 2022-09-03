import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEntity } from '../reports/reports.entity';
import { UserEntity } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, ReportsEntity])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule { }
