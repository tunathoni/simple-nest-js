import { Injectable } from '@nestjs/common';
import {BankAccount} from "../interfaces/bank-account.interface";
import {StringUtil} from "../utils/stringUtil";

@Injectable()
export class BankAccountService {
    private bankAccount: Array<BankAccount> = [];

    create(bank: BankAccount): BankAccount {
        bank.id = StringUtil.getUUID();
        this.bankAccount.push(bank);
        return bank;
    }

    getAll(): Array<BankAccount> {
        return this.bankAccount;
    }
}
