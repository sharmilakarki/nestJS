import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService } from './items.service';
// import {CreateItemDto} from './dto/create-item-dto';
import { Item } from '../items/item.entity';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {

    //inject dependencies
    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    findAll(): Promise<Item[]> {
        // console.log((ur)
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() dto: Item): Promise<Item> {
        //return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
        return this.itemsService.create(dto);
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        //  return `id: ${id}`;
        return this.itemsService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id) {
        // return `Deleted id ${id}`;
        return this.itemsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(updateDto, id);
    }
}

