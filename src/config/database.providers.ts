import { Sequelize } from 'sequelize-typescript';
import { Item } from '../items/item.entity';
import { Purchase } from '../purchase/purchase.entity';


export const databaseProviders=[
{
    provide: 'SEQUELIZE',
    useFactory: async ()=>{
        const sequelize = new Sequelize({
           dialect: 'mysql',
           host: 'localhost',
           port: 3306,
           username: 'dbAdmin',
           password: 'dbAdmin',
           database: 'nest', 
        });
        sequelize.addModels([Item ,Purchase]),
       // sequelize.addModels([Purchase]),
        await sequelize.sync();
        return sequelize;
    },
},

];