import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item-dto';
import { Item } from './interfaces/item.interface';
export declare class ItemsController {
    private readonly itemsService;
    constructor(itemsService: ItemsService);
    findAll(): Item[];
    create(createItemDto: CreateItemDto): string;
    findOne(id: any): Item;
    delete(id: any): string;
    update(updateDto: CreateItemDto, id: any): string;
}
