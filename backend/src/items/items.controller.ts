import { 
    Body,
    Controller, 
    Get, 
    Post,
    Delete, 
    Param,
    Patch, 
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { itemStatus } from './item-status.enum';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: string): Item {
        return this.itemsService.findById(id);
    }

    @Post()
    create(@Body() createItem: CreateItemDto): Item {
        return this.itemsService.create(createItem);
    }

    @Patch(':id')
    updateToDoStatus(
        @Param('id') id: string,
        @Body('status') status: itemStatus,
    ): Item {
        return this.itemsService.updateToDoStatus(id,status);
    }

    @Delete(':id')
    delete(@Param('id') id: string): string {
        return this.itemsService.delete(id);
    }
}