import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerService } from './customer/customer.service';
import { BankAccountService } from './bank-account/bank-account.service';
import { BeneficiaryController } from './beneficiary/beneficiary.controller';
import { BankAccountController } from './bank-account/bank-account.controller';
import { BeneficiaryService } from './beneficiary/beneficiary.service';
import { AccountService } from './account/account.service';
import { AccountController } from './account/account.controller';

@Module({
  imports: [],
  controllers: [AppController, CustomerController, BeneficiaryController, BankAccountController, AccountController],
  providers: [AppService, CustomerService, BankAccountService, BeneficiaryService, AccountService],
})
export class AppModule {}
