import {Body, Controller, Get, Post, UsePipes, ValidationPipe} from '@nestjs/common';
import {AccountService} from "./account.service";
import {Account} from "../interfaces/account.interface";
import {CreateAccountDto} from "./dto/create-account.dto";

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Get()
    async findAll(): Promise<Account[]> {
        return this.accountService.getAll();
    }

    @Post()
    @UsePipes(ValidationPipe)
    async create(@Body() createAccountDto: CreateAccountDto): Promise<Account> {
        return this.accountService.create(createAccountDto);
    }
}
