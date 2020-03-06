"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const item_entity_1 = require("../items/item.entity");
const purchase_entity_1 = require("../purchase/purchase.entity");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'dbAdmin',
                password: 'dbAdmin',
                database: 'nest',
            });
            sequelize.addModels([item_entity_1.Item, purchase_entity_1.Purchase]),
                await sequelize.sync();
            return sequelize;
        },
    },
];
//# sourceMappingURL=database.providers.js.map