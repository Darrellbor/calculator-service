import { Controller, Get, Query, ValidationPipe as QueryValidationPipe } from '@nestjs/common';

import { AppService } from './app.service';
import { CalculateQueryDTO } from 'shared/general.dto';

@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('calculus')
  calculate(
    @Query(
      new QueryValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true },
        forbidNonWhitelisted: true,
      })
    )
    { query }: CalculateQueryDTO
  ) {
    return this.appService.calculus(query);
  }
}
