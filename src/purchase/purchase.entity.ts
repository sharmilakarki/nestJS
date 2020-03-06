import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Item } from "src/items/item.entity";


@Table
export class Purchase extends Model<Purchase> {
    @Column
    purchaseType: string;

    @Column
    discountAmount: number;

    @Column({
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    })
    id: number;

    @ForeignKey(() => Item)
    @Column
    itemId: number;
    
    @BelongsTo(() => Item)
    item: Item;
}