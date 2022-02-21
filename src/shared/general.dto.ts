import { IsNotEmpty, IsString } from 'class-validator';

export class ResponseRO<T = never> {
  error: boolean;
  message?: string;
  result?: T;
}

export class CalculateQueryDTO {
  @IsString()
  @IsNotEmpty()
  query: string;
}
