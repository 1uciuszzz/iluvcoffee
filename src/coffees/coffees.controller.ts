import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  find_all() {
    return `all coffees`;
  }

  @Get(':id')
  find_one(@Param('id') id: string) {
    return `one coffee ${id}`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
