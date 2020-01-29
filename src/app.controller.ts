import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getA(): string {
    return this.appService.getHello();
  }

  @Get('thankyou')
  getB(): string {
    return "Thank you Toni";
  }
}
