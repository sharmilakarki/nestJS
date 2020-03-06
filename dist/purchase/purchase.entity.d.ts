import { Model } from "sequelize-typescript";
import { Item } from "src/items/item.entity";
export declare class Purchase extends Model<Purchase> {
    purchaseType: string;
    discountAmount: number;
    id: number;
    itemId: number;
    item: Item;
}
