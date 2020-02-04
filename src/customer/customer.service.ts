import { Injectable } from '@nestjs/common';
import { Biodata } from '../interfaces/biodata.interface';
import {StringUtil} from "../utils/stringUtil";

@Injectable()
export class CustomerService {
    private readonly customer: Biodata[] = [];

    create(customer: Biodata) {
        customer.id = StringUtil.getUUID();
        this.customer.push(customer);
        return customer;
    }

    findAll<T>(): Array<Biodata> {
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
