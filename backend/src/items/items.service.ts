import { Injectable } from '@nestjs/common';
import { itemStatus } from './item-status.enum';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
    private todoItems: Item[] = [];

    findAll(): Item[] {
        return this.todoItems;
    }

    findById(id: string): Item {
        return this.todoItems.find((item) => item.id === id);
    }

    create(item: Item): Item {
        this.todoItems.push(item);
        return item;
    }

    updateStatus(id: string, status: itemStatus): Item {
        const targetItem = this.findById(id);
        targetItem.status = status;
        return targetItem;
    }

    delete(id: string): string {
        this.todoItems = this.todoItems.filter((item) => item.id !== id);
        return `item_id: ${id} delete success`;
    }
}
