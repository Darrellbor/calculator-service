import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({ version: '1' })
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('calculus')
  calculate(@Query('query') query: string) {
    return this.appService.calculus(query);
  }
}
