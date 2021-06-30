import { Injectable } from '@nestjs/common';
import type { Browser, Page } from 'puppeteer';
import { InjectBrowser, InjectPage } from 'nest-puppeteer';

@Injectable()
export class AppService {
  constructor(
    @InjectBrowser() private readonly browser: Browser,
    @InjectPage() private readonly page: Page,
  ) {}

  // https://github.com/tinovyatkin/nest-puppeteer

  async crawl(url: string) {
    await this.page.goto(url, { waitUntil: 'networkidle2' });
    const content = await this.page.evaluate(() => {
      return window['__INITIAL_STATE__'];
    });
    return { content };
  }
}
