import { Injectable } from '@nestjs/common';
import { Biodata } from './interfaces/biodata.interface';
const uuidv1 = require('uuid/v1');

@Injectable()
export class CustomerService {
    private readonly customer: Biodata[] = [];

    create(customer: Biodata) {
        customer.id = uuidv1();
        this.customer.push(customer);
    }

    findAll(): Biodata[] {
        return this.customer;
    }
}
