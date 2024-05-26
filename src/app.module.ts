import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilityModule } from './utility/utility.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/database/db.config';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UtilityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
