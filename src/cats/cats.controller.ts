import { Controller, Get, Header, Param, Post } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This actions adds a new cats';
  }
  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a ${params.id} cat`;
  }
  @Get()
  @Header('Cache-Control', 'none')
  findAll(): string {
    return 'A very good night!';
  }
}
