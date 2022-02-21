import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import mexp from 'math-expression-evaluator';

@Injectable()
export class AppService {
  async calculus(query: string) {
    const parsedMaths = Buffer.from(query, 'base64');
    Logger.log('Parsed Maths: ', parsedMaths);
    try {
      const value = mexp.eval('2+2');
      return value;
    } catch (err) {
      Logger.error('Error', err);
      throw new HttpException('Query could not be evaluated', HttpStatus.BAD_REQUEST);
    }
  }
}
