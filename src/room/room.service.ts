import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomDto } from 'src/dto/room.dto';
import { Room } from 'src/entities/room.entity';
import { UtilityService } from 'src/utility/utility.service';
import { Repository } from 'typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    private readonly utilityService: UtilityService,
  ) {}

  async create(room: RoomDto) {
    const utils = this.roomRepository.create(room);
    const savedUtils = await this.roomRepository.save(utils);
    return savedUtils;
  }

  async searchRooms(filters: any, sortOpt: any, pagOpt: any) {
    let queryBuilder = this.roomRepository.createQueryBuilder('room');

    queryBuilder = this.utilityService.applyFilters(queryBuilder, filters);
    queryBuilder = this.utilityService.applySorting(queryBuilder, sortOpt);
    queryBuilder = this.utilityService.applyPagination(queryBuilder, pagOpt);

    return queryBuilder.getManyAndCount();
  }
}
