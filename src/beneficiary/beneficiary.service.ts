import { Injectable } from '@nestjs/common';
import {Beneficiary} from "../interfaces/beneficiary.interface";
import {BankAccount} from "../interfaces/bank-account.interface";
import {BeneficiaryAdapter, BeneficiaryAdapterType} from "../adapters/beneficiaryAdapter";
import {StringUtil} from "../utils/stringUtil";
import {BankAccountService} from "../bank-account/bank-account.service";

@Injectable()
export class BeneficiaryService {
    private beneficiaries: Array<Beneficiary> = [];

    constructor(private bankAccountService: BankAccountService) {}

    create(beneficiary: Beneficiary, bankAccount: BankAccount): BeneficiaryAdapterType {
        beneficiary.id = StringUtil.getUUID();

        this.beneficiaries.push(beneficiary);

        let insertBankAccount: BankAccount = this.bankAccountService.create(bankAccount);
        console.log(beneficiary, insertBankAccount);
        return BeneficiaryAdapter.serialize(beneficiary, insertBankAccount);

    }

    getAll() {
        return this.beneficiaries;
    }
}
