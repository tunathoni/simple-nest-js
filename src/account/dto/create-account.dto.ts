import {IsString} from 'class-validator';
export class CreateAccountDto {
    @IsString()
    readonly accountName: string;

    @IsString()
    readonly accountAddress: string;
}