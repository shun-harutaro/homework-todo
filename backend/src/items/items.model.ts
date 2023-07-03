import { itemStatus } from './item-status.enum';

export interface Item {
    id: string;
    body: string;
    status: itemStatus;
    createdAt: string;
    updatedAt: string;
}