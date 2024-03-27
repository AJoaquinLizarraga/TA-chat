import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Usuario } from './app.entity';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('detail')
  getUser(): Usuario {
    return this.appService.getUser('abel', 1234);
  }

  @Post()
  getStatus() {
    return this.appService.getStatus();
  }
}
