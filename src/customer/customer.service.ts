import { Injectable } from '@nestjs/common';
import { Biodata } from './interfaces/biodata.interface';
const uuidv4 = require('uuid/v4');

@Injectable()
export class CustomerService {
    private readonly customer: Biodata[] = [];

    create(customer: Biodata) {
        let uuid: string = uuidv4();
        customer.id = uuid;
        this.customer.push(customer);
    }

    findAll(): Biodata[] {
        return this.customer;
    }

    findOne(id: string): Biodata {
        let checkBiodata: any;

        checkBiodata = this.customer.filter((v) => {
            return v.id === id;
        });

        return checkBiodata;
    }
}
