import { ItemsService } from './items.service';
import { Item } from '../items/item.entity';
import { CreateItemDto } from './dto/create-item-dto';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Promise<Item[]>;
    create(dto: Item): Promise<Item>;
    findOne(id: any): Promise<Item>;
    delete(id: any): Promise<void>;
    update(updateDto: CreateItemDto, id: any): Promise<Item>;
}
