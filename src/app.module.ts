import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoomModule } from './room/room.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/database/db.config';
import { UtilityModule } from './utility/utility.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    RoomModule,
    UtilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
