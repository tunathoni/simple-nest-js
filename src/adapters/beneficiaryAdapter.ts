import {Beneficiary} from "../interfaces/beneficiary.interface";
import {BankAccount} from "../interfaces/bank-account.interface";

export interface BeneficiaryAdapterType {
    beneficiaryId: string;
    email: string;
    firstName: string;
    lastName: string;
    address: string;
    currencyId: string;
    countryId: string;
    bankAccount: BankAccount
}

export class BeneficiaryAdapter {
    static serialize(beneficiary: Beneficiary, bankAccount: BankAccount): BeneficiaryAdapterType {
        return {
            address: beneficiary.address,
            countryId: beneficiary.countryId,
            currencyId: beneficiary.currencyId,
            email: beneficiary.email,
            firstName: beneficiary.firstName,
            lastName: beneficiary.lastName,
            beneficiaryId: beneficiary.id,
            bankAccount: {
                id: bankAccount.id,
                bankAccountHolderName: bankAccount.bankAccountHolderName,
                bankCurrencyId: bankAccount.bankAccountHolderName,
                bankAccountNumber: bankAccount.bankAccountNumber,
                bankName: bankAccount.bankName,
                idAccount: bankAccount.idAccount
            },
        }
    }
}