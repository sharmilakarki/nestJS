
import { Table, Column, Model, PrimaryKey, AutoIncrement } from "sequelize-typescript";
import { generate } from "rxjs";


@Table
export class Item extends Model<Item>{
    @Column
    name: String;
    @Column
    description: string;
    @Column
    quantity: number;
    
    @PrimaryKey
    @AutoIncrement
    @Column
    id: number;


}