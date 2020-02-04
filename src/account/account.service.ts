import { Injectable } from '@nestjs/common';
import {Account} from "../interfaces/account.interface";
import {StringUtil} from "../utils/stringUtil";

@Injectable()
export class AccountService {
    private accounts: Array<Account> = [];

    create(account: Account): Account {
        account.idAccount = StringUtil.getUUID();
        this.accounts.push(account);
        return account;
    }

    getAll(): Array<Account> {
        return this.accounts;
    }
}
