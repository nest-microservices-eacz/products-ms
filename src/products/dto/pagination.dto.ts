import { Type } from 'class-transformer';
import { IsNumber, IsPositive, Max } from 'class-validator';

export class PaginationDto {
  @IsNumber()
  @IsPositive()
  @Type(() => Number)
  page: number = 1;

  @IsNumber()
  @Type(() => Number)
  @IsPositive()
  @Max(100)
  limit: number = 10;
}
