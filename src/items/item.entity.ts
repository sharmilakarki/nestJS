
import { Table, Column, Model, PrimaryKey, AutoIncrement, BelongsTo, HasMany } from "sequelize-typescript";
import { generate } from "rxjs";
import { PurchaseService } from "src/purchase/purchase.service";
import { Purchase } from "src/purchase/purchase.entity";


@Table
export class Item extends Model<Item>{
    @Column
    name: String;
    @Column
    description: string;
    @Column
    quantity: number;

    @Column({
        primaryKey: true,
        autoIncrement: true,
        autoIncrementIdentity: true
    })
    
    id: number;

    @HasMany(() => Purchase)
    purchase: Purchase[];

}