import { Injectable } from '@nestjs/common';
import { SelectQueryBuilder } from 'typeorm';

export interface PagParams {
  page: number;
  limit: number;
}

export interface FilterParams {
  field: string;
  value: string;
  operator: string;
}

export interface SortParams {
  field: string;
  order: 'ASC' | 'DESC';
}

@Injectable()
export class UtilityService {
  applyPagination<T>(
    query: SelectQueryBuilder<T>,
    pagOpt: PagParams,
  ): SelectQueryBuilder<T> {
    const { page, limit } = pagOpt;
    query.skip(page === 0 ? page : (page - 1) * limit).take(limit);
    return query;
  }

  applyFilters<T>(
    queryBuilder: SelectQueryBuilder<T>,
    filters: FilterParams[],
  ): SelectQueryBuilder<T> {
    filters.forEach(({ field, operator, value }) => {
      switch (operator) {
        case 'equals':
          queryBuilder.andWhere(`"${field}" = :value`, { value });
          break;
        case 'not':
          queryBuilder.andWhere(`"${field}" != :value`, { value });
          break;
        case 'gt':
          queryBuilder.andWhere(`"${field}" > :value`, { value });
          break;
        case 'gte':
          queryBuilder.andWhere(`"${field}" >= :value`, { value });
          break;
        case 'lt':
          queryBuilder.andWhere(`"${field}" < :value`, { value });
          break;
        case 'lte':
          queryBuilder.andWhere(`"${field}" <= :value`, { value });
          break;
        case 'like':
          queryBuilder.andWhere(`"${field}" LIKE :value`, {
            value: `%${value}%`,
          });
          break;
        case 'in':
          queryBuilder.andWhere(`"${field}" IN (:...values)`, {
            values: value,
          });
          break;
        case 'notIn':
          queryBuilder.andWhere(`"${field}" NOT IN (:...values)`, {
            values: value,
          });
          break;
        case 'isNull':
          queryBuilder.andWhere(`"${field}" IS NULL`);
          break;
        case 'isNotNull':
          queryBuilder.andWhere(`"${field}" IS NOT NULL`);
          break;
        default:
          break;
      }
    });
    return queryBuilder;
  }

  applySorting<T>(
    query: SelectQueryBuilder<T>,
    sortOpt: SortParams[],
  ): SelectQueryBuilder<T> {
    sortOpt.forEach(({ field, order }) => {
      query.addOrderBy(`"${field}"`, order);
    });
    return query;
  }
}
