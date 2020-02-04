import {Body, Controller, Get, Post} from '@nestjs/common';
import {BeneficiaryService} from "./beneficiary.service";
import {BeneficiaryAdapterType} from "../adapters/beneficiaryAdapter";
import {CreateBeneficiaryDto} from "./dto/create-beneficiary.dto";
import {Beneficiary} from "../interfaces/beneficiary.interface";
import {BankAccount} from "../interfaces/bank-account.interface";

@Controller('beneficiary')
export class BeneficiaryController {
    constructor(private readonly beneficiaryService: BeneficiaryService) {}

    @Get()
    async getAll(): Promise<Beneficiary[]> {
        return this.beneficiaryService.getAll();
    }

    @Post()
    async create(@Body() createBeneficiaryDto: CreateBeneficiaryDto): Promise<BeneficiaryAdapterType> {
        let beneficiary: Beneficiary = {
            id: '',
            idAccount: createBeneficiaryDto.idAccount,
            lastName: createBeneficiaryDto.lastName,
            firstName: createBeneficiaryDto.firstName,
            email: createBeneficiaryDto.email,
            address: createBeneficiaryDto.address,
            countryId: createBeneficiaryDto.countryId,
            currencyId: createBeneficiaryDto.currencyId,
        };

        let bankAccount: BankAccount = {
            id: '',
            idAccount: createBeneficiaryDto.idAccount,
            bankName: createBeneficiaryDto.bankName,
            bankAccountNumber: createBeneficiaryDto.bankAccountNumber,
            bankAccountHolderName: createBeneficiaryDto.bankAccountHolderName,
            bankCurrencyId: createBeneficiaryDto.bankCurrencyId
        };
        return this.beneficiaryService.create(beneficiary, bankAccount);
    }
}
