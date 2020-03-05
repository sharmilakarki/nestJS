import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item-dto';
export declare class ItemsService {
    private readonly itemsRepository;
    constructor(itemsRepository: typeof Item);
    findAll(): Promise<Item[]>;
    findOne(id: number): Promise<Item>;
    create(item: Item): Promise<Item>;
    delete(id: number): Promise<void>;
    update(dto: CreateItemDto, id: number): Promise<Item>;
}
