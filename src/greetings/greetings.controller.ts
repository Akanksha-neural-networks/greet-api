import { Controller, Get } from '@nestjs/common';

@Controller('greetings')
export class GreetingsController {
  @Get()
  getHello(): string {
    return `Hello World!!`;
  }
}
