import { Body, Controller, Post } from '@nestjs/common';
import { RoomService } from './room.service';
import { RoomDto } from 'src/dto/room.dto';

@Controller('api')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post('create-room')
  async create(@Body() room: RoomDto) {
    return await this.roomService.create(room);
  }
}
