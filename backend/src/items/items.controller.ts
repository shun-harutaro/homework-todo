import { Controller, Get } from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemService.findAll();
    }
}
