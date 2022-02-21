export class ResponseRO<T = never> {
  error: boolean;
  message?: string;
  result?: T;
}
