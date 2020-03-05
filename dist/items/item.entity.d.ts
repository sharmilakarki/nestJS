import { Model } from "sequelize-typescript";
export declare class Item extends Model<Item> {
    name: String;
    description: string;
    quantity: number;
    id: number;
}
