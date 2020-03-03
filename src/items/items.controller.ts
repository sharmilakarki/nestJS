import { Controller,Get ,Post, Put, Delete, Body, Param} from '@nestjs/common';
import {ItemsService} from './items.service';
import {CreateItemDto} from './dto/create-item-dto';
import {Item} from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

    //inject dependencies
    constructor(private readonly itemsService: ItemsService) {}

    @Get()
    findAll(): Item[]{
       // console.log((ur)
        return this.itemsService.findAll();
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string{
        return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
    }

    @Get(':id')
    findOne(@Param('id') id): Item{
      //  return `id: ${id}`;
      return this.itemsService.findOne(id);
    }

    @Delete(':id')
    delete(@Param('id') id){
        return `Deleted id ${id}`;
    }

    @Put(':id')
    update(@Body() updateDto: CreateItemDto, @Param('id') id){
        return  `Update name ${updateDto.name}`;
    }
 }

