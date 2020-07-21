import { Module } from '@nestjs/common';
import {BankAccountController} from "./bank-account.controller";
import {BankAccountService} from "./bank-account.service";

@Module({
    controllers: [BankAccountController],
    providers: [BankAccountService]
})
export class BankAccountModule {}