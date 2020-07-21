import { Injectable } from '@nestjs/common';
import {Account} from "../interfaces/account.interface";
import {StringUtil} from "../utils/stringUtil";
import {CreateAccountDto} from "./dto/create-account.dto";

@Injectable()
export class AccountService {
    private accounts: Array<Account> = [];

    create(account: CreateAccountDto): Account {
        let { accountName, accountAddress } = account;
        let accountData: Account = {
            idAccount: StringUtil.getUUID(),
            accountAddress,
            accountName
        };

        this.accounts.push(accountData);
        return accountData;
    }

    getAll(): Array<Account> {
        return this.accounts;
    }
}
