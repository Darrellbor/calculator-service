import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';

import { ResponseRO } from 'shared/general.dto';

@Injectable()
export class AppService {
  calculus(query: string): ResponseRO<string> {
    const parsedMaths = Buffer.from(query, 'base64').toString();
    try {
      const value = eval(parsedMaths);
      return { error: false, result: value };
    } catch (err) {
      Logger.error('Error', err);
      throw new HttpException('Query could not be evaluated', HttpStatus.BAD_REQUEST);
    }
  }
}
