import { Module } from '@nestjs/common';
import { RoomController } from './room.controller';
import { RoomService } from './room.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UtilityModule } from 'src/utility/utility.module';
import { Room } from 'src/entities/room.entity';
import { UtilityService } from 'src/utility/utility.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room]), UtilityModule],
  controllers: [RoomController],
  providers: [RoomService, UtilityService],
  exports: [RoomService],
})
export class RoomModule {}
