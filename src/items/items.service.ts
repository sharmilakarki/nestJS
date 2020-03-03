import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface';


@Injectable()
export class ItemsService {
 private readonly items: Item[] = [
    {
        id:"123332",
        name:"Mouse",
        quantity: 500,
        description: "One item"
    },
    {
        id:"123332",
        name:"Monitor",
        quantity: 500,
        description: "another item"
    },
    {
        id: "123332",
        name:"Keyboard",
        quantity: 500,
        description: "another another item"
    }
]

findAll(): Item[]{
    return this.items;
}

findOne(id: string): Item{
    return this.items.find(item=> item.id===id);
}
}
