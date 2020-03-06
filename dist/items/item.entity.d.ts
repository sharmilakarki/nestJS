import { Model } from "sequelize-typescript";
import { Purchase } from "src/purchase/purchase.entity";
export declare class Item extends Model<Item> {
    name: String;
    description: string;
    quantity: number;
    id: number;
    purchase: Purchase[];
}
