import {IsString, IsEmail} from 'class-validator';
import {CreateBankAccountDto} from "../../bank-account/dto/create-bank-account.dto";
export class CreateBeneficiaryDto extends CreateBankAccountDto{
    @IsString()
    id: string;

    @IsString()
    readonly idAccount: string;

    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    address: string;

    @IsString()
    currencyId: string;

    @IsString()
    countryId: string;
}