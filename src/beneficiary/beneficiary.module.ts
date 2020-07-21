import { Module } from '@nestjs/common';
import {BeneficiaryController} from "./beneficiary.controller";
import {BeneficiaryService} from "./beneficiary.service";
import {BankAccountService} from "../bank-account/bank-account.service";

@Module({
    controllers: [BeneficiaryController],
    providers: [BeneficiaryService, BankAccountService]
})

export class BeneficiaryModule {}