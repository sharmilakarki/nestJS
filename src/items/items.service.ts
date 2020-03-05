import { Injectable, Inject } from '@nestjs/common';
import { Item } from './item.entity';
import { CreateItemDto } from './dto/create-item-dto';


@Injectable()
export class ItemsService {

    constructor(@Inject('ITEMS_REPOSITORY') private readonly itemsRepository: typeof Item) { }

    async findAll(): Promise<Item[]> {
        return await this.itemsRepository.findAll<Item>();
    }

    async findOne(id: number): Promise<Item> {
        return await this.itemsRepository.findOne({
            where: {
                id: id
            }
        });
    }

    async create(item: Item): Promise<Item> {
        const savedItem = new this.itemsRepository(item);
        return await savedItem.save();
    }

    async delete(id: number) {
        const item = await this.findOne(id);
        return item.destroy();
    }

    async update(dto: CreateItemDto, id: number): Promise<Item> {
        const item = this.findOne(id);
        // (await item).update({
        //     name: dto.name, description: dto.description, quantity: dto.quantity
        // });
       
        // return (await item).save();
       
        (await item).name=dto.name;
        (await item).description=dto.description;
        (await item).quantity=dto.quantity;
       
        return (await item).save();
    }
}
