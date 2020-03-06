import { Purchase } from "./purchase.entity";
import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { PurchaseDto } from "./dto/purchase.dto";
import { ItemsService } from "../items/items.service";
import { Item } from "src/items/item.entity";

@Injectable()
export class PurchaseService {

    constructor(
        @Inject('PURCHASE_REPOSITORY') private readonly purchaseRepository: typeof Purchase,
        @Inject(forwardRef(() => ItemsService)) private readonly itemService
        //private readonly itemService: ItemsService
    ) { }

    async findAll(): Promise<Purchase[]> {
        return await this.purchaseRepository.findAll();
    }

    async readItem(id: number): Promise<Item> {
        return await this.itemService.findOne(id);
    }

    async create(purchaseDto: PurchaseDto): Promise<Purchase> {
        const existingItem = (await this.readItem(purchaseDto.itemId)).id;


        if (existingItem === null) {
            console.log("Item is null")
        }


        const newPurchaseData = new Purchase({
            discountAmount: purchaseDto.discountAmount,
            purchaseType: purchaseDto.purchaseType,
            itemId: existingItem,
        });
        console.log(" existing item data ", existingItem)

        return (await newPurchaseData).save();
    }
}
