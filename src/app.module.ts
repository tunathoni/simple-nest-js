import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {AccountModule} from "./account/account.module";
import {BankAccountModule} from "./bank-account/bank-account.module";
import {BeneficiaryModule} from "./beneficiary/beneficiary.module";
import {CustomerModule} from "./customer/customer.module";

@Module({
  imports: [AccountModule, BankAccountModule, BeneficiaryModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
