import { IsString } from 'class-validator';

export class CreateCustomerDto {
    @IsString()
    readonly id: string;

    @IsString()
    readonly name: string;

    @IsString()
    readonly phone: string;

    @IsString()
    readonly address: string;

    @IsString()
    readonly hobby: string;
}