import { Controller, Get, Header, Query, Redirect } from '@nestjs/common';

@Controller('rats')
export class RatsController {
  @Get('docs')
  @Header('cached-control', 'none')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }
}
