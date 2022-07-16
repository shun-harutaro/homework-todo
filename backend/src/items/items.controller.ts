import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { itemStatus } from './item-status.enum';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemService.findAll();
    }

    @Post()
    create(@Body('id') id: string, @Body('body') body: string): Item {
        return this.itemService.create({
            id,
            body,
            status: itemStatus.TODO,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
    }
}