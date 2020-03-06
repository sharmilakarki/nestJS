import { Controller, Get, Param, Inject, Body, Post } from "@nestjs/common";
import { Purchase } from "./purchase.entity";
import { PurchaseService } from "./purchase.service";
import { PurchaseDto } from "./dto/purchase.dto";


@Controller('purchase')
export class PurchaseController {

    constructor(private readonly purchaseService: PurchaseService) { };

    @Get()
    findAll(): Promise<Purchase[]> {
        return this.purchaseService.findAll();
    }

    @Post()
    create(@Body() dto: PurchaseDto): Promise<Purchase> {
        return this.purchaseService.create(dto);
    }
}