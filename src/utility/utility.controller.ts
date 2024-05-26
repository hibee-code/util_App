import { Body, Controller, Post } from '@nestjs/common';
import { UtilityService } from './utility.service';
import { UtilityDto } from 'src/dto/utility.dto';

@Controller('utility')
export class UtilityController {
  constructor(private readonly utilsService: UtilityService) {}

  @Post('create-util')
  async create(@Body() utility: UtilityDto) {
    return await this.utilsService.create(utility);
  }
}
