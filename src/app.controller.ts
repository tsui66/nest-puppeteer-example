import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async crawl() {
    return await this.appService.crawl('https://readhub.cn/topic/87rhlGcCZpN');
  }
}
