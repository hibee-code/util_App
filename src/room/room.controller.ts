import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from 'src/dto/room.dto';

@Controller('api')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create-room')
  async create(@Body() room: RoomDto) {
    return await this.roomService.create(room);
  }
  @Get('rooms')
  async getRooms(
    @Query('filters') filters: string,
    @Query('sort') sort: string,
    @Query('page') page: string,
    @Query('limit') limit: string,
  ) {
    const filterOptions = filters ? JSON.parse(filters) : [];
    const sortOptions = sort ? JSON.parse(sort) : [];
    const paginationOptions = {
      page: parseInt(page),
      limit: parseInt(limit),
    };

    const [rooms, total] = await this.roomService.searchRooms(
      filterOptions,
      sortOptions,
      paginationOptions,
    );
    return { data: rooms, total };
  }
}
