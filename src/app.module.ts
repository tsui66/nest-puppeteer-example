import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PuppeteerModule } from 'nest-puppeteer';

@Module({
  imports: [
    PuppeteerModule.forRoot(
      { isGlobal: true }, // optional, any Puppeteer launch options here or leave empty for good defaults */,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
