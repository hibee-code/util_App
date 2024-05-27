import { Injectable } from '@nestjs/common';
import { RoomDto } from 'src/dto/room.dto';
import { Room } from 'src/entities/room.entity';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class RoomService {
  private dbManager: EntityManager;
  constructor(private readonly datasource: DataSource) {
    this.dbManager = datasource.manager;
  }

  async create(room: RoomDto) {
    const utils = this.dbManager.create(Room, room);
    const savedUtils = await this.dbManager.save(utils);
    return savedUtils;
  }
}
