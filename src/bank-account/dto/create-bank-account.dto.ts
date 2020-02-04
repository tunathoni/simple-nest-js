import {IsString} from 'class-validator';
export class CreateBankAccountDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly idAccount: string;

    @IsString()
    readonly bankName: string;

    @IsString()
    readonly bankAccountNumber: string;

    @IsString()
    readonly bankCurrencyId: string;

    @IsString()
    readonly bankAccountHolderName: string;
}