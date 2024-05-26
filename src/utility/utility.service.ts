import { Injectable } from '@nestjs/common';
import { UtilityDto } from 'src/dto/utility.dto';
import { Utility } from 'src/entities/utility.entity';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class UtilityService {
  private dbManager: EntityManager;
  constructor(private readonly datasource: DataSource) {
    this.dbManager = datasource.manager;
  }

  async create(utility: UtilityDto) {
    const utils = this.dbManager.create(Utility, utility);
    const savedUtils = await this.dbManager.save(utils);
    return savedUtils;
  }
}
