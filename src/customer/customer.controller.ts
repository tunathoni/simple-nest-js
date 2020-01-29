import {Body, Controller, Get, Post} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Biodata } from './interfaces/biodata.interface';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<Biodata[]> {
        return this.customerService.findAll();
    }

    @Post()
    async create(@Body() createCustomerDto: CreateCustomerDto ) {
        this.customerService.create(createCustomerDto);
    }
}
