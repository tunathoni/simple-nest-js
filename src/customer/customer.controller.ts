import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Biodata } from '../interfaces/biodata.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<Biodata[]> {
        return this.customerService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') idCustomer): Promise<Biodata> {
        return this.customerService.findOne(idCustomer);
    }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto ) {
        return this.customerService.create(createCustomerDto);
    }
}
