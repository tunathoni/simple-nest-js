import {Body, Controller, Get, Post} from '@nestjs/common';
import {BankAccountService} from "./bank-account.service";
import {BankAccount} from "../interfaces/bank-account.interface";
import {CreateBankAccountDto} from "./dto/create-bank-account.dto";
import {BcaDec} from "../decorators/bank-bca-decorators";


@Controller('bank-account')
@BcaDec
export class BankAccountController {

    constructor(private readonly bankAccountService: BankAccountService) {
        // console.log('From Decorator = ', BcaDec().name);
    }

    @Get()
    async findAll(): Promise<BankAccount[]> {
        return this.bankAccountService.getAll();
    }

    @Post()
    async create(@Body() createBankAccountDto: CreateBankAccountDto): Promise<BankAccount> {
        return this.bankAccountService.create(createBankAccountDto);
    }
}
