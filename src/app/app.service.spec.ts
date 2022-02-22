import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('Calculus', () => {
    it('should pass when right calculation is supplied', async () => {
      const query = Buffer.from('2+2+(4-1)').toString('base64');
      await expect(service.calculus(query)).toMatchObject({ error: false, result: 7 });
    });

    it('should fail when right calculation is supplied', async () => {
      const query = Buffer.from('2+2+(4-').toString('base64');
      try {
        await service.calculus(query);
      } catch (err) {
        expect(err.message).toBe('Query could not be evaluated');
      }
    });
  });
});
