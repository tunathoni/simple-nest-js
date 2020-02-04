import { Test, TestingModule } from '@nestjs/testing';
import { BeneficiaryController } from './beneficiary.controller';

describe('Beneficiary Controller', () => {
  let controller: BeneficiaryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BeneficiaryController],
    }).compile();

    controller = module.get<BeneficiaryController>(BeneficiaryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
