import { Injectable } from '@nestjs/common';
import { Item } from './items.model';

@Injectable()
export class ItemsService {
    private todoItems: Item[] = [];

    findAll() {
        return this.todoItems;
    }

    create(item: Item) {
        this.todoItems.push(item);
        return item;
    }
}
